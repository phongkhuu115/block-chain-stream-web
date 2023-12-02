using System;
using System.Collections.Generic;

namespace Stream.Models;

public partial class Video
{
    public string VideoId { get; set; } = null!;

    public string VideoName { get; set; } = null!;

    public string VideoType { get; set; } = null!;

    public int? VideoLabel { get; set; }

    public string VideoOwner { get; set; } = null!;

    public int? VideoLike { get; set; }

    public int? VideoShare { get; set; }

    public string? VideoComments { get; set; }

    public int VideoViews { get; set; }

    public virtual Comment? VideoCommentsNavigation { get; set; }

    public virtual User VideoOwnerNavigation { get; set; } = null!;
}
