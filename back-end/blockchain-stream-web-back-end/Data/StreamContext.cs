using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Stream.Models;

namespace Stream.Data;

public partial class StreamContext : DbContext
{
    public StreamContext(DbContextOptions<StreamContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Channel> Channels { get; set; }

    public virtual DbSet<Comment> Comments { get; set; }

    public virtual DbSet<Follower> Followers { get; set; }

    public virtual DbSet<Label> Labels { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<Video> Videos { get; set; }

    public virtual DbSet<VideoLabel> VideoLabels { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Channel>(entity =>
        {
            entity.HasKey(e => e.ChannelId).HasName("PRIMARY");

            entity.HasIndex(e => e.ChannelOwner, "fk_owner");

            entity.Property(e => e.ChannelId).HasColumnName("channel_id");
            entity.Property(e => e.ChannelName)
                .HasMaxLength(255)
                .HasColumnName("channel_name");
            entity.Property(e => e.ChannelOwner).HasColumnName("channel_owner");

            entity.HasOne(d => d.ChannelOwnerNavigation).WithMany(p => p.Channels)
                .HasForeignKey(d => d.ChannelOwner)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_owner");
        });

        modelBuilder.Entity<Comment>(entity =>
        {
            entity.HasKey(e => e.CommentId).HasName("PRIMARY");

            entity.HasIndex(e => e.CommentUser, "fk_cmt_user");

            entity.Property(e => e.CommentId).HasColumnName("comment_id");
            entity.Property(e => e.CommentContent)
                .HasMaxLength(255)
                .HasColumnName("comment_content");
            entity.Property(e => e.CommentUser).HasColumnName("comment_user");
            entity.Property(e => e.CommentVideo)
                .HasMaxLength(255)
                .HasColumnName("comment_video");

            entity.HasOne(d => d.CommentUserNavigation).WithMany(p => p.Comments)
                .HasForeignKey(d => d.CommentUser)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_cmt_user");
        });

        modelBuilder.Entity<Follower>(entity =>
        {
            entity.HasKey(e => e.FollowId).HasName("PRIMARY");

            entity.HasIndex(e => e.FollowingId, "fk_following");

            entity.HasIndex(e => e.FollowerId, "follower_id");

            entity.Property(e => e.FollowId)
                .ValueGeneratedNever()
                .HasColumnName("follow_id");
            entity.Property(e => e.FollowerId).HasColumnName("follower_id");
            entity.Property(e => e.FollowingId).HasColumnName("following_id");

            entity.HasOne(d => d.FollowerNavigation).WithMany(p => p.FollowerFollowerNavigations)
                .HasForeignKey(d => d.FollowerId)
                .HasConstraintName("fk_follower");

            entity.HasOne(d => d.Following).WithMany(p => p.FollowerFollowings)
                .HasForeignKey(d => d.FollowingId)
                .HasConstraintName("fk_following");
        });

        modelBuilder.Entity<Label>(entity =>
        {
            entity.HasKey(e => e.LabelId).HasName("PRIMARY");

            entity.Property(e => e.LabelId).HasColumnName("label_id");
            entity.Property(e => e.LabelName)
                .HasMaxLength(255)
                .HasColumnName("label_name");

            entity.HasMany(d => d.Users).WithMany(p => p.Labels)
                .UsingEntity<Dictionary<string, object>>(
                    "UserFavorite",
                    r => r.HasOne<User>().WithMany()
                        .HasForeignKey("UserId")
                        .HasConstraintName("fk_user_favorite"),
                    l => l.HasOne<Label>().WithMany()
                        .HasForeignKey("LabelId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("fk_user_label"),
                    j =>
                    {
                        j.HasKey("LabelId", "UserId")
                            .HasName("PRIMARY")
                            .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });
                        j.ToTable("User_Favorites");
                        j.HasIndex(new[] { "UserId" }, "fk_user_favorite");
                        j.HasIndex(new[] { "LabelId" }, "label_id");
                        j.IndexerProperty<int>("LabelId").HasColumnName("label_id");
                        j.IndexerProperty<string>("UserId").HasColumnName("user_id");
                    });
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PRIMARY");

            entity.Property(e => e.UserId).HasColumnName("user_id");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password");
            entity.Property(e => e.UserEmail)
                .HasMaxLength(255)
                .HasColumnName("user_email");
            entity.Property(e => e.UserFullname)
                .HasMaxLength(255)
                .HasColumnName("user_fullname");
            entity.Property(e => e.UserRole)
                .HasMaxLength(10)
                .HasColumnName("user_role");
            entity.Property(e => e.UserStreamKey)
                .HasMaxLength(255)
                .HasColumnName("user_stream_key");
            entity.Property(e => e.Username)
                .HasMaxLength(255)
                .HasColumnName("username");
        });

        modelBuilder.Entity<Video>(entity =>
        {
            entity.HasKey(e => new { e.VideoId, e.VideoName })
                .HasName("PRIMARY")
                .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });

            entity.HasIndex(e => e.VideoComments, "fk_vd_comment");

            entity.HasIndex(e => e.VideoOwner, "fk_vd_owner");

            entity.HasIndex(e => e.VideoId, "video_id");

            entity.Property(e => e.VideoId).HasColumnName("video_id");
            entity.Property(e => e.VideoName).HasColumnName("video_name");
            entity.Property(e => e.VideoComments).HasColumnName("video_comments");
            entity.Property(e => e.VideoLabel).HasColumnName("video_label");
            entity.Property(e => e.VideoLike).HasColumnName("video_like");
            entity.Property(e => e.VideoOwner).HasColumnName("video_owner");
            entity.Property(e => e.VideoShare).HasColumnName("video_share");
            entity.Property(e => e.VideoType)
                .HasMaxLength(15)
                .HasColumnName("video_type");
            entity.Property(e => e.VideoViews).HasColumnName("video_views");

            entity.HasOne(d => d.VideoCommentsNavigation).WithMany(p => p.Videos)
                .HasForeignKey(d => d.VideoComments)
                .HasConstraintName("fk_vd_comment");

            entity.HasOne(d => d.VideoOwnerNavigation).WithMany(p => p.Videos)
                .HasForeignKey(d => d.VideoOwner)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_vd_owner");
        });

        modelBuilder.Entity<VideoLabel>(entity =>
        {
            entity.HasKey(e => new { e.LabelId, e.VideoId })
                .HasName("PRIMARY")
                .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });

            entity.ToTable("Video_Labels");

            entity.HasIndex(e => e.VideoId, "fk_vd_vd");

            entity.Property(e => e.LabelId).HasColumnName("label_id");
            entity.Property(e => e.VideoId).HasColumnName("video_id");

            entity.HasOne(d => d.Label).WithMany(p => p.VideoLabels)
                .HasForeignKey(d => d.LabelId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_vd_label");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
