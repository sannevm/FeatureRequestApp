using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace FeatureRequestAPI.Models
{
    public class FeatureRequestAPIContext : DbContext
    {
        public FeatureRequestAPIContext (DbContextOptions<FeatureRequestAPIContext> options)
            : base(options)
        {
        }

        public DbSet<FeatureRequestAPI.Models.FeatureRequestItem> FeatureRequestItem { get; set; }
    }
}
