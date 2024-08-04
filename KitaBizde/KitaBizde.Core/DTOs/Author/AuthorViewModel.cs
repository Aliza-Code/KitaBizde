using KitaBizde.Core.DTOs.Book;
using KitaBizde.DataLayer.Entities.Book;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KitaBizde.Core.DTOs.Author
{
    public class CreateAuthorViewModel
    {
        [Display(Name = "نام نویسنده")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        public string AuthorName { get; set; }

        [Display(Name = "نام ترکی نویسنده")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        public string AuthorTurkName { get; set; }

        public string AboutAuthor { get; set; }

        public IFormFile AuthorImage { get; set; }
    }
    public class EditAuthorViewModel
    {
        public int AuthorId { get; set; }

        [Display(Name = "نام نویسنده")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        public string AuthorName { get; set; }

        [Display(Name = "نام ترکی نویسنده")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        public string AuthorTurkName { get; set; }

        public string AboutAuthor { get; set; }

        public IFormFile AuthorImage { get; set; }
    }
    public class AuthorWithBooksViewModel
    {
        public int AuthorId { get; set; }
        public string AuthorName { get; set; }
        public string AuthorTurkName { get; set; }
        public string AboutAuthor { get; set; }
        public string AuthorImage { get; set; }
        public List<ShowBookListItemViewModel> Books { get; set; } // Change this to ShowBookListItemViewModel
    }
}
