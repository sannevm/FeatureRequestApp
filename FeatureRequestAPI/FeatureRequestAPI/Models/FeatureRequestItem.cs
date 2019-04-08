using Microsoft.AspNetCore.Server.Kestrel.Internal.System.Collections.Sequences;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FeatureRequestAPI.Models
{
    public class FeatureRequestItem
    {
        [Key]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Comment { get; set; }
        public List<String> Comments = new List<String>();
        public int NumberOfVotes { get; set; }
        public Boolean IsDone { get; set; }
        public Boolean AddedToBacklog { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime LastEditDate { get; set; }
        
        public FeatureRequestItem()
        {
            this.CreationDate = DateTime.Now;
        }
    }
}
