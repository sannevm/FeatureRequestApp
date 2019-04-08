using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FeatureRequestAPI.Models
{
    public class AppUser : IdentityUser
    {
        [Required]
        [RegularExpression(@"^[a-zA-Z]+\s*[a-zA-Z]*$", ErrorMessage = "Use letters only please.")]
        [StringLength(maximumLength: 25, MinimumLength = 2, ErrorMessage = "Length must be between 2 to 25")]
        public string FirstName { get; set; }

        [Required]
        [RegularExpression(@"^[a-zA-Z]+\s*[a-zA-Z]*$", ErrorMessage = "Use letters only please.")]
        [StringLength(maximumLength: 25, MinimumLength = 2, ErrorMessage = "Length must be between 2 to 25")]
        public string LastName { get; set; }
        public List<FeatureRequestItem> FeatureRequestItems { get; set; }

    }
}
