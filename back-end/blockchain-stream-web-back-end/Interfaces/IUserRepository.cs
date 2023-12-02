using Stream.Models;

namespace Stream.Interfaces
{
    public interface IUserRepository
    {
        // CRUD
        Task<IEnumerable<User>> GetUsers();
        User GetUserByID(string id);
        User GetUserByUsername(string username);
        void Register(User _user);
        void UpdateUser(User _user);
        void DeleteUser(string id);

        // User Action
        void Login(string username, string password);
    }
}
