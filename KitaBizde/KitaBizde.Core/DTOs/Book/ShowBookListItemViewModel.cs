using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KitaBizde.Core.DTOs.Book
{
    public class ShowBookListItemViewModel
    {
        public int BookId { get; set; }
        public string Title { get; set; }
        public string TurkTitle { get; set; }
        public string ImageName1 { get; set; }
        public string ImageName2 { get; set; }
        public int Price { get; set; }
        //public TimeSpan TotalTime { get; set; }
    }
}
