using Application.Interface;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        public readonly IEmailApplication _emailApplication;

        public EmailController(IEmailApplication emailApplication)
        {
            _emailApplication = emailApplication;
        }

        [HttpPost]
        [Route("SendEmail")]
        public string SendEmail()
        {
            return _emailApplication.SendEmail();
        }
    }
}
