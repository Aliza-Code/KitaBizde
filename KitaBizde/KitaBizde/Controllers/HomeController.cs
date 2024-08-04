using KitaBizde.Core.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KitaBizde.web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private IUserService _userService;
        private IBookService _bookService;
        public HomeController(IUserService userService,IBookService bookService)
        {
            _bookService = bookService;
            _userService = userService;
        }

        [HttpGet]
        public IActionResult Index()
        {
            var listBooks = _bookService.GetBook();
            return Ok(listBooks);
        }

        [HttpGet]
        [Route("Romans")]
        public IActionResult GetRomans() 
        {
            var listBooks= _bookService.GetRomans();
            return Ok(listBooks);
        }
        
        [HttpGet]
        [Route("Educational")]
        public IActionResult GetEducational() 
        {
            var listBooks= _bookService.GetEducational();
            return Ok(listBooks);
        }
        
        [HttpGet]
        [Route("Favorites")]
        public IActionResult GetFavorites() 
        {
            var listBooks= _bookService.GetFavorites();
            return Ok(listBooks);
        }
        
        [HttpGet]
        [Route("Authors")]
        public IActionResult GetAuthors(int id) 
        {
            var listAuthors = _userService.GetAuthor(id);
            return Ok(listAuthors);
        }
    }
}
