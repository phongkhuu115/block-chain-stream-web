using System;
using System.Collections.Generic;

namespace Stream.Models;

public partial class Comment
{
    public string CommentId { get; set; } = null!;

    public string CommentContent { get; set; } = null!;

    public string CommentUser { get; set; } = null!;

    public string CommentVideo { get; set; } = null!;

    public virtual User CommentUserNavigation { get; set; } = null!;

    public virtual ICollection<Video> Videos { get; set; } = new List<Video>();
}
