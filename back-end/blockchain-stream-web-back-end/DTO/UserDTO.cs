namespace Stream.DTO
{
    public class UserDTO
    {
        public string Username { get; set; } = null!;

        public string Password { get; set; } = null!;

        public string UserEmail { get; set; } = null!;
    }

    public class UserLoginDTO
    {
        public string Username { get; set; } = null!;

        public string Password { get; set; } = null!;
    }
}
