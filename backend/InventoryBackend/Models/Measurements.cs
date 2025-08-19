using System.ComponentModel.DataAnnotations;

namespace InventoryBackend.Models
{
    public class Measurements
    {
        public int Id { get; set; }

        [Required]
        public required string Type { get; set; } // e.g., "kg", "liters", "grams" etc.
    }
}
