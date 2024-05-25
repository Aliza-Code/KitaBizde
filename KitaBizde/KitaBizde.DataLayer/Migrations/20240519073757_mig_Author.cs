using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace KitaBizde.DataLayer.Migrations
{
    /// <inheritdoc />
    public partial class mig_Author : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Books_BookLevels_BookLevelLevelId",
                table: "Books");

            migrationBuilder.DropIndex(
                name: "IX_Books_BookLevelLevelId",
                table: "Books");

            migrationBuilder.RenameColumn(
                name: "Off",
                table: "Books",
                newName: "Discount");

            migrationBuilder.AlterColumn<string>(
                name: "BookLevelLevelId",
                table: "Books",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "BookLevelLevelId1",
                table: "Books",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Author",
                columns: table => new
                {
                    AuthorId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AuthorName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AuthorTurkName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AboutAuthor = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Author", x => x.AuthorId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Books_AuthorId",
                table: "Books",
                column: "AuthorId");

            migrationBuilder.CreateIndex(
                name: "IX_Books_BookLevelLevelId1",
                table: "Books",
                column: "BookLevelLevelId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Books_Author_AuthorId",
                table: "Books",
                column: "AuthorId",
                principalTable: "Author",
                principalColumn: "AuthorId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Books_BookLevels_BookLevelLevelId1",
                table: "Books",
                column: "BookLevelLevelId1",
                principalTable: "BookLevels",
                principalColumn: "LevelId",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Books_Author_AuthorId",
                table: "Books");

            migrationBuilder.DropForeignKey(
                name: "FK_Books_BookLevels_BookLevelLevelId1",
                table: "Books");

            migrationBuilder.DropTable(
                name: "Author");

            migrationBuilder.DropIndex(
                name: "IX_Books_AuthorId",
                table: "Books");

            migrationBuilder.DropIndex(
                name: "IX_Books_BookLevelLevelId1",
                table: "Books");

            migrationBuilder.DropColumn(
                name: "BookLevelLevelId1",
                table: "Books");

            migrationBuilder.RenameColumn(
                name: "Discount",
                table: "Books",
                newName: "Off");

            migrationBuilder.AlterColumn<int>(
                name: "BookLevelLevelId",
                table: "Books",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Books_BookLevelLevelId",
                table: "Books",
                column: "BookLevelLevelId");

            migrationBuilder.AddForeignKey(
                name: "FK_Books_BookLevels_BookLevelLevelId",
                table: "Books",
                column: "BookLevelLevelId",
                principalTable: "BookLevels",
                principalColumn: "LevelId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
