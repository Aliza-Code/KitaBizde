using CodeLearn.Core.DTOs.Book;
using KitaBizde.Core.DTOs.Book;
using KitaBizde.DataLayer;
using KitaBizde.DataLayer.Entities.Book;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KitaBizde.Core.Services.Interfaces
{
    public interface IBookService
    {
        #region Group
        List<BookGroup> GetAllGroups();
        List<BookGroup> SelectGroup(int groupId);  //baraye bedast avordan guruh haye moxtalef k dar nav bar neshandade mishavand
        List<SelectListItem> GetGroupForManageBook();
        List<SelectListItem> GetSubGroupForManageBook(int groupId);
        //List<SelectListItem> GetAutor();
        List<SelectListItem> GetLevels();
        List<SelectListItem> GetStatues();

        #endregion

        #region Book
        List<ShowBookForAdminViewModel> GetBookForAdmin();
        int AddBook(/*[FromForm]*/ BookViewModel Book /*, IFormFile imgBook, IFormFile imgBook2*/);
        Books GetBookById(int BookId);
        void UpdateBook(Books Book, IFormFile imgBook, IFormFile imgBook2);

        List<ShowBookListItemViewModel> GetBook(int pageId = 1, string filter = "", string getType = "all",
            string orderByType = "date", List<int> selectedGroups = null, int take = 0);

        Books GetBookForShow(int bookId);
        #endregion
    }
}
