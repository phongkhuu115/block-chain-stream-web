using System.Net.Mail;
using System.Text.RegularExpressions;

namespace Stream.Helpers
{
    public class Validator
    {
        public bool IsValidEmail(string email)
        {
            try
            {
                var emailAddress = new MailAddress(email);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool IsValidUsername(string username)
        {
            Regex regex = new Regex("^[a-zA-Z0-9]+$");
            return regex.IsMatch(username);
        }
    }
}
