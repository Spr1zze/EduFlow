using System.ComponentModel.DataAnnotations;

namespace InventoryBackend.Models
{
    public enum RoleTypes
    {
        Admin = 0,
        Teacher = 1,
        Student = 2
    }

    /*public class RoleTypes
    {
        public int Id { get; set; }

        public required string Role { get; set; }
    }*/
}