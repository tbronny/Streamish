using System;
using Microsoft.AspNetCore.Mvc;
using Streamish.Repositories;
using Streamish.Models;

namespace Streamish.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileRepository _userRepo;
        public UserProfileController(IUserProfileRepository userProfileRepository)
        {
            _userRepo = userProfileRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_userRepo.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var user = _userRepo.GetById(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost]
        public IActionResult Post(UserProfile user)
        {
            _userRepo.Add(user);
            return CreatedAtAction("Get", new { id = user.Id }, user);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, UserProfile user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            _userRepo.Update(user);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _userRepo.Delete(id);
            return NoContent();
        }
    }
}
