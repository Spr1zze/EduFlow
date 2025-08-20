using System.ComponentModel.DataAnnotations;

namespace InventoryBackend.Models
{
    public class Users
    {
        public int Id { get; set; }

        [Required]
        public required RoleTypes Role { get; set; }
        public int? TeamId { get; set; }
        public Teams? Team { get; set; } // team type comes from another model
    }
}