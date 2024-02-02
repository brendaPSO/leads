using Dapper;
using Repository.Entity;
using Repository.Interface;
using System.Data;

namespace Repository
{
    public class LeadsRepository: ILeadsRepository
    {
        public IBaseRepository repo;

        public const string GET_ALL_LEADS = @"SELECT * FROM leadRegistrations";
        public const string ACCEPT_LEADS = @"UPDATE leadRegistrations SET Accepted = 1 WHERE JobId = @Id";
        public const string ACCEPT_PRICE_LEADS = @"UPDATE leadRegistrations SET Accepted = 1, Price = @NewPrice WHERE JobId = @Id";
        public const string DECLIVE_LEADS = @"UPDATE leadRegistrations SET DeletedAt = @DateNow WHERE JobId = @Id";

        public LeadsRepository(IBaseRepository repo)
        {
            this.repo = repo;
        }

        public async Task<IEnumerable<Lead>> GetAllLeads()
        {
            return await  repo.ListarAsync<Lead>(GET_ALL_LEADS);
        }

        public async Task<int> AcceptLead(int id, float? newPrice)
        {
            DynamicParameters parameters = new DynamicParameters();

            parameters.Add("@NewPrice", newPrice, DbType.Double);
            parameters.Add("@Id", id, DbType.Int32);

            var teste = await repo.ExecuteAsync<int>(ACCEPT_PRICE_LEADS, parameters);
            return teste;
        }

        public async Task<int> AcceptLead(int id)
        {
            DynamicParameters parameters = new DynamicParameters();

            parameters.Add("@Id", id, DbType.Int32);

            var teste = await repo.ExecuteAsync<int>(ACCEPT_LEADS, parameters);
            return teste;
        }

        public async Task<int> DecliveLead(int id)
        {
            DynamicParameters parameters = new DynamicParameters();
            parameters.Add("@Id", id, DbType.Int32);
            parameters.Add("@DateNow", DateTime.Now, DbType.DateTime);

            return await repo.ExecuteAsync<int>(DECLIVE_LEADS, parameters);
        }
    }
}
