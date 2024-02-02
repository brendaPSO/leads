namespace Repository.Interface
{
    public interface IBaseRepository
    {
        Task<IEnumerable<T>> ListarAsync<T>(string consulta, int? timeout = null);
        Task<int> ExecuteAsync<T>(string consulta, object parametros, int? timeout = null);
    }
}
