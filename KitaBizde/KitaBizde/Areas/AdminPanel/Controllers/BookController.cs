using CodeLearn.Core.DTOs.Book;
using KitaBizde.Core.DTOs.Book;
using KitaBizde.Core.Services.Interfaces;
using KitaBizde.DataLayer.Entities.Book;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KitaBizde.web.Areas.AdminPanel.Controllers
{
    [Route("api/Admin/[controller]")]
    [ApiController]
    [Authorize]
    
    public class BookController : ControllerBase
    {
        private IBookService _bookService;
        public BookController(IBookService bookService)
        {
            _bookService = bookService;
        }

        public List<ShowBookForAdminViewModel> ListBook { get; set; }
        [HttpGet]
        //[Area("AdminsPanel")]
        public ActionResult GetBooksForAdmin()
        {
            ListBook=_bookService.GetBookForAdmin();
            return Ok(ListBook);
        }


        #region CreateBook  //moshkele gereftane etelaat az form

        //public Books book { get; set; }
        [HttpPost]
        [Route("CreateBook")]
        //[BindProperty]
        public IActionResult CreateBook(/*Books book,IFormFile imgBookUp1,IFormFile imgBookUp2*/ /*[FromForm]*/ BookViewModel book)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            _bookService.AddBook(book);
            return Ok(book);
        }

        #endregion

        #region EditBook

        public Books editBook { get; set; }
        [HttpPost]
        [Route("EditBook/{id}")]
        public IActionResult EditBook(int id, Books book, IFormFile imgBookUp1, IFormFile imgBookUp2)
        {
            editBook = _bookService.GetBookById(id);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            book = editBook;
            _bookService.UpdateBook(editBook, imgBookUp1, imgBookUp2);
            return Ok(editBook);
        }
        #endregion
    }
}
