using InventoryBackend.Data;
using InventoryBackend.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Mapping ENUMs for db validation
builder.Services.AddDbContext<AppDbContext>(options => options.UseNpgsql(
    builder.Configuration.GetConnectionString("Inventory.PostegresDB"),
    o => o
    .MapEnum<Measurements>("measurements")
    .MapEnum<RoleTypes>("roletypes")
));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:5173/")
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});


var app = builder.Build();

app.UseCors("AllowFrontend");

app.MapGet("/test", () => new { Message = "CORS works!" });


app.UseHttpsRedirection();



app.Run();