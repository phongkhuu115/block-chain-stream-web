using System;
using System.Collections.Generic;

namespace Stream.Models;

public partial class Label
{
    public int LabelId { get; set; }

    public string LabelName { get; set; } = null!;

    public virtual ICollection<VideoLabel> VideoLabels { get; set; } = new List<VideoLabel>();

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}
