using Application.Models;

namespace Application.Interface
{
    public interface ILeadsApplication
    {
        Task<IEnumerable<LeadModel>> GetAllLeads();
        Task<int> AcceptLead(int id, float? newPrice);
        Task<int> DecliveLead(int id);
    }
}