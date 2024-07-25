using KitaBizde.Core.Convertors;
using KitaBizde.Core.DTOs;
using KitaBizde.Core.DTOs.Users;
using KitaBizde.Core.Security;
using KitaBizde.Core.Services.Interfaces;
using KitaBizde.DataLayer.Context;
using KitaBizde.DataLayer.Entities.Book;
using KitaBizde.DataLayer.Entities.User;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KitaBizde.Core.Services
{
    public class UserService : IUserService
    {
        private KitaBizdeContext _context;
        public UserService(KitaBizdeContext context)
        {
            _context = context;
        }

        public int AddUser([FromForm] User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return user.UserId;
        }

        public void DeleteUser(int userId)
        {
            User user = GetUserByUserId(userId);
            user.IsDelete = true;
            UpdateUser(user);
        }

        public User GetUserByEmail(string email)
        {
            return _context.Users.SingleOrDefault(u => u.Email == email);
        }

        public User GetUserByUserId(int userId)
        {
            return _context.Users.Find(userId);
        }

        public User GetUserByUserName(string userName)
        {
            return _context.Users.SingleOrDefault(u => u.UserName == userName);
        }

        public int GetUserIdByUserName(string userName)
        {
            return _context.Users.Single(u => u.UserName == userName).UserId;
        }

        public UserForAdminViewModel GetUsers(int pageId = 1, string filterEmail = "", string filterUserName = "")
        {
            IQueryable<User> result = _context.Users;

            if (!string.IsNullOrEmpty(filterEmail))
            {
                result = result.Where(u => u.Email.Contains(filterEmail));
            }
            if (!string.IsNullOrEmpty(filterUserName))
            {
                result = result.Where(u => u.UserName.Contains(filterUserName));
            }

            //show Item in Page
            int take = 10;
            int skip = (pageId - 1) * take;

            UserForAdminViewModel list = new UserForAdminViewModel();
            list.CorrentPage = pageId;
            list.PageCounte = result.Count() / take;
            list.Users = result.OrderBy(u => u.RegisterDate).Skip(skip).Take(take).ToList();

            return list;
        }

        public bool IsExistUserEmail(string email)
        {
            return _context.Users.Any(u => u.Email == email);
        }

        public bool IsExistUserName(string phoneNum)
        {
            return _context.Users.Any(u => u.PhoneNumber == phoneNum);
        }

        public User LoginUser(LoginViewModel login)
        {
            string hashPassword = PasswordHelper.EncodePasswordMd5(login.Password);  //hash kardane password
            string email = FixedText.FixEmail(login.Email);                          //fixed kardane formate email
            return _context.Users.SingleOrDefault(u => u.Email == email && u.Password == hashPassword);  //check kardane vujud kaarbar ya xeyr
        }

        public void UpdateUser(User user)
        {
            _context.Users.Update(user);
            _context.SaveChanges();
        }

        public EditUserViewModel GetUserForShowInEditMode(int userId)
        {
            return _context.Users.Where(u => u.UserId == userId)
                .Select(u => new EditUserViewModel()
                {
                    PhoneNum=u.PhoneNumber,
                    UserId = u.UserId,
                    //AvatarName = u.UserAvatar,
                    Email = u.Email,
                    UserName = u.UserName,
                }).Single();
        }

    }
}
