using System.ComponentModel.DataAnnotations;

namespace InventoryBackend.Models
{
    public class Users
    {
        public int Id { get; set; }

        [Required]
        public required RoleType Role { get; set; }

        [Required]
        public required string Username { get; set; }

        [Required]
        public required string HashedPassword { get; set; }
        [Required]
        public required string SaltPassword { get; set; }

        public int TeamId { get; set; }
        public required Teams Team { get; set; } // team type comes from another model
    }
}