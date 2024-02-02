using Repository.Entity;

namespace Repository.Interface
{
    public interface ILeadsRepository
    {
        Task<IEnumerable<Lead>> GetAllLeads();
        Task<int> AcceptLead(int id, float? newPrice);
        Task<int> AcceptLead(int id);
        Task<int> DecliveLead(int id);
    }
}
