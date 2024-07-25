using KitaBizde.Core.Convertors;
using KitaBizde.Core.DTOs.Book;
using KitaBizde.Core.Security;
using KitaBizde.Core.Services.Interfaces;
using KitaBizde.DataLayer;
using KitaBizde.DataLayer.Context;
using KitaBizde.DataLayer.Entities.Book;
using KitaBizde.DataLayer.Entities.User;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
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

        public int AddBookFromAdmin(CreateBookViewModel book)
        {
            Books createBook = new Books(); 
            createBook.BookTitle=book.BookTitle;
            createBook.TurkTitle=book.TurkTitle;
            createBook.AuthorId=book.AuthorId;
            createBook.Cover=book.Cover;
            createBook.Material=book.Material;
            createBook.Package=book.Package;
            createBook.FromBook=book.FromBook;
            createBook.BookDescription=book.BookDescription;
            createBook.GroupId = book.GroupId;
            createBook.LevelId=book.LevelId;
            createBook.PageNumber=book.PageNumber;
            createBook.BookPrice=book.BookPrice;
            createBook.Discount=book.Discount;
            createBook.Isbn=book.Isbn;
            createBook.PublishDate = DateTime.Now;
            createBook.SoldCount=book.SoldCount;
            createBook.Publisher=book.Publisher;
            createBook.Weight=book.Weight;
            createBook.StockAmount=book.StockAmount;
            createBook.Stars=book.Stars;
            createBook.PageNumber= book.PageNumber;
            createBook.Tags=book.Tags;

            if (book.BookImage != null)
            {
                string imagePath = "";
                createBook.BookImageName1 = NameGenerator.GeneratorUniqCode() + Path.GetExtension(book.BookImage.FileName);
                imagePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/bookImages", createBook.BookImageName1);
                using (var stream = new FileStream(imagePath, FileMode.Create))
                {
                    book.BookImage.CopyTo(stream);
                }
            }
            _context.Add(createBook);
            _context.SaveChanges();
            return createBook.BookId;
        }

        public List<BookGroup> SelectGroup(int groupId)
        {
            return _context.BookGroups.Where(b=>b.GroupId==groupId).ToList();
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
                ImageName1=b.BookImageName1.ToString(),
                ImageName2=b.BookImageName1.ToString(),
                Price=b.BookPrice,
                Title=b.BookTitle,
                TurkTitle=b.TurkTitle
            }).ToList();

            var PaginatedBooks=books.Skip(skip).Take(take).ToList();
            return PaginatedBooks;
        }

        public Books GetBookById(int bookId)
        {
            return _context.Books.FirstOrDefault(b => b.BookId == bookId);
        }

        public List<ShowBookForAdminViewModel> GetBookForAdmin(int pageId = 1, string filterTitle = "", string filterAuthor = "")
        {
            var query = _context.Books.Select(b => new ShowBookForAdminViewModel()
            {
                BookID = b.BookId,
                Title = b.BookTitle,
                TurkTitle = b.TurkTitle,
                ImageName = b.BookImageName1.ToString(),
                AuthorName = b.Author.AuthorName,
                Publisher = b.Publisher
            });

            if (!string.IsNullOrEmpty(filterTitle))
            {
                query = query.Where(b => b.Title.Contains(filterTitle));
            }
            if (!string.IsNullOrEmpty(filterAuthor))
            {
                query = query.Where(b => b.AuthorName.Contains(filterAuthor));
            }

            return query.ToList();
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

        public void UpdateBookFromAdmin(EditBookViewModel editBook)
        {
            Books book = GetBookById(editBook.BookId);

            book.BookTitle = editBook.BookTitle;
            book.GroupId = editBook.GroupId;
            book.StockAmount = editBook.StockAmount;
            book.LevelId = editBook.LevelId;
            book.BookDescription = editBook.BookDescription;
            book.FromBook = editBook.FromBook;
            book.BookPrice = editBook.BookPrice;
            book.Discount = editBook.Discount;
            book.IsDelete = editBook.IsDelete;
            book.PageNumber = editBook.PageNumber;
            book.Package = editBook.Package;
            book.Publisher = editBook.Publisher;
            book.Stars = editBook.Stars;
            book.Isbn = editBook.Isbn;
            book.Material = editBook.Material;
            book.Cover = editBook.Cover;
            book.BookTitle = editBook.BookTitle;
            book.TurkTitle = editBook.TurkTitle;
            book.AuthorId = editBook.AuthorId;
            book.SoldCount = editBook.SoldCount;
            book.Weight = editBook.Weight;
            book.Tags = editBook.Tags;

            if (editBook.BookImage != null)
            {
                //delete old image
                //if (editBook.AvatarName != "Default.jpg")
                //{
                //    string deletePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/UserAvatar", editUser.AvatarName);
                //    if (File.Exists(deletePath))
                //    {
                //        File.Delete(deletePath);
                //    }
                //}

                #region Uploading new AvatarImage
                book.BookImageName1 = NameGenerator.GeneratorUniqCode() + Path.GetExtension(editBook.BookImage.FileName);
                string imagePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/bookImages", book.BookImageName1);
                using (var stream = new FileStream(imagePath, FileMode.Create))
                {
                    editBook.BookImage.CopyTo(stream);
                }
                #endregion
            }
            _context.Books.Update(book);
            _context.SaveChanges();
        }

        public List<BookGroup> GetAllGroups()
        {
            var bookGroups = _context.BookGroups.ToList();
            //var authorGroups = _context.Users.Author.ToList();
            return bookGroups;
        }

        public void DeleteBook(int bookId)
        {
            Books book = GetBookById(bookId);
            book.IsDelete = true;
            _context.Books.Update(book);
            _context.SaveChanges();
        }

    }
}
