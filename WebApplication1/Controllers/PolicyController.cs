using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Data;

namespace WebApplication1.Controllers
{
    [Route("policy")]
    [ApiController]
    public class PolicyController : ControllerBase
    {
        private readonly IPolicyRepository _policyRepository;

        public PolicyController(IPolicyRepository policyRepository)
        {
            _policyRepository = policyRepository;
        }

        [HttpGet]
        public IEnumerable<Policy> Get()
        {
            return _policyRepository.Get();
        }

        [HttpPost]
        public IEnumerable<Policy> Add(Policy policy)
        {
            _policyRepository.Add(policy);
            return _policyRepository.Get();
        }

        [HttpPut]
        public IEnumerable<Policy> Update([FromBody] Policy policy)
        {
            _policyRepository.Update(policy);
            return _policyRepository.Get();
        }

        [HttpDelete("{policyNumber}")]
        public IEnumerable<Policy> Delete(int policyNumber)
        {
            _policyRepository.Remove(policyNumber);
            return _policyRepository.Get();
        }
    }
}
