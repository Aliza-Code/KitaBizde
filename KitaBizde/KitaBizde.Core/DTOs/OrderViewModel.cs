using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KitaBizde.Core.DTOs
{
    public class OrderViewModel
    {
        public class OrderDto
        {
            public int Id { get; set; }
            public int OrderSum { get; set; }
            public DateTime OrderDate { get; set; }
            public bool IsFinaly { get; set; }
            public List<OrderDetailDto> OrderDetails { get; set; }
        }

        public class OrderDetailDto
        {
            public int Id { get; set; }
            public int bookId { get; set; }
            public decimal Price { get; set; }
            public int Count { get; set; }
            // No reference back to Order
        }
    }
}
