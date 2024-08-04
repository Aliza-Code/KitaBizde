using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace KitaBizde.DataLayer.Migrations
{
    /// <inheritdoc />
    public partial class mig_fixAuthor : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AuthorImage",
                table: "Authors",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AuthorImage",
                table: "Authors");
        }
    }
}
