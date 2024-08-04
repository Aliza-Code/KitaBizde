using KitaBizde.DataLayer.Entities.Book;
using KitaBizde.DataLayer.Entities.Order;
using KitaBizde.DataLayer.Entities.Permissions;
using KitaBizde.DataLayer.Entities.User;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KitaBizde.DataLayer.Context
{
    public class KitaBizdeContext : DbContext
    {
        public KitaBizdeContext(DbContextOptions<KitaBizdeContext> options) : base(options)  //tanzimate lazem baraye context ke az web dastur begirad
        {

        }

        #region User
        public DbSet<Role> Roles { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<Author> Authors { get; set; }
        #endregion

        #region Permission
        public DbSet<Permission> Permission { get; set; }
        public DbSet<RolePermission> RolePermission { get; set; }
        #endregion

        #region Order

        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }

        #endregion

        #region Book

        public DbSet<Books> Books { get; set; }
        public DbSet<BookGroup> BookGroups { get; set; }
        public DbSet<BookLevel> BookLevels { get; set; }

        #endregion



        protected override void OnModelCreating(ModelBuilder modelBuilder)    //query filter baraye inke harjayi agar IsDelete true bood digar an neshandade nashavad
        {

            var cascadeFKs = modelBuilder.Model.GetEntityTypes()
                .SelectMany(t => t.GetForeignKeys())
                .Where(fk => !fk.IsOwnership && fk.DeleteBehavior == DeleteBehavior.Cascade);

            foreach (var fk in cascadeFKs)
                fk.DeleteBehavior = DeleteBehavior.Restrict;

            base.OnModelCreating(modelBuilder);



            modelBuilder.Entity<User>()
                .HasQueryFilter(u => !u.IsDelete);
            modelBuilder.Entity<Role>()
                .HasQueryFilter(r => !r.IsDelete);
            modelBuilder.Entity<BookGroup>()
                .HasQueryFilter(g => !g.IsDelete);
            modelBuilder.Entity<Books>()
                .HasQueryFilter(c => !c.IsDelete);

            base.OnModelCreating(modelBuilder);
        }
    }
}
