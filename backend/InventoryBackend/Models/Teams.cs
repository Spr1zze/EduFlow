using System.ComponentModel.DataAnnotations;

namespace InventoryBackend.Models
{
    public class Teams
    {
        public int TeamId { get; set; }

        [Required]
        public required string Name { get; set; }
        public required ICollection<Users> Users { get; set; }
    }
}