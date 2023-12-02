using System;
using System.Collections.Generic;

namespace Stream.Models;

public partial class User
{
    public string UserId { get; set; } = null!;

    public string Username { get; set; } = null!;

    public string? UserFullname { get; set; }

    public string Password { get; set; } = null!;

    public string UserEmail { get; set; } = null!;

    public string UserStreamKey { get; set; } = null!;

    public string UserRole { get; set; } = null!;

    public virtual ICollection<Channel> Channels { get; set; } = new List<Channel>();

    public virtual ICollection<Comment> Comments { get; set; } = new List<Comment>();

    public virtual ICollection<Follower> FollowerFollowerNavigations { get; set; } = new List<Follower>();

    public virtual ICollection<Follower> FollowerFollowings { get; set; } = new List<Follower>();

    public virtual ICollection<Video> Videos { get; set; } = new List<Video>();

    public virtual ICollection<Label> Labels { get; set; } = new List<Label>();
}
