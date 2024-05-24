using KitaBizde.DataLayer.Entities.Book;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KitaBizde.DataLayer
{
    public class BookGroup
    {
        [Key]
        public int GroupId { get; set; }

        [Display(Name = "عنوان گروه")]
        [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
        [MaxLength(200, ErrorMessage = "{0}نمیتواند بیشتر از {1} کاراکتر باشد")]
        public string GroupTitle { get; set; }

        [Display(Name = "حذف شده؟")]
        public bool IsDelete { get; set; }

        [Display(Name = "گروه اصلی")]
        public int? ParentId { get; set; }


        #region relations

        [ForeignKey("ParentId")]
        public List<BookGroup> BookGroups { get; set; }

        [InverseProperty("BookGroup")]
        public List<Books> Books { get; set; }

        [InverseProperty("Group")]
        public List<Books> SubGroup { get; set; }

        #endregion
    }
}
