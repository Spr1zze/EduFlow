using System.ComponentModel.DataAnnotations;

namespace InventoryBackend.Models
{
    public class ProductNotes
    {
        public int Id { get; set; }

        [Required]
        public int ProductId { get; set; }

        [Required]
        public required Products Product { get; set; }

        [Required]
        public required string Note { get; set; }
    }
}