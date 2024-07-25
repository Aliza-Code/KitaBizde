using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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

        public int CorrentPage { get; set; }
        public int PageCounte { get; set; }
    }

    public class CreateBookViewModel
    {
        [Required]
        public int GroupId { get; set; }

        [Required]
        public int AuthorId { get; set; }

        [Required]
        public int StockAmount { get; set; }

        [Required]
        public int LevelId { get; set; }

        [Display(Name = "عنوان کتاب")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(450, ErrorMessage = "{0} نمی تواند بیشتر از {1} کاراکتر باشد .")]
        public string BookTitle { get; set; }

        [Display(Name = "عنوان ترکی کتاب")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(450, ErrorMessage = "{0} نمی تواند بیشتر از {1} کاراکتر باشد .")]
        public string TurkTitle { get; set; }

        [Display(Name = "تکه کتاب")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        public string FromBook { get; set; }

        [Display(Name = "شرح کتاب")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        public string BookDescription { get; set; }

        [Display(Name = "قیمت کتاب")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        public int BookPrice { get; set; }

        public int? Discount { get; set; }

        [MaxLength(600)]
        public string Tags { get; set; }

        public IFormFile BookImage { get; set; }

        [Required]
        public DateTime PublishDate { get; set; }


        [Required]
        [Display(Name = "تعداد صفحات")]
        public int PageNumber { get; set; }

        [Required]
        [Display(Name = "جلد")]
        public string Cover { get; set; }

        [Required]
        [Display(Name = "جنس")]
        public string Material { get; set; }

        [Required]
        [Display(Name = "وزن")]
        public int Weight { get; set; }

        [Required]
        public Int64 Isbn { get; set; }

        public string? Package { get; set; }
        public string Publisher { get; set; }
        public float Stars { get; set; }
        public int SoldCount { get; set; }

        public bool IsDelete { get; set; }

    }


    public class EditBookViewModel
    {
        public int BookId { get; set; }

        [Required]
        public int GroupId { get; set; }

        [Required]
        public int AuthorId { get; set; }

        [Required]
        public int StockAmount { get; set; }

        [Required]
        public int LevelId { get; set; }

        [Display(Name = "عنوان کتاب")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(450, ErrorMessage = "{0} نمی تواند بیشتر از {1} کاراکتر باشد .")]
        public string BookTitle { get; set; }

        [Display(Name = "عنوان ترکی کتاب")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(450, ErrorMessage = "{0} نمی تواند بیشتر از {1} کاراکتر باشد .")]
        public string TurkTitle { get; set; }

        [Display(Name = "تکه کتاب")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        public string FromBook { get; set; }

        [Display(Name = "شرح کتاب")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        public string BookDescription { get; set; }

        [Display(Name = "قیمت کتاب")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        public int BookPrice { get; set; }

        public int? Discount { get; set; }

        [MaxLength(600)]
        public string Tags { get; set; }

        public IFormFile BookImage { get; set; }

        [Required]
        public DateTime PublishDate { get; set; }


        [Required]
        [Display(Name = "تعداد صفحات")]
        public int PageNumber { get; set; }

        [Required]
        [Display(Name = "جلد")]
        public string Cover { get; set; }

        [Required]
        [Display(Name = "جنس")]
        public string Material { get; set; }

        [Required]
        [Display(Name = "وزن")]
        public int Weight { get; set; }

        [Required]
        public Int64 Isbn { get; set; }

        public string? Package { get; set; }
        public string Publisher { get; set; }
        public float Stars { get; set; }
        public int SoldCount { get; set; }

        public bool IsDelete { get; set; }

    }
}

