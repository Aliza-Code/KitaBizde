using KitaBizde.Core.DTOs;
using KitaBizde.DataLayer.Entities.User;
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
        int AddUser(User user);

        User LoginUser(LoginViewModel login);

        User GetUserByEmail(string email);     
        User GetUserByUserId(int userId);
        User GetUserByUserName(string userName);
        int GetUserIdByUserName(string userName);
        void UpdateUser(User user);
    }
}
