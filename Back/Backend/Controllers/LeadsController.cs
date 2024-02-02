using Application.Interface;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeadsController : ControllerBase
    {
        private readonly ILeadsApplication _leadsApplication;

        public LeadsController(ILeadsApplication leadsApplication)
        {
            _leadsApplication = leadsApplication;
        }

        [HttpGet]
        [Route("GetAllLeads")]
        public async Task<JsonResult> GeUsers()
        {
            return new JsonResult(await _leadsApplication.GetAllLeads());
        }

        [HttpPut]
        [Route("AcceptLead")]
        public async Task<JsonResult> AcceptLead(int id, float? newPrice)
        {
            return new JsonResult(await _leadsApplication.AcceptLead(id, newPrice));
        }


        [HttpPut]
        [Route("DecliveLead")]
        public async Task<JsonResult> DecliveLead(int id)
        {
            return new JsonResult(await _leadsApplication.DecliveLead(id));




            /* SqlConnection con = new SqlConnection(_configuration.GetConnectionString("UsersAppCon").ToString());
             con.Open();
             SqlCommand cmd = new SqlCommand("UPDATE leadRegistrations SET DeletedAt = @DateNow WHERE JobId = @Id", con);
             cmd.Parameters.AddWithValue("@Id", id);
             cmd.Parameters.AddWithValue("@dateNow", DateTime.Now);
             int rowsAffected = cmd.ExecuteNonQuery();

             // Verificar o número de linhas afetadas se necessário
             if (rowsAffected > 0)
             {
                 Response.StatusCode = 200;
                 return new JsonResult(new { SuccessMessage = "Aceito com sucesso" });
             }
             else
             {
                 Response.StatusCode = 404; // 404 Not Found
                 return new JsonResult(new { ErrorMessage = "No data found" });
             }*/
        }
    }
}
