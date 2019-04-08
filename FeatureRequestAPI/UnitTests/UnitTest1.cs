using FeatureRequestAPI.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace UnitTests
{
    [TestClass]
    public class UnitTest
    {
        //[TestMethod]
        //public void TestMethod1()
        //{
        //}

        [DataTestMethod]
        [DataRow(-1)]
        [DataRow(0)]
        [DataRow(1)]
        public void TestLengthStringFirstName(string firstName)
        {
            var result = AppUser.IsPrime(value);

            Assert.IsFalse(result, $"{value} should not be prime");
        }
    }
}
