using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace FeatureRequestAPI.Models
{
    public class FeatureRequestAPIContext : IdentityDbContext<AppUser>
    {
        public FeatureRequestAPIContext (DbContextOptions<FeatureRequestAPIContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AppUser>()
                .HasMany(b => b.FeatureRequestItems)
                .WithOne()
                .OnDelete(DeleteBehavior.Restrict);

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<FeatureRequestAPI.Models.FeatureRequestItem> FeatureRequestItem { get; set; }
    }
}
