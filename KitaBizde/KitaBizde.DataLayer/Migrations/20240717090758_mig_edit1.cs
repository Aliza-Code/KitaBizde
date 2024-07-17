using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace KitaBizde.DataLayer.Migrations
{
    /// <inheritdoc />
    public partial class mig_edit1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Books_BookGroups_BookGroupGroupId",
                table: "Books");

            migrationBuilder.DropForeignKey(
                name: "FK_Books_BookLevels_BookLevelLevelId",
                table: "Books");

            migrationBuilder.DropIndex(
                name: "IX_Books_BookGroupGroupId",
                table: "Books");

            migrationBuilder.DropIndex(
                name: "IX_Books_BookLevelLevelId",
                table: "Books");

            migrationBuilder.AlterColumn<long>(
                name: "PhoneNumber",
                table: "Users",
                type: "bigint",
                maxLength: 200,
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldMaxLength: 200);

            migrationBuilder.AlterColumn<string>(
                name: "BookLevelLevelId",
                table: "Books",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "BookGroupGroupId",
                table: "Books",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Books_GroupId",
                table: "Books",
                column: "GroupId");

            migrationBuilder.CreateIndex(
                name: "IX_Books_LevelId",
                table: "Books",
                column: "LevelId");

            migrationBuilder.AddForeignKey(
                name: "FK_Books_BookGroups_GroupId",
                table: "Books",
                column: "GroupId",
                principalTable: "BookGroups",
                principalColumn: "GroupId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Books_BookLevels_LevelId",
                table: "Books",
                column: "LevelId",
                principalTable: "BookLevels",
                principalColumn: "LevelId",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Books_BookGroups_GroupId",
                table: "Books");

            migrationBuilder.DropForeignKey(
                name: "FK_Books_BookLevels_LevelId",
                table: "Books");

            migrationBuilder.DropIndex(
                name: "IX_Books_GroupId",
                table: "Books");

            migrationBuilder.DropIndex(
                name: "IX_Books_LevelId",
                table: "Books");

            migrationBuilder.AlterColumn<int>(
                name: "PhoneNumber",
                table: "Users",
                type: "int",
                maxLength: 200,
                nullable: false,
                oldClrType: typeof(long),
                oldType: "bigint",
                oldMaxLength: 200);

            migrationBuilder.AlterColumn<int>(
                name: "BookLevelLevelId",
                table: "Books",
                type: "int",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "BookGroupGroupId",
                table: "Books",
                type: "int",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Books_BookGroupGroupId",
                table: "Books",
                column: "BookGroupGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_Books_BookLevelLevelId",
                table: "Books",
                column: "BookLevelLevelId");

            migrationBuilder.AddForeignKey(
                name: "FK_Books_BookGroups_BookGroupGroupId",
                table: "Books",
                column: "BookGroupGroupId",
                principalTable: "BookGroups",
                principalColumn: "GroupId");

            migrationBuilder.AddForeignKey(
                name: "FK_Books_BookLevels_BookLevelLevelId",
                table: "Books",
                column: "BookLevelLevelId",
                principalTable: "BookLevels",
                principalColumn: "LevelId");
        }
    }
}
