using Stream.Interfaces;
using Stream.Models;
using Stream.Data;
using Microsoft.EntityFrameworkCore;

namespace Stream.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly StreamContext _context;

        // constructor
        public UserRepository(StreamContext context)
        {
            this._context = context;
        }

        // CRUD
        public async Task<IEnumerable<User>> GetUsers() => await _context.Users.ToListAsync();
        public User GetUserByID(string id) => _context.Users.Find(id)!;
        public User GetUserByUsername(string username)
        {
            return _context.Users.Where(e => e.Username == username).FirstOrDefault()!;
        }

        public void Register(User _user)
        {
            _context.Users.Add(_user);
            _context.SaveChanges();
        }
        public void UpdateUser(User _user)
        {

        }
        public void DeleteUser(string id)
        {

        }

        // User Action
        public void Login(string username, string password)
        {

        }
    }
}
