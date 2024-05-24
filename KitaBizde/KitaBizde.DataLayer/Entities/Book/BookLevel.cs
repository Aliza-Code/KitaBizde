using KitaBizde.DataLayer.Entities.Book;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KitaBizde.DataLayer.Entities.Book
{
    public class BookLevel
    {
        [Key]
        public int LevelId { get; set; }

        [MaxLength(150)]
        [Required]
        public string LevelTitle { get; set; }




        public List<Books> Books { get; set; }
    }
}
