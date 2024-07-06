using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KitaBizde.Core.DTOs.Book
{
    public class BookViewModel
    {
        public int BookId { get; set; }
        public int GroupId { get; set; }
        public int SubGroup { get; set; }
        public int AuthorId { get; set; }
        public int StockAmount { get; set; }
        public int LevelId { get; set; }
        public string BookTitle { get; set; }
        public string TurkTitle { get; set; }
        public string FromBook { get; set; }

        public string BookDescription { get; set; }


        public int BookPrice { get; set; }

        public int? Discount { get; set; }

        [MaxLength(600)]
        public string Tags { get; set; }

        [MaxLength(50)]
        public string BookImageName1 { get; set; }  //check array
        public DateTime PublishDate { get; set; }



        public int PageNumber { get; set; }

        public string Cover { get; set; }


        public string Material { get; set; }

        public int Weight { get; set; }

        public int Isbn { get; set; }

        public string? Package { get; set; }
        public string Publisher { get; set; }
        public int Stars { get; set; }
        public int SoldCount { get; set; }

        public bool IsDelete { get; set; }
    }
}
