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

        [Required]
        [StringLength(maximumLength: 180, MinimumLength = 5, ErrorMessage = "Length must be between 5 to 180")]
        public string Name { get; set; }

        [Required]
        [StringLength(maximumLength: 2000, MinimumLength = 5, ErrorMessage = "Length must be between 5 to 2000")]
        public string Description { get; set; }

        [StringLength(maximumLength: 2000, MinimumLength = 5, ErrorMessage = "Length must be between 5 to 2000")]
        public string Comment { get; set; }
        public List<String> Comments = new List<String>();
        public int NumberOfVotes { get; set; }
        public Boolean IsDone { get; set; }
        public Boolean AddedToBacklog { get; set; }
        private DateTime CreationDate { get; set; }
        public DateTime LastEditDate { get; set; }

        public FeatureRequestItem()
        {
            this.CreationDate = DateTime.Now;
        }
    }
}
