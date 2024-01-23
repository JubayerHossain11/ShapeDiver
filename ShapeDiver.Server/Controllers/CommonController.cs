using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ShapeDiver.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("MyCorsPolicy")]
    public class CommonController : ControllerBase
    {
        [HttpPost]
        [Route("GetAuthenticate")]
        public bool GetAuthenticate(UserDto input)
        {
            return input.UserName.ToLower()== "test" && input.Password.ToLower() == "test" ? true: false;
        }

        
    }

    public class UserDto
    {
        public string UserName { get; set; }
        public string Password { get;set; }
    }
}
