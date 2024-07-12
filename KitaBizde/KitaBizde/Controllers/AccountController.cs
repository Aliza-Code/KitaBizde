using KitaBizde.Core.Convertors;
using KitaBizde.Core.DTOs;
using KitaBizde.Core.Security;
using KitaBizde.Core.Services.Interfaces;
using KitaBizde.DataLayer.Entities.User;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

using KitaBizde.Core.Senders;
using Microsoft.AspNetCore.Authorization;
using Humanizer.Localisation;
using KitaBizde.DataLayer.Context;
using Microsoft.EntityFrameworkCore;

namespace KitaBizde.web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        
        private IUserService _userService;
        private KitaBizdeContext _context;


        public AccountController(IUserService userService ,KitaBizdeContext context)
        {
            _userService = userService;
            _context = context;
        }


        [HttpGet]
        [Route("GetUsers")]
        public async Task<ActionResult> Get()
        {
            List < User > users= await _context.Users.ToListAsync();
            return Ok(users);
        }


        #region Register
        [AllowAnonymous]
        [HttpPost]
        [Route("Register")]
        public IActionResult Register([FromForm] RegisterViewModel register)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            //agar username ya Email gablan mojud bud error bede va view bargardun
            if /*(_userService.IsExistUserName(register.UserName) || */(_userService.IsExistUserEmail(FixedText.FixEmail(register.Email)))
            {
                ModelState.AddModelError("Email", "نام کاربری معتبز نمی باشد");
                return BadRequest();
            }

            //AddUserToDataBase
            DataLayer.Entities.User.User user = new User()
            {
                PhoneNumber = register.phoneNumber,
                Email = FixedText.FixEmail(register.Email),
                Password = PasswordHelper.EncodePasswordMd5(register.Password),
                RegisterDate = DateTime.Now,
                //UserAvatar = "Default.jpg",
                //UserName = register.UserName,
            };
            _userService.AddUser(user);

            return Ok(new { message = "Registration is successful" });
        }


        #endregion

        #region Login

        [HttpPost]
        [Route("Login")]

        public IActionResult Login(LoginViewModel login)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user=_userService.LoginUser(login);
            if (user != null) 
            {
                //Loging in User
                var claims = new List<Claim>()    //saxt list claim baraye etelaate user dar Login kardan
                    {
                        new Claim(ClaimTypes.NameIdentifier,user.UserId.ToString()),
                        new Claim(ClaimTypes.Name,user.UserName)
                    };
                var identity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
                var principal = new ClaimsPrincipal(identity);

                var properties = new AuthenticationProperties
                {
                    IsPersistent = login.RememberMe
                };
                HttpContext.SignInAsync(principal, properties);
            }
            ModelState.AddModelError("Email", "کاربری با مشخصات وارده موجود نمی باشد.");
            return Ok(new { message = "Login successful" });
        }

        #endregion

        #region Logout

        [Route("Logout")]
        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            // Invalidate the user's session or authentication token
            await 
            HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return Ok(new { message = "Logout successful" });
        }

        #endregion

        #region ForgotPassword     //chetor bodye email ra upload konim

        [HttpPost]
        [Route("ForgotPassword")]
        public IActionResult ForgotPassword(ForgotPasswordViewModel forgot)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            string fixedEmail = FixedText.FixEmail(forgot.Email);
            DataLayer.Entities.User.User user = _userService.GetUserByEmail(fixedEmail);
            if (user == null)
            {
                ModelState.AddModelError("Email", "کاربری یافت نشد !");
                return BadRequest(ModelState);
            }
            //string bodyEmail = _viewRender.RenderToStringAsync("_ForgotPassword", user);
            //SendEmail.Send(user.Email, "بازیابی حساب کاربری", bodyEmail);
            return Ok();
        }
        #endregion

        #region ResetPassword
        [Route("ResetPassword")]
        [HttpPost]
        public IActionResult ResetPassword(ResetPasswordViewModel reset)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            DataLayer.Entities.User.User user = _userService.GetUserByUserId(reset.UserId);

            if (user == null)
                return NotFound();
            string hashNewPassword = PasswordHelper.EncodePasswordMd5(reset.Password);
            user.Password = hashNewPassword;
            _userService.UpdateUser(user);

            return Ok(new { message = "ResetPassword successful" });
        }

        #endregion
    }
}
