using System.ComponentModel.DataAnnotations;

namespace InventoryBackend.Models
{
    public class Credentials
    {
        public int Id { get; set; }
        public int user_id { get; set; }
        public required string username { get; set; }
        public required string hashed_password { get; set; }
        public required string salt_password { get; set; }
    }
}