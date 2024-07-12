using KitaBizde.Core.Convertors;
using KitaBizde.Core.Services;
using KitaBizde.Core.Services.Interfaces;
using KitaBizde.DataLayer.Context;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Configuration;


var builder = WebApplication.CreateBuilder(args);


// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddHttpContextAccessor();


var provider = builder.Services.BuildServiceProvider();
var configuration = provider.GetRequiredService<IConfiguration>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactivitesPolicy", policy =>
    {
        policy.AllowAnyMethod()
        .AllowAnyHeader()
        .WithOrigins("http://localhost:7257");
    });
});

//builder.Services.AddCors(options =>
//{
//    var frontendURL = configuration.GetValue<string>("frontend_url");
//    options.AddDefaultPolicy(builder =>
//    {
//        builder.WithOrigins(frontendURL).AllowAnyMethod().AllowAnyHeader()
//            .WithExposedHeaders(new string[] { "totalAmountOfRecords" });
//    });
//});


//tanzimate ehraze hoviyat
#region Authentication 
builder.Services.AddAuthentication(option =>
{
    option.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
    option.DefaultChallengeScheme = CookieAuthenticationDefaults.AuthenticationScheme;
    option.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
}).AddCookie(option =>
{
    option.LoginPath = "/Login";   //agar kaarbar be paneli bexahad beravad k dastresi nadarad be login redirect mishavad
    option.LogoutPath = "/Logout";
    option.ExpireTimeSpan = TimeSpan.FromMinutes(43200);  //engezaye be xater besepar
});
#endregion

#region DbContext
string connString = builder.Configuration.GetConnectionString("KitaBizdeConnection");

builder.Services.AddDbContext<KitaBizdeContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("KitaBizdeConnection"));

});
#endregion

#region Ioc

builder.Services.AddTransient<IUserService, UserService>();
builder.Services.AddTransient<IBookService, BookService>();
builder.Services.AddTransient<IOrderService, OrderService>();

#endregion


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();



app.UseCors("ReactivitesPolicy");
app.UseHttpsRedirection();
app.UseHttpsRedirection();
app.UseRouting();
app.UseAuthorization();
app.MapControllers();


app.Run();
