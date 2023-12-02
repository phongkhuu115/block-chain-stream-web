using System;
using System.Collections.Generic;

namespace Stream.Models;

public partial class Follower
{
    public string FollowerId { get; set; } = null!;

    public string FollowingId { get; set; } = null!;

    public int FollowId { get; set; }

    public virtual User FollowerNavigation { get; set; } = null!;

    public virtual User Following { get; set; } = null!;
}
