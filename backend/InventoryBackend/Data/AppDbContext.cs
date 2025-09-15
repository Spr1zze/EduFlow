using System.Net.Http.Headers;
using Microsoft.EntityFrameworkCore;
using InventoryBackend.Models;


namespace InventoryBackend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Products> Products { get; set; }
        public DbSet<ProductUsages> ProductUsages { get; set; }
        public DbSet<ProductNotes> ProductNotes { get; set; }
        public DbSet<Teams> Teams { get; set; }
        public DbSet<Users> Users { get; set; }
        public DbSet<Credentials> Credentials { get; set; }
    }
}



