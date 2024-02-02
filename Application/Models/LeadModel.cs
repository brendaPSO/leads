namespace Application.Models
{
    public class LeadModel
    {
        public int jobId { get; set; }
        public Boolean accepted { get; set; }
        public string? firstName { get; set; }
        public string? lastName { get; set; }
        public string? suburb { get; set; }
        public string? category { get; set; }
        public string? descriptionJob { get; set; }
        public double price { get; set; }
        public string? email { get; set; }
        public string? phoneNumber { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime? deletedAt { get; set; }
    }
}
