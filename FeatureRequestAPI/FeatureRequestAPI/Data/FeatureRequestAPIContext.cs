using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace FeatureRequestAPI.Models
{
    public class FeatureRequestAPIContext : IdentityDbContext
    {
        public FeatureRequestAPIContext (DbContextOptions<FeatureRequestAPIContext> options)
            : base(options)
        {
        }

        public DbSet<FeatureRequestAPI.Models.FeatureRequestItem> FeatureRequestItem { get; set; }
    }
}
