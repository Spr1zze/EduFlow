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


var app = builder.Build();



app.UseHttpsRedirection();



app.Run();