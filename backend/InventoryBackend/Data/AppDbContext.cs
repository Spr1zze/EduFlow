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
        public DbSet<Measurements> Measurements { get; set; }
        public DbSet<RoleTypes> RoleTypes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.HasPostgresEnum<Measurements>(
                new Measurements { Id = 0, Type = "Kilogram" },
                new Measurements { Id = 1, Type = "Liter" },
                new Measurements { Id = 2, Type = "Gram" }
            );
            modelBuilder.HasPostgresEnum<RoleTypes>(
                new RoleTypes { Id = 0, Role = "Admin" },
                new RoleTypes { Id = 1, Role = "Teacher" },
                new RoleTypes { Id = 2, Role = "Student" }
            );
        }
    }
}