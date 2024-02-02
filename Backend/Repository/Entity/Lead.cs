

namespace Repository.Entity
{
    public class Lead
    {
        public int JobId { get; set; }
        public Boolean Accepted { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Suburb { get; set; }
        public string? Category { get; set; }
        public string? DescriptionJob { get; set; }
        public double Price { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? DeletedAt { get; set; }
    }
}
