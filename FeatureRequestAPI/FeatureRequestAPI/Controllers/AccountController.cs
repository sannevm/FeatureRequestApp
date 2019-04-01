using System.Threading.Tasks;
using AutoMapper;
using FeatureRequestAPI.Helpers;
using FeatureRequestAPI.Models;
using FeatureRequestAPI.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;


namespace FeatureRequestAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : Controller
    {
        private readonly FeatureRequestAPIContext _appDbContext;
        private readonly UserManager<AppUser> _userManager;
        private readonly IMapper _mapper;

        public AccountController(UserManager<AppUser> userManager, IMapper mapper, FeatureRequestAPIContext appDbContext)
        {
            _userManager = userManager;
            _mapper = mapper;
            _appDbContext = appDbContext;
        }

        // POST api/account
        [HttpPost]
        public async Task<IActionResult> Register([FromBody]RegistrationViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdentity = _mapper.Map<AppUser>(model);

            var result = await _userManager.CreateAsync(userIdentity, model.Password);

            if (!result.Succeeded) return new BadRequestObjectResult(Error.AddErrorsToModelState(result, ModelState));

            await _appDbContext.AddAsync(new AppUser() );
            await _appDbContext.SaveChangesAsync();

            return new OkObjectResult("Account created");
        }

    }
}
