using System.Collections.Generic;
using Homeautomation.Models;
using Microsoft.AspNet.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Homeautomation.API.Controllers
{
    [Route("api/[controller]")]
    public class MyTestController : Controller
    {
        // GET: api/mytest
        [HttpGet]
        public IEnumerable<TestModel> Get()
        {
            var manager = new TestModelManager();
            return manager.GetAll();
        }

        // GET api/mytest/5
        [HttpGet("{id}")]
        public TestModel Get(int id)
        {
            var manager = new TestModelManager();
            return manager.GetById(id);
        }

        //// POST api/values
        //[HttpPost]
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT api/values/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/values/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
