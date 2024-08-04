using KitaBizde.Core.DTOs.Author;
using KitaBizde.Core.Services;
using KitaBizde.Core.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KitaBizde.Areas.AdminPanel.Controllers
{
    [Route("api/Admin/[controller]")]
    [ApiController]
    [Area("AdminPanel")]
    public class AuthorController : ControllerBase
    {
        private IUserService _userService;
        public AuthorController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public IActionResult GetAuthorsForAdmin()
        {
            var ListAuthors = _userService.GetAuthorForAdmin();
            return Ok(ListAuthors);
        }

        #region createAuthorFromAdmin
        [HttpPost]
        [Route("create")]
        public IActionResult CreateAuthor(CreateAuthorViewModel author)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            _userService.CreateAuthorFromAdmin(author);
            return Ok(author);
        }
        #endregion

        #region EditAuthorFromAdmin
        [HttpPut]
        [Route("edit/{id}")]
        public IActionResult EditAuthor(int id , EditAuthorViewModel author) 
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            if (author == null)
                return NotFound();
            author.AuthorId= id;
            _userService.EditAuthorFromAdmin(author);
            return Ok(author);
        }
        #endregion

        #region DeleteAuthor
        [HttpPost]
        [Route("Delete/{id}")]
        public IActionResult DeleteAuthor(int id)
        {
            _userService.DeleteAuthorFromAdmin(id);
            return Ok(new { message = "Delete is successful" });
        }
        #endregion
    }
}
