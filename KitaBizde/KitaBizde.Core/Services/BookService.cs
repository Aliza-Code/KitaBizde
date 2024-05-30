using CodeLearn.Core.DTOs.Book;
using KitaBizde.Core.Services.Interfaces;
using KitaBizde.DataLayer;
using KitaBizde.DataLayer.Context;
using KitaBizde.DataLayer.Entities.Book;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KitaBizde.Core.Services
{
    public class BookService : IBookService
    {
        private KitaBizdeContext _context;
        public BookService(KitaBizdeContext context)
        {
            _context = context;
        }

        public int AddBook(Books Book, IFormFile imgBook, IFormFile imgBook2)
        {
            throw new NotImplementedException();
        }

        public List<BookGroup> GetAllGroup()
        {
            return _context.BookGroups.ToList();
        }

        public List<ShowBookListItemViewModel> GetBook(int pageId = 1, string filter = "", string getType = "all",
            string orderByType = "date", List<int> selectedGroups = null, int take = 0)
        {
            if(take==0)
                take = 8;
            IQueryable<Books> result = _context.Books;
            if (!string.IsNullOrEmpty(filter))
            {
                result = result.Where(b => b.BookTitle.Contains(filter) || b.Tags.Contains(filter) || b.TurkTitle.Contains(filter)
                ||b.Author.AuthorName.Contains(filter)||b.Author.AuthorTurkName.Contains(filter));
            }
            int skip = (pageId - 1) * take;
            var books=result.Select(b=>new ShowBookListItemViewModel()
            {
                BookId = b.BookId,
                ImageName1=b.BookImageName1,
                ImageName2=b.BookImageName1,
                Price=b.BookPrice,
                Title=b.BookTitle,
                TurkTitle=b.TurkTitle
            }).ToList();

            var PaginatedBooks=books.Skip(skip).Take(take).ToList();
            return PaginatedBooks;
        }

        public Books GetBookById(int BookId)
        {
            throw new NotImplementedException();
        }

        public List<ShowBookForAdminViewModel> GetBookForAdmin()
        {
            throw new NotImplementedException();
        }

        public Books GetBookForShow(int bookId)
        {
            return _context.Books.FirstOrDefault(b => b.BookId == bookId);
            //    .Include(b => b.BookLevel)
            //    .Include(b => b.Author)
            //    .Include(b => b.Isbn)
            //    .Include(b => b.Author)
            //    .Include(b => b.FromBook)
            //    .Include(b => b.BookDescription)
            //    .Include(b => b.BookGroup)
            //    .Include(b => b.BookPrice)
            //    .Include(b => b.BookTitle)
            //.FirstOrDefault(b => b.BookId == bookId);
        }

        public List<SelectListItem> GetGroupForManageBook()
        {
            return  _context.BookGroups.Where(g=>g.ParentId==null)
                .Select(g=>new SelectListItem()
                {
                    Text=g.GroupTitle,
                    Value=g.GroupId.ToString(),
                })
                .ToList();
        }

        public List<SelectListItem> GetLevels()
        {
            throw new NotImplementedException();
        }

        public List<SelectListItem> GetStatues()
        {
            throw new NotImplementedException();
        }

        public List<SelectListItem> GetSubGroupForManageBook(int groupId)
        {
            throw new NotImplementedException();
        }

        public void UpdateBook(Books Book, IFormFile imgBook, IFormFile imgBook2)
        {
            throw new NotImplementedException();
        }
    }
}
