using FeatureRequestAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FeatureRequestAPI.ViewModels
{
    public class AppUserViewModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public List<FeatureRequestItem> FeatureRequestItems { get; set; }

    }
}
