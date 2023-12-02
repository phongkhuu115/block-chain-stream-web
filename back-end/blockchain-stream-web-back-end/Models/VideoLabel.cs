using System;
using System.Collections.Generic;

namespace Stream.Models;

public partial class VideoLabel
{
    public int LabelId { get; set; }

    public string VideoId { get; set; } = null!;

    public virtual Label Label { get; set; } = null!;
}
