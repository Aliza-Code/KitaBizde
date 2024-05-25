using KitaBizde.Core.Convertors;
using KitaBizde.Core.DTOs;
using KitaBizde.Core.Security;
using KitaBizde.Core.Services.Interfaces;
using KitaBizde.DataLayer.Context;
using KitaBizde.DataLayer.Entities.User;
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

        public int AddUser(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return user.UserId;
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

        public bool IsExistUserEmail(string email)
        {
            return _context.Users.Any(u => u.Email == email);
        }

        public bool IsExistUserName(string userName)
        {
            return _context.Users.Any(u => u.UserName == userName);
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
    }
}
