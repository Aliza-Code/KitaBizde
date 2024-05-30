using KitaBizde.Core.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace KitaBizde.web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private IBookService _bookService;
        public BookController(IBookService bookService)
        {
            _bookService = bookService;
        }

        [Route("Search")]
        [HttpGet]
        public IActionResult Search(int pageId = 1, string filter = "", string getType = "all",
            string orderByType = "date", int startPrice = 0, int endPrice = 0, List<int> selectedGroups = null)
        {
            var searchedBook= _bookService.GetBook(pageId, filter, getType, orderByType, selectedGroups, 9);
            return Ok(searchedBook);
        }

        [Route("SelectGroup")]
        [HttpGet]
        public IActionResult SelectGroup()    //entexabe guruhe marbute
        {
            var Groups = _bookService.GetAllGroup().ToList();
            return Ok(Groups);
        }



        [Route("ShowBook/{id}")]
        [HttpGet]
        public IActionResult ShowBook(int id) 
        {
            var book = _bookService.GetBookForShow(id);
            if(book == null)
            {
                return NotFound();
            }
            return Ok(book);
        }
    }
}
