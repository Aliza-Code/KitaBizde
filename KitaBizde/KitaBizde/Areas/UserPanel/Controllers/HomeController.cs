//using KitaBizde.Core.DTOs;
//using KitaBizde.Core.Services.Interfaces;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;

//namespace KitaBizde.web.Areas.UserPanel.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    [Area("UserPanel")]
//    public class HomeController : ControllerBase
//    {
//        private IUserService _userService;
//        public HomeController(IUserService userService)
//        {
//            _userService = userService;
//        }

//        [Route("UserPanel/EditProfile")]
//        [HttpPost]
//        public IActionResult EditProfile(EditProfileViewModel profile)
//        {
//            if (!ModelState.IsValid)
//                return BadRequest(ModelState);

//        }
//    }
//}
