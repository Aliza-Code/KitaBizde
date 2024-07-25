using KitaBizde.Core.DTOs.Book;
using KitaBizde.Core.Services.Interfaces;
using KitaBizde.DataLayer.Context;
using KitaBizde.DataLayer.Entities.Book;
using KitaBizde.DataLayer.Entities.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;

namespace KitaBizde.web.Areas.AdminPanel.Controllers
{
    [Route("api/Admin/[controller]")]
    [ApiController]
    //[Authorize]
    [Area("AdminPanel")]
    
    public class BooksController : ControllerBase
    {
        private IBookService _bookService;
        private KitaBizdeContext _context;
        public BooksController(IBookService bookService , KitaBizdeContext context)
        {
            _bookService = bookService;
            _context = context;
        }

        public List<ShowBookForAdminViewModel> ListBook { get; set; }
        [HttpGet]
        public ActionResult GetBooksForAdmin(int pageId = 1, string BookName = "", string AuthorName = "")
        {
            ListBook = _bookService.GetBookForAdmin(pageId, BookName, AuthorName);
            return Ok(ListBook);
        }


        #region CreateBook  //moshkele gereftane etelaat az form
        [HttpPost]
        [Route("Create")]
        public IActionResult CreateBook(CreateBookViewModel book)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            //book.PublishDate = DateTime.Now;
            _bookService.AddBookFromAdmin(book);
            return Ok(book);
        }
        #endregion

        #region EditBook
        [HttpPut]
        [Route("Edit/{id}")]
        public IActionResult EditBook(int id,EditBookViewModel book)
        {
            if (book == null)
            {
                return NotFound();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                _bookService.UpdateBookFromAdmin(book);
                return Ok(); // Return success response
            }
            catch (Exception ex)
            {
                // Log the exception
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }
        #endregion

        #region DeleteBook
        [HttpPost]
        [Route("Delete/{id}")]
        public IActionResult DeleteBook(int id)
        {
            _bookService.DeleteBook(id);
            return Ok(new { message = "Delete is successful" });
        }
        #endregion
    }
}
