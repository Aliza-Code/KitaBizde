using CodeLearn.Core.DTOs.Book;
using KitaBizde.Core.DTOs.Book;
using KitaBizde.Core.Services.Interfaces;
using KitaBizde.DataLayer.Context;
using KitaBizde.DataLayer.Entities.Book;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace KitaBizde.web.Areas.AdminPanel.Controllers
{
    [Route("api/Admin/[controller]")]
    [ApiController]
    //[Authorize]
    [Area("AdminPanel")]
    
    public class BookController : ControllerBase
    {
        private IBookService _bookService;
        private KitaBizdeContext _context;
        public BookController(IBookService bookService , KitaBizdeContext context)
        {
            _bookService = bookService;
            _context = context;
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
        public IActionResult CreateBook( Books book)
        {
            ModelState.Clear();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var Book = new Books
            {
                GroupId = book.GroupId,
                SubGroup=book.SubGroup,
                StockAmount=book.StockAmount,
                LevelId=book.LevelId,
                BookDescription=book.BookDescription,
                FromBook=book.FromBook,
                BookImageName1=book.BookImageName1,
                BookPrice=book.BookPrice,
                Discount=book.Discount,
                IsDelete=book.IsDelete,
                PageNumber=book.PageNumber,
                Package=book.Package,
                Publisher=book.Publisher,
                Stars=book.Stars,
                Isbn=book.Isbn,
                Material=book.Material,
                Cover=book.Cover,
                BookTitle = book.BookTitle,
                TurkTitle=book.TurkTitle, 
                AuthorId = book.AuthorId,
                SoldCount=book.SoldCount,
                Weight=book.Weight,
                Tags=book.Tags,
                PublishDate=DateTime.Now,
            };
            //_bookService.AddBook(Book);
            _context.Add(Book);
            _context.SaveChanges();
            return Ok(Book);
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
