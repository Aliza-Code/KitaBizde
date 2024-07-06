using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KitaBizde.Core.Services.Interfaces
{
    public interface IOrderService
    {
        int AddOrder(string userName, int bookId);
        void UpdatePriceOrder(int orderId);
    }
}
