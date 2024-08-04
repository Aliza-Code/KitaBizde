using KitaBizde.Core.DTOs;
using KitaBizde.Core.DTOs.Author;
using KitaBizde.Core.DTOs.Users;
using KitaBizde.DataLayer.Entities.User;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KitaBizde.Core.Services.Interfaces
{
    public interface IUserService
    {
        bool IsExistUserName(string userName);   //baraye check kardane vujud ya adame vujude etelaat sabt shode dar database 
        bool IsExistUserEmail(string email);
        int AddUser([FromForm] User user);

        User LoginUser(LoginViewModel login);

        User GetUserByEmail(string email);     
        User GetUserByUserId(int userId);
        User GetUserByUserName(string userName);
        int GetUserIdByUserName(string userName);
        void UpdateUser(User user);

        UserForAdminViewModel GetUsers(int pageId = 1, string filterEmail = "", string filterUserName = "");
        void DeleteUser(int userId);
        public EditUserViewModel GetUserForShowInEditMode(int userId);


        #region AdminPanel
        //Author GetAuthorByAuthirId(int authirId);
        List<Author> GetAuthorForAdmin();
        int CreateAuthorFromAdmin(CreateAuthorViewModel author);
        void EditAuthorFromAdmin(EditAuthorViewModel author);
        void DeleteAuthorFromAdmin(int userId);
        #endregion


        #region UserPanel

        InformationUserViewModel GetInformationUser(int userId);
        InformationUserViewModel GetInformationUser(string userName);
        EditProfileViewModel GetDataForEditProfileUser(int userId);
        EditProfileViewModel EditProfileUser(EditProfileViewModel profileUser);
        bool CompareOldPassword(string oldPassword, string username);
        void ChangeUserPassword(int userId, string newPassword);
        #endregion

        AuthorWithBooksViewModel GetAuthor(int authorId);
    }
}
