using KitaBizde.Core.DTOs.Book;
using KitaBizde.Core.Services.Interfaces;
using KitaBizde.DataLayer.Context;
using KitaBizde.DataLayer.Entities.Book;
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
        public ActionResult GetBooksForAdmin()
        {
            ListBook=_bookService.GetBookForAdmin();
            return Ok(ListBook);
        }


        #region CreateBook  //moshkele gereftane etelaat az form
        [HttpPost]
        [Route("Create")]
        public IActionResult CreateBook(Books book)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var Book= book;
            book.PublishDate = DateTime.Now;
            _bookService.AddBook(Book);
            return Ok(Book);
        }
        #endregion

        #region EditBook
        //public Books editBook { get; set; }
        [HttpPut]
        [Route("Edit/{id}")]
        public IActionResult EditBook(int id,Books book)
        {
            var editBook = _bookService.GetBookById(id);
            if (editBook == null)
            {
                return NotFound();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            editBook.BookTitle = book.BookTitle;
            editBook.GroupId = book.GroupId;
                editBook.StockAmount = book.StockAmount;
                editBook.LevelId = book.LevelId;
                editBook.BookDescription = book.BookDescription;
                editBook.FromBook = book.FromBook;
                editBook.BookImageName1 = book.BookImageName1;
                editBook.BookPrice = book.BookPrice;
                editBook.Discount = book.Discount;
                editBook.IsDelete = book.IsDelete;
                editBook.PageNumber = book.PageNumber;
                editBook.Package = book.Package;
                editBook.Publisher = book.Publisher;
                editBook.Stars = book.Stars;
                editBook.Isbn = book.Isbn;
                editBook.Material = book.Material;
                editBook.Cover = book.Cover;
                editBook.BookTitle = book.BookTitle;
                editBook.TurkTitle = book.TurkTitle; 
                editBook.AuthorId = book.AuthorId;
                editBook.SoldCount = book.SoldCount;
                editBook.Weight = book.Weight;
                editBook.Tags = book.Tags;

            _bookService.UpdateBook(editBook);
            return Ok(editBook);
        }
        #endregion
    }
}
