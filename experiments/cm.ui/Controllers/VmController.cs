using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using cm.ui.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace cm.ui.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VmController : ControllerBase
    {
        private int _vmCount = 0;
        private readonly IMemoryCache _cache;
        private static Random rnd = new Random();
        private string[] statuses = new[] {"stopped", "running", "paused"};


        public VmController(IMemoryCache memoryCache)
        {
            _cache = memoryCache;

            if (!_cache.TryGetValue("vms", out List<Vm> vmList))
            {
                vmList = new List<Vm>();
                for (var i = 0; i < 4000; i++)
                {
                    vmList.Add(getRandomVm());
                }
                _cache.Set("vms", vmList);
            }
        }

        // GET: api/Vm
        [HttpGet]
        public IEnumerable<Vm> Get()
        {
            return _cache.Get<List<Vm>>("vms");
        }

        // GET: api/Vm/5
        [HttpGet("{id}", Name = "Get")]
        public Vm Get(int id)
        {
            return getRandomVm();
        }

        // POST: api/Vm
        [HttpPost]
        public void Post([FromBody] Vm vm)
        {
        }

        // PUT: api/Vm/5
        [HttpPut("{id}")]
        public void Put(string id, [FromBody] Vm value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
        }

        private Vm getRandomVm()
        {
            _vmCount++;
            
            return new Vm
            {
                name = $"vm-{_vmCount}",
                status = statuses.OrderBy(s=>rnd.NextDouble()).First()
            };
        }
    }
}
