using Microsoft.AspNetCore.Mvc;
using Stream.Interfaces;
using Stream.Models;
using Stream.DTO;
using Stream.Helpers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Data;

namespace Stream.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IUserRepository _userRepository;
        private IConfiguration _config;

        public UserController(IUserRepository userRepository, IConfiguration config)
        {
            _userRepository = userRepository;
            _config = config;
        }

        [HttpGet("getUsers")]
        public async Task<ActionResult> GetUser() 
        {
            return Ok(await _userRepository.GetUsers());
        }

        [HttpPost("register")]
        public ActionResult Register([FromForm] UserDTO user)
        {
            // validation
            if (!new Validator().IsValidEmail(user.UserEmail))
            {
                return UnprocessableEntity("Email not in correct format");
            }

            if (user.Password.Length < 8)
            {
                return UnprocessableEntity("Password must have 8 characters or more");
            }

            if (!new Validator().IsValidUsername(user.Username))
            {
                return UnprocessableEntity("Username must not contain special characters");
            }

            var userID = Guid.NewGuid().ToString();
            _userRepository.Register(new User()
            {
                UserId = userID,
                Username = user.Username,
                Password = BCrypt.Net.BCrypt.EnhancedHashPassword(user.Password, 13),
                UserEmail = user.UserEmail,
                UserRole = 1.ToString(),
                UserStreamKey = "https://example.com/" + userID
            });

            return Created("", new { message = "User Created" });
        }

        [HttpPost("login")]
        public ActionResult Login([FromForm] UserLoginDTO user)
        {

            if (user.Password.Length < 8)
            {
                return UnprocessableEntity("Password must have 8 characters or more");
            }

            if (!new Validator().IsValidUsername(user.Username))
            {
                return UnprocessableEntity("Username must not contain special characters");
            }

            var _user = _userRepository.GetUserByUsername(user.Username);
            var password = _user.Password;
            var isValidPassword = BCrypt.Net.BCrypt.EnhancedVerify(user.Password, _user.Password);
            if (isValidPassword)
            {
                var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]!));
                var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                  _config["Jwt:Issuer"],
                  new[] { new Claim("user_role", _user.UserRole) },
                  signingCredentials: credentials);

                var tokenString = new JwtSecurityTokenHandler().WriteToken(token);
                return Ok(new { username = _user.Username, userFullname = _user.UserFullname, _user.UserStreamKey, accessToken = tokenString });
            }

            return BadRequest();
        }
    }
}
