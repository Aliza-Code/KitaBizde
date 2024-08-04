using KitaBizde.Core.DTOs;
using KitaBizde.Core.Services;
using KitaBizde.Core.Services.Interfaces;
using KitaBizde.DataLayer.Entities.Book;
using KitaBizde.DataLayer.Entities.User;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using KitaBizde.DataLayer.Entities.Order;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using KitaBizde.DataLayer.Context;
using static KitaBizde.Core.DTOs.OrderViewModel;

namespace KitaBizde.web.Areas.UserPanel.Controllers
{
    [Route("api/User/[controller]")]
    [ApiController]
    [Area("UserPanel")]
    
    public class HomeController : ControllerBase
    {
        private IUserService _userService;
        private IOrderService _orderService;
        private readonly KitaBizdeContext _context;
        public HomeController(IUserService userService, IOrderService orderService,KitaBizdeContext context)
        {
            _userService = userService;
            _orderService = orderService;
            _context = context;
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult Index(int id)
        {
            //var info = _userService.GetInformationUser(User.Identity.Name);
            var info = _userService.GetInformationUser(id);
            if (info == null)
                return NotFound();
            return Ok(info);
        }

        #region edit

        [Route("EditProfilre/{id}")]
        [HttpGet]
        public IActionResult GetEditProfile(int id)   //baraye inke etelaate gabli user ra dar form neshan dahad
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var data = _userService.GetDataForEditProfileUser(id);

            if (data == null)
            {
                return NotFound(new { Message = "User not found." });
            }
            return Ok(data);
        }
        [Route("EditProfile/{id}")]
        [HttpPost]
        public IActionResult EditProfile(int id , EditProfileViewModel profile)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            //TODO EditPart
            profile.UserId = profile.UserId;
            profile.AvatarName = profile.UserAvatar.ToString();
            _userService.EditProfileUser(profile);
            //Log Out User
            HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return Ok(profile);
        }
        #endregion

        #region ChangePassword
        [HttpPut]
        [Route("ChangePass/{id}")]
        public IActionResult ChangePassword(int id, ChangePasswordViewModel change)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = _userService.GetUserByUserId(id);
            if (user == null)
            {
                return NotFound("User not found.");
            }

            if (!_userService.CompareOldPassword(change.OldPassword, user.UserName))
            {
                ModelState.AddModelError("OldPassword", "کلمه عبور فعلی صحیح نمی باشد!");
                return BadRequest(ModelState);
            }

            // Change the password
            _userService.ChangeUserPassword(id, change.Password);
            return Ok(new { message = "Password changed successfully." });
        }
        #endregion

        #region Orders

        [HttpGet]
        [Route("Orders/{id}")]
        public async Task<ActionResult<IEnumerable<OrderDto>>> GetOrdersWithDetails(int id)
        {
            var orders = await _context.Orders
                .Include(o => o.OrderDetails)
                .Where(o => o.UserId == id)
                .ToListAsync();

            if (orders == null || !orders.Any())
            {
                return NotFound();
            }

            var orderDtos = orders.Select(o => new OrderDto
            {
                Id = o.OrderId,
                IsFinaly = o.IsFinaly,
                OrderSum=o.OrderSum,
                OrderDate = o.CreateDate,
                OrderDetails = o.OrderDetails.Select(od => new OrderDetailDto
                {
                    Id = od.DetailId,
                    Count = od.Count,
                    bookId=od.BookId,
                    Price = od.Price,
                }).ToList()
            }).ToList();

            return Ok(orderDtos);
        }
        #endregion
    }
}
