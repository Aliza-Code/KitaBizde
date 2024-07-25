using KitaBizde.Core.Convertors;
using KitaBizde.Core.DTOs.Users;
using KitaBizde.Core.Security;
using KitaBizde.Core.Services;
using KitaBizde.Core.Services.Interfaces;
using KitaBizde.DataLayer.Entities.Book;
using KitaBizde.DataLayer.Entities.User;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IO;

namespace KitaBizde.Areas.AdminPanel.Controllers
{
    [Route("api/Admin/[controller]")]
    [ApiController]
    [Area("AdminPanel")]
    public class UserController : ControllerBase
    {
        private IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        
        public UserForAdminViewModel UserForAdminViewModel { get; set; }
        [HttpGet]
        public IActionResult OnGet(int pageId = 1, string filterUserName = "", string filterEmail = "")
        {
            UserForAdminViewModel=_userService.GetUsers(pageId, filterUserName, filterEmail);
            return Ok(UserForAdminViewModel);
        }

        #region CreateUserFromAdmin
        [HttpPost]
        [Route("Create")]
        public IActionResult CreateUser(CreateUserViewModel user)
        {
            User addUser = new User();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            addUser.PhoneNumber = user.PhoneNum;
            addUser.UserName = user.UserName;
            addUser.Email = user.Email;
            addUser.Password = PasswordHelper.EncodePasswordMd5(user.Password);
            addUser.RegisterDate = DateTime.Now;
            if (user.UserAvatar != null)
            {
                string imagePath = "";
                addUser.UserAvatar = NameGenerator.GeneratorUniqCode() + Path.GetExtension(user.UserAvatar.FileName);
                imagePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/UserAvatars", addUser.UserAvatar);
                using (var stream = new FileStream(imagePath, FileMode.Create))
                {
                    user.UserAvatar.CopyTo(stream);
                }
            }
            _userService.AddUser(addUser);
            return Ok(addUser);
        }
        #endregion

        #region EditUserFromAdmin
        [HttpGet]
        [Route("Edit/{id}")]
        public IActionResult EditUserForm(int id)
        {
            var user = _userService.GetUserByUserId(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user); // Assuming you have a corresponding view to edit the user
        }
        [HttpPut]
        [Route("Edit/{id}")]
        public IActionResult EditUser(int id, EditUserViewModel editUser)
        {
            User user = _userService.GetUserByUserId(id);
            if (editUser == null)
            {
                return NotFound();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            user.PhoneNumber = editUser.PhoneNum;
            user.Email = editUser.Email;
            user.UserName = editUser.UserName;
            user.Password = PasswordHelper.EncodePasswordMd5(editUser.Password);

            var exUser = _userService.GetUserForShowInEditMode(id);
            //editUser.AvatarName= exUser.AvatarName;
            if (!string.IsNullOrEmpty(editUser.Password))
            {
                user.Password = PasswordHelper.EncodePasswordMd5(editUser.Password);
            }
            if (editUser.UserAvatar != null)
            {
                //delete old image
                //if (editUser.AvatarName != "Default.jpg")
                //{
                //    string deletePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/UserAvatar", editUser.AvatarName);
                //    if (System.IO.File.Exists(deletePath))
                //    {
                //        System.IO.File.Delete(deletePath);
                //    }
                //}

                #region Uploading new AvatarImage
                user.UserAvatar = NameGenerator.GeneratorUniqCode() + Path.GetExtension(editUser.UserAvatar.FileName);
                string imagePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/UserAvatars", user.UserAvatar);
                using (var stream = new FileStream(imagePath, FileMode.Create))
                {
                    editUser.UserAvatar.CopyTo(stream);
                }
                #endregion
            }
            _userService.UpdateUser(user);
            return Ok(editUser);
        }
        #endregion

        #region DeleteUserFromAdmin
        [HttpPost]
        [Route("Delete/{id}")]
        public IActionResult DeleteUser(int id)
        {
            _userService.DeleteUser(id);
            return Ok(new { message = "Delete is successful" });
        }
        #endregion
    }
}
