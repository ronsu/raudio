using System.Collections.Generic;

namespace Homeautomation.Models
{
    public class TestModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class TestModelManager
    {
        private List<TestModel> _testModels;

        public TestModelManager()
        {
            _testModels = new List<TestModel>
            {
                new TestModel { Id=1, Name="Eka1" },
                new TestModel { Id=2, Name="Eka2" },
                new TestModel { Id=3, Name="Eka3" },
                new TestModel { Id=4, Name="Eka4" },
                new TestModel { Id=5, Name="Eka5" },
            };
        }

        public IEnumerable<TestModel> GetAll()
        {
            return _testModels;
        }

        public TestModel GetById(int id)
        {
            return _testModels.Find(t => t.Id==id);
        }
    }

}
