using System.ComponentModel.DataAnnotations;


namespace InventoryBackend.Models
{
    public class ProductUsages
    {
        public int Id { get; set; }

        [Required]
        public int ProductId { get; set; }
        public required Products Product { get; set; }

        [Required]
        public int TeamId { get; set; }
        public required Teams Team { get; set; } // team type comes from another model

        [Required]
        public decimal AmountUsed { get; set; }

        [Required]
        public DateTime LastUsed { get; set; }

        public string? BatchNumber { get; set; } // will look like this -> Date-TeamId-PastNumber e.g D1908-T5-B3
    }
}