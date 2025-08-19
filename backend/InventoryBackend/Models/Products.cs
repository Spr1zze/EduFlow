using System.ComponentModel.DataAnnotations;

namespace InventoryBackend.Models
{
    public class Products
    {
        public int Id { get; set; }

        [Required]
        public required string Title { get; set; }

        public string? Description { get; set; }

        [Required]
        public int Amount { get; set; }

        [Required]
        public required Measurements Unit { get; set; }
    }
}