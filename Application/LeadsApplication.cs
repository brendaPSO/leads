using Application.Interface;
using Application.Mapping;
using Application.Models;
using Repository.Interface;

namespace Application
{
    public class LeadsApplication : ILeadsApplication
    {
        private ILeadsRepository _leadsRepository;

        public LeadsApplication(ILeadsRepository leadsRepository)
        {
            _leadsRepository = leadsRepository;
        }

        public async Task<IEnumerable<LeadModel>> GetAllLeads()
        {
            var leads = await _leadsRepository.GetAllLeads();

            return leads.ToModel();
        }

        public async Task<int> AcceptLead(int id, float? newPrice)
        {
            if (newPrice != null)
                return await _leadsRepository.AcceptLead(id, newPrice);
            
            return await _leadsRepository.AcceptLead(id);
        }

        public async Task<int> DecliveLead(int id)
        {
            return await _leadsRepository.DecliveLead(id);
        }
    }
}
