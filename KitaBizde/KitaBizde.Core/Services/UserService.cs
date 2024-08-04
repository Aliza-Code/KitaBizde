using KitaBizde.Core.Convertors;
using KitaBizde.Core.DTOs;
using KitaBizde.Core.DTOs.Author;
using KitaBizde.Core.DTOs.Book;
using KitaBizde.Core.DTOs.Users;
using KitaBizde.Core.Security;
using KitaBizde.Core.Services.Interfaces;
using KitaBizde.DataLayer.Context;
using KitaBizde.DataLayer.Entities.Book;
using KitaBizde.DataLayer.Entities.User;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

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

        public List<Author> GetAuthorForAdmin()
        {
            return _context.Authors.ToList();
        }

        public int CreateAuthorFromAdmin(CreateAuthorViewModel author)
        {
            Author createAuthor = new Author();
            createAuthor.AuthorName = author.AuthorName;
            createAuthor.AuthorTurkName = author.AuthorTurkName;
            createAuthor.AboutAuthor=author.AboutAuthor;

            if (author.AuthorImage != null)
            {
                string imagePath = "";
                createAuthor.AuthorImage = NameGenerator.GeneratorUniqCode() + Path.GetExtension(author.AuthorImage.FileName);
                imagePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/AuthorImages", createAuthor.AuthorImage);
                using (var stream = new FileStream(imagePath, FileMode.Create))
                {
                    author.AuthorImage.CopyTo(stream);
                }
            }
            _context.Add(createAuthor);
            _context.SaveChanges();
            return createAuthor.AuthorId;
        }


        public void EditAuthorFromAdmin(EditAuthorViewModel authorViewModel)
        {
            // Retrieve the existing Author entity from the database
            var existingAuthor = _context.Authors.Find(authorViewModel.AuthorId);

            if (existingAuthor == null)
            {
                throw new InvalidOperationException("Author not found.");
            }

            // Update the properties of the existing Author entity
            existingAuthor.AuthorName = authorViewModel.AuthorName;
            existingAuthor.AuthorTurkName = authorViewModel.AuthorTurkName;
            existingAuthor.AboutAuthor = authorViewModel.AboutAuthor;

            if (authorViewModel.AuthorImage != null)
            {
                // Optional: Delete old image if necessary
                if (existingAuthor.AuthorImage != "Default.jpg")
                {
                    string deletePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/AuthorImages", existingAuthor.AuthorImage);
                    if (File.Exists(deletePath))
                    {
                        File.Delete(deletePath);
                    }
                }
                existingAuthor.AuthorImage = NameGenerator.GeneratorUniqCode() + Path.GetExtension(authorViewModel.AuthorImage.FileName);
                string imagePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/AuthorImages", existingAuthor.AuthorImage);

                using (var stream = new FileStream(imagePath, FileMode.Create))
                {
                    authorViewModel.AuthorImage.CopyTo(stream);
                }
            }
            _context.Authors.Update(existingAuthor);
            _context.SaveChanges();
        }

        public void DeleteAuthorFromAdmin(int userId)
        {
            Author existingAuthor = _context.Authors.Find(userId);
            existingAuthor.IsDelete = true;
            _context.Authors.Update(existingAuthor);
            _context.SaveChanges();
        }

        public InformationUserViewModel GetInformationUser(int userId)
        {
            var user = GetUserByUserId(userId);
            if(user==null)
            {
                return null;
            }
            InformationUserViewModel information = new InformationUserViewModel();
            information.PhoneNum = user.PhoneNumber;
            information.Email = user.Email;
            information.UserName = user.UserName;
            information.RegisterDate = user.RegisterDate;
            //information.TotalBuy=user.  TODO TotalBuy
            return information;
        } 
        public InformationUserViewModel GetInformationUser(string userName)
        {
            var user = GetUserByUserName(userName);
            InformationUserViewModel information = new InformationUserViewModel();
            information.PhoneNum = user.PhoneNumber;
            information.Email = user.Email;
            information.UserName = user.UserName;
            information.RegisterDate = user.RegisterDate;
            //information.TotalBuy=user.  TODO TotalBuy
            return information;
        }

        public EditProfileViewModel GetDataForEditProfileUser(int userId)
        {
            return _context.Users.Where(u => u.UserId == userId).Select(u => new EditProfileViewModel()
            {
                UserName= u.UserName,
                PhoneNum=u.PhoneNumber,
                Email=u.Email,
                AvatarName=u.UserAvatar
            }).Single();
        }

        public EditProfileViewModel EditProfileUser(EditProfileViewModel profileUser)
        {
            User user = GetUserByUserId(profileUser.UserId);
            if (user == null)
            {
                return null;
            }
            user.UserName = profileUser.UserName;
            user.Email = profileUser.Email;
            user.PhoneNumber = profileUser.PhoneNum;
            user.UserId = profileUser.UserId;
            if (profileUser.AvatarName != null)
            {
                // Optional: Delete old image if necessary
                if (user.UserAvatar != "Default.jpg")
                {
                    string deletePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/UserAvatars", user.UserAvatar);
                    if (File.Exists(deletePath))
                    {
                        File.Delete(deletePath);
                    }
                }
                user.UserAvatar = NameGenerator.GeneratorUniqCode() + Path.GetExtension(profileUser.UserAvatar.FileName);
                string imagePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/UserAvatars", user.UserAvatar);

                using (var stream = new FileStream(imagePath, FileMode.Create))
                {
                    profileUser.UserAvatar.CopyTo(stream);
                }
            }
            _context.Users.Update(user);
            _context.SaveChanges();
            return profileUser;
        }

        public bool CompareOldPassword(string oldPassword, string username)
        {
            string hashOldPassword = PasswordHelper.EncodePasswordMd5(oldPassword); // Use a secure hashing algorithm
            return _context.Users.Any(u => u.UserName == username && u.Password == hashOldPassword);
        }

        public void ChangeUserPassword(int userId, string newPassword)
        {
            var user = GetUserByUserId(userId);
            if (user == null)
            {
                throw new Exception("User not found."); // Handle user not found
            }
            user.Password = PasswordHelper.EncodePasswordMd5(newPassword);
            UpdateUser(user);
        }

        public AuthorWithBooksViewModel GetAuthor(int authorId)
        {
            var author = _context.Authors
                .Include(a => a.Books) // Include the related books
                .FirstOrDefault(a => a.AuthorId == authorId);

            if (author == null)
            {
                return null;
            }

            var authorWithBooks = new AuthorWithBooksViewModel
            {
                AuthorId = author.AuthorId,
                AuthorName = author.AuthorName,
                AuthorTurkName = author.AuthorTurkName,
                AboutAuthor = author.AboutAuthor,
                AuthorImage = author.AuthorImage,
                Books = author.Books.Select(b => new ShowBookListItemViewModel
                {
                    BookId = b.BookId,
                    TurkTitle = b.TurkTitle,
                    ImageName1 = b.BookImageName1,
                    Price = b.BookPrice,
                    Title = b.BookTitle
                }).ToList()
            };

            return authorWithBooks;
        }
    }
}
