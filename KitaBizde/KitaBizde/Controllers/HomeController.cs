using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KitaBizde.web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public IActionResult Index()
        {
            return Ok();
        }
    }
}
