using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Repository.Interface;
using System.Data;

namespace Repository
{
    
    public class BaseRepository: IBaseRepository
    {
        private SqlConnection _connection;

        public BaseRepository(IConfiguration configuration)
        {
            _connection = new SqlConnection(configuration.GetConnectionString("UsersAppCon").ToString());
            if (_connection.State == ConnectionState.Closed)
                _connection.Open();
        }

        public async Task<IEnumerable<T>> ListarAsync<T>(string consulta, int? timeout = null)
        {
            IEnumerable<T> ocorrencias = await _connection.QueryAsync<T>(new CommandDefinition(consulta, commandTimeout: timeout));
            return ocorrencias;
        }

        public async Task<int> ExecuteAsync<T>(string consulta, object parametros, int? timeout = null)
        {
            int ocorrencia = await _connection.ExecuteAsync(
                new CommandDefinition(consulta, parametros, commandTimeout: timeout));

            return ocorrencia;
        }
    }
}
