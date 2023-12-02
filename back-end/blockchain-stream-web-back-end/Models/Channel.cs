using System;
using System.Collections.Generic;

namespace Stream.Models;

public partial class Channel
{
    public string ChannelId { get; set; } = null!;

    public string ChannelOwner { get; set; } = null!;

    public string ChannelName { get; set; } = null!;

    public virtual User ChannelOwnerNavigation { get; set; } = null!;
}
