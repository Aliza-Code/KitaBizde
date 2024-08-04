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
        List<ShowBookForAdminViewModel> GetBookForAdmin(int pageId = 1, string filterTitle = "", string filterAuthor = "");
        int AddBookFromAdmin([FromForm] CreateBookViewModel book);
        Books GetBookById(int BookId);
        void UpdateBookFromAdmin(EditBookViewModel editBook);

        List<ShowBookListItemViewModel> GetBook(int pageId = 1, string filter = "", string getType = "all",
            string orderByType = "date", List<int> selectedGroups = null, int take = 0);

        Books GetBookForShow(int bookId);
        void DeleteBook(int userId);

        List<ShowBookListItemViewModel> GetRomans(int pageId = 1, int take = 0);
        List<ShowBookListItemViewModel> GetEducational(int pageId = 1, int take = 0);
        List<ShowBookListItemViewModel> GetFavorites(int pageId = 1, int take = 0);
        #endregion
    }
}
