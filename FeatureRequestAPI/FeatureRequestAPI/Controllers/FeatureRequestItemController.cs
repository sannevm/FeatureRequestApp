using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FeatureRequestAPI.Models;
using Microsoft.AspNetCore.Authorization;

namespace FeatureRequestAPI.Controllers
{
    [Authorize(Policy = "ApiUser")]
    [Produces("application/json")]
    [Route("api/FeatureRequestItem")]
    public class FeatureRequestItemController : Controller
    {
        private readonly FeatureRequestAPIContext _context;

        public FeatureRequestItemController(FeatureRequestAPIContext context)
        {
            _context = context;
        }

        // GET: api/FeatureRequestItem
        [HttpGet]
        public IEnumerable<FeatureRequestItem> GetFeatureRequestItem()
        {
            return _context.FeatureRequestItem;
        }

        // GET: api/FeatureRequestItem/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetFeatureRequestItem([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var featureRequestItem = await _context.FeatureRequestItem.SingleOrDefaultAsync(m => m.Id == id);

            if (featureRequestItem == null)
            {
                return NotFound();
            }

            return Ok(featureRequestItem);
        }

        // PUT: api/FeatureRequestItem/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFeatureRequestItem([FromRoute] string id, [FromBody] FeatureRequestItem featureRequestItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != featureRequestItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(featureRequestItem).State = EntityState.Modified;

            try
            {
                featureRequestItem.LastEditDate = DateTime.Now;
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FeatureRequestItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/FeatureRequestItem
        [HttpPost]
        public async Task<IActionResult> PostFeatureRequestItem([FromBody] FeatureRequestItem featureRequestItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.FeatureRequestItem.Add(featureRequestItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFeatureRequestItem", new { id = featureRequestItem.Id }, featureRequestItem);
        }

        // DELETE: api/FeatureRequestItem/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFeatureRequestItem([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var featureRequestItem = await _context.FeatureRequestItem.SingleOrDefaultAsync(m => m.Id == id);
            if (featureRequestItem == null)
            {
                return NotFound();
            }

            _context.FeatureRequestItem.Remove(featureRequestItem);
            await _context.SaveChangesAsync();

            return Ok(featureRequestItem);
        }

        private bool FeatureRequestItemExists(string id)
        {
            return _context.FeatureRequestItem.Any(e => e.Id == id);
        }
    }
}