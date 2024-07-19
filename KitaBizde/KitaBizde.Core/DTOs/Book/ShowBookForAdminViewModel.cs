using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KitaBizde.Core.DTOs.Book
{
    public class ShowBookForAdminViewModel
    {
        public int BookID { get; set; }
        public string Title { get; set; }
        public string TurkTitle { get; set; }
        public string AuthorName { get; set; }
        public string Publisher { get; set; }
        public string ImageName { get; set; }
        
    }
}
