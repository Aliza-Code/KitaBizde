using KitaBizde.DataLayer.Entities.Book;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KitaBizde.DataLayer.Entities.User
{
    public class Author
    {
        [Key]
        public int AuthorId { get; set; }

        [Display(Name = "نام نویسنده")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        public string AuthorName { get; set; }

        [Display(Name = "نام ترکی نویسنده")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        public string AuthorTurkName { get; set; }

        public string AboutAuthor { get; set; }

        public string AuthorImage { get; set; }

        public bool IsDelete { get; set; }



        public virtual List<Book.Books> Books { get; set; }
    }
}
