using System;
using System.Collections.Generic;
using System.Linq;
using cm.ui.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace cm.ui.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VmController : ControllerBase
    {
        private int _vmCount;
        private readonly IMemoryCache _cache;
        private static readonly Random rnd = new Random();
        private readonly string[] statuses = { "stopped", "running", "paused", "error" };
        private readonly string[] providers = { "aws", "azure", "openstack" };


        public VmController(IMemoryCache memoryCache)
        {
            _cache = memoryCache;

            if (_cache.TryGetValue("vms", out List<Vm> vmList))
            {
                return;
            }

            vmList = new List<Vm>();

            for (var i = 0; i < 4000; i++)
            {
                vmList.Add(getRandomVm());
            }

            _cache.Set("vms", vmList);
        }

        // GET: api/Vm
        [HttpGet]
        public IEnumerable<Vm> Get(string cloud = null)
        {
            var vms = _cache.Get<List<Vm>>("vms");

            return string.IsNullOrEmpty(cloud)
                ? vms
                : vms.Where(vm => vm.provider == cloud);
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
                status = statuses.OrderBy(s => rnd.NextDouble()).First(),
                provider = providers.OrderBy(p => rnd.NextDouble()).First()
            };
        }
    }
}
