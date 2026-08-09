// Roberts Oxygen — concept redesign
// Location data transcribed directly from the live robertsoxygen.com/locations page (57 branches, 9 states).

const LOCATIONS = [
  { city: "Bridgeville", state: "DE", addr: "16223 Sussex Hwy", zip: "19933", phone: "3023379666", phoneDisplay: "(302) 337-9666" },

  { city: "Fort Lauderdale", state: "FL", addr: "245 SW 32nd Street", zip: "33315", phone: "7547553227", phoneDisplay: "(754) 755-3227" },
  { city: "Jacksonville", state: "FL", addr: "332 Drake Street", zip: "32254", phone: "9043954215", phoneDisplay: "(904) 395-4215" },
  { city: "Lakeland", state: "FL", addr: "2950 Parkway Street", zip: "33811", phone: "8636441425", phoneDisplay: "(863) 644-1425" },
  { city: "Miami", state: "FL", addr: "7840 NW 53rd Street", zip: "33166", phone: "7867451024", phoneDisplay: "(786) 745-1024" },
  { city: "Orlando", state: "FL", addr: "100 Thorpe Road", zip: "32824", phone: "4078412040", phoneDisplay: "(407) 841-2040" },
  { city: "Orlando", state: "FL", addr: "1105 S Division Ave", zip: "32805", phone: "3214770553", phoneDisplay: "(321) 477-0553" },
  { city: "West Palm Beach", state: "FL", addr: "7709 Central Industrial Drive", zip: "33404", phone: "5618485520", phoneDisplay: "(561) 848-5520" },

  { city: "Savannah", state: "GA", addr: "30 West Chatham Court", zip: "31408", phone: "9123195780", phoneDisplay: "(912) 319-5780" },

  { city: "Annapolis", state: "MD", addr: "1801 George Avenue #B", zip: "21401", phone: "4102635506", phoneDisplay: "(410) 263-5506" },
  { city: "Baltimore", state: "MD", addr: "1601 South Caton Avenue", zip: "21227", phone: "4106445015", phoneDisplay: "(410) 644-5015" },
  { city: "Bladensburg", state: "MD", addr: "4246 Kenilworth Avenue #A", zip: "20710", phone: "3019275600", phoneDisplay: "(301) 927-5600" },
  { city: "Cockeysville", state: "MD", addr: "10540 York Road #H", zip: "21030", phone: "4106831783", phoneDisplay: "(410) 683-1783" },
  { city: "Cumberland", state: "MD", addr: "11950 Upper Potomac Industrial Park Street", zip: "21502", phone: "2409799366", phoneDisplay: "(240) 979-9366" },
  { city: "Dundalk", state: "MD", addr: "4000 North Point Boulevard", zip: "21222", phone: "4105227440", phoneDisplay: "(410) 522-7440" },
  { city: "Edgewood", state: "MD", addr: "2014 Pulaski Highway", zip: "21040", phone: "4106763900", phoneDisplay: "(410) 676-3900" },
  { city: "Essex", state: "MD", addr: "7020F Golden Ring Road, Rosedale", zip: "21237", phone: "4105747501", phoneDisplay: "(410) 574-7501" },
  { city: "Frederick", state: "MD", addr: "7309 E Grove Road", zip: "21704", phone: "3016960044", phoneDisplay: "(301) 696-0044" },
  { city: "Gaithersburg", state: "MD", addr: "17011 Railroad Street", zip: "20877", phone: "3019488100", phoneDisplay: "(301) 948-8100" },
  { city: "Glen Burnie", state: "MD", addr: "706 Crain Highway North #D", zip: "21061", phone: "4107681175", phoneDisplay: "(410) 768-1175" },
  { city: "Hagerstown", state: "MD", addr: "916 South Potomac Street", zip: "21740", phone: "3017916800", phoneDisplay: "(301) 791-6800" },
  { city: "Laurel", state: "MD", addr: "13309 Baltimore Avenue", zip: "20707", phone: "3014701431", phoneDisplay: "(301) 470-1431" },
  { city: "Marlow Heights", state: "MD", addr: "4811 Stamp Road", zip: "20748", phone: "3018996400", phoneDisplay: "(301) 899-6400" },
  { city: "Rockville", state: "MD", addr: "15830 Redland Road", zip: "20855", phone: "3019482205", phoneDisplay: "(301) 948-2205" },
  { city: "Salisbury", state: "MD", addr: "2002 N. Salisbury Blvd", zip: "21801", phone: "4107499353", phoneDisplay: "(410) 749-9353" },
  { city: "Westminster", state: "MD", addr: "359 Manchester Road", zip: "21157", phone: "4108400400", phoneDisplay: "(410) 840-0400" },

  { city: "Middlesex", state: "NJ", addr: "114 Egel Avenue", zip: "08846", phone: "9732715351", phoneDisplay: "(973) 271-5351" },
  { city: "Pleasantville", state: "NJ", addr: "745 West Delilah Road", zip: "08232", phone: "6094848181", phoneDisplay: "(609) 484-8181" },

  { city: "Bessemer City", state: "NC", addr: "1206 Edgewood Rd", zip: "28016", phone: "7046299898", phoneDisplay: "(704) 629-9898" },
  { city: "Charlotte", state: "NC", addr: "4100 Chesapeake Drive", zip: "28216", phone: "7043713030", phoneDisplay: "(704) 371-3030" },
  { city: "Greensboro", state: "NC", addr: "8311 Triad Drive", zip: "27409", phone: "3366646565", phoneDisplay: "(336) 664-6565" },
  { city: "Hickory", state: "NC", addr: "2341 US Hwy 70 SW", zip: "28602", phone: "8283304107", phoneDisplay: "(828) 330-4107" },
  { city: "Monroe", state: "NC", addr: "1170 Curtis Street", zip: "28112", phone: "7047741799", phoneDisplay: "(704) 774-1799" },
  { city: "Raleigh", state: "NC", addr: "2200 Westinghouse Blvd Suite 106", zip: "27604", phone: "9193732138", phoneDisplay: "(919) 373-2138" },

  { city: "Bethlehem", state: "PA", addr: "1160 Win Drive", zip: "18017", phone: "4848969106", phoneDisplay: "(484) 896-9106" },
  { city: "Hanover", state: "PA", addr: "790 High Street", zip: "17331", phone: "7176345152", phoneDisplay: "(717) 634-5152" },
  { city: "Johnstown", state: "PA", addr: "125 Allison Drive", zip: "15904", phone: "8142666500", phoneDisplay: "(814) 266-6500" },
  { city: "Lancaster", state: "PA", addr: "3150 Hempland Road", zip: "17601", phone: "7173903009", phoneDisplay: "(717) 390-3009" },
  { city: "Philadelphia", state: "PA", addr: "1230 Macdade Boulevard", zip: "19023", phone: "6104611952", phoneDisplay: "(610) 461-1952" },
  { city: "Pleasant Gap", state: "PA", addr: "380 West College Ave", zip: "16823", phone: "8143593399", phoneDisplay: "(814) 359-3399" },
  { city: "West Chester", state: "PA", addr: "614 Westtown Road", zip: "19382", phone: "6107010700", phoneDisplay: "(610) 701-0700" },
  { city: "York", state: "PA", addr: "2121 Industrial Highway", zip: "17402", phone: "7174178900", phoneDisplay: "(717) 417-8900" },

  { city: "Columbia", state: "SC", addr: "140 Atlas Court", zip: "29209", phone: "8033340301", phoneDisplay: "(803) 334-0301" },
  { city: "North Charleston", state: "SC", addr: "3270 Associate Drive", zip: "29418", phone: "8437604000", phoneDisplay: "(843) 760-4000" },
  { city: "Rock Hill", state: "SC", addr: "1430 E. Main Street", zip: "29730", phone: "8036201456", phoneDisplay: "(803) 620-1456" },

  { city: "Charlottesville", state: "VA", addr: "770 Harris Street #101", zip: "22903", phone: "4342961615", phoneDisplay: "(434) 296-1615" },
  { city: "Chesapeake", state: "VA", addr: "1021 Executive Blvd #101", zip: "23320", phone: "7574361999", phoneDisplay: "(757) 436-1999" },
  { city: "Fairfax", state: "VA", addr: "2929 Eskridge Road #A", zip: "22031", phone: "7036985322", phoneDisplay: "(703) 698-5322" },
  { city: "Manassas", state: "VA", addr: "8607 Quarry Road", zip: "20110", phone: "7033690400", phoneDisplay: "(703) 369-0400" },
  { city: "Petersburg", state: "VA", addr: "2200 E. Washington St", zip: "23803", phone: "8047334944", phoneDisplay: "(804) 733-4944" },
  { city: "Portsmouth", state: "VA", addr: "3931 Garwood Ave", zip: "23701", phone: "7574877005", phoneDisplay: "(757) 487-7005" },
  { city: "Richmond", state: "VA", addr: "2117 North Hamilton Street", zip: "23230", phone: "8043531355", phoneDisplay: "(804) 353-1355" },
  { city: "Roanoke", state: "VA", addr: "2023 Salem Ave SW", zip: "24016", phone: "5409858686", phoneDisplay: "(540) 985-8686" },
  { city: "Springfield", state: "VA", addr: "7653 Fullerton Road", zip: "22153", phone: "7036445065", phoneDisplay: "(703) 644-5065" },
  { city: "Sterling", state: "VA", addr: "45000 Underwood Lane #M", zip: "20166", phone: "7034719586", phoneDisplay: "(703) 471-9586" },
  { city: "Waynesboro", state: "VA", addr: "716 North Bath Avenue", zip: "22980", phone: "5404490051", phoneDisplay: "(540) 449-0051" },
  { city: "Winchester", state: "VA", addr: "221 Brick Kiln Road", zip: "22601", phone: "5406621180", phoneDisplay: "(540) 662-1180" },
];

const STATE_NAMES = {
  DE: "Delaware", FL: "Florida", GA: "Georgia", MD: "Maryland", NJ: "New Jersey",
  NC: "North Carolina", PA: "Pennsylvania", SC: "South Carolina", VA: "Virginia"
};

const STATES = [...new Set(LOCATIONS.map(l => l.state))];

function directionsUrl(loc){
  const q = encodeURIComponent(`Roberts Oxygen, ${loc.addr}, ${loc.city}, ${loc.state} ${loc.zip}`);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

function locationCard(loc){
  return `
    <div class="location-card">
      <div class="loc-top">
        <span class="loc-city">${loc.city}</span>
        <span class="loc-state">${loc.state}</span>
      </div>
      <p class="loc-addr">${loc.addr}<br>${loc.city}, ${loc.state} ${loc.zip}</p>
      <div class="loc-actions">
        <a class="loc-action" href="tel:1${loc.phone}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2C9.5 22 2 14.5 2 6a2 2 0 0 1 2-2Z"/></svg>
          ${loc.phoneDisplay}
        </a>
        <a class="loc-action" href="${directionsUrl(loc)}" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l18-7-7 18-2.5-7.5L3 11Z"/></svg>
          Directions
        </a>
      </div>
    </div>`;
}

function renderChips(active){
  const chipsEl = document.getElementById("stateChips");
  const all = `<button class="state-chip${active===null?' is-active':''}" data-state="">All states</button>`;
  const rest = STATES.map(s =>
    `<button class="state-chip${active===s?' is-active':''}" data-state="${s}">${s}</button>`
  ).join("");
  chipsEl.innerHTML = all + rest;
  chipsEl.querySelectorAll(".state-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      activeState = btn.dataset.state || null;
      document.getElementById("locationSearch").value = "";
      renderChips(activeState);
      runFilter();
    });
  });
}

let activeState = null;

function runFilter(){
  const q = document.getElementById("locationSearch").value.trim().toLowerCase();
  const resultsEl = document.getElementById("locationsResults");
  const statusEl = document.getElementById("locationsStatus");

  let matches = LOCATIONS;

  if (activeState) {
    matches = matches.filter(l => l.state === activeState);
  }

  if (q) {
    matches = matches.filter(l =>
      l.city.toLowerCase().includes(q) ||
      l.zip.includes(q) ||
      l.state.toLowerCase() === q ||
      (STATE_NAMES[l.state] || "").toLowerCase().includes(q) ||
      l.addr.toLowerCase().includes(q)
    );
  }

  if (matches.length === 0) {
    resultsEl.innerHTML = `<div class="locations-empty">No branch matches “${q}”. Try a city, ZIP or state — or call (301) 315-9090 and we'll point you to the right one.</div>`;
  } else {
    resultsEl.innerHTML = matches.map(locationCard).join("");
  }

  const scope = activeState ? `in ${STATE_NAMES[activeState]}` : "across 9 states";
  statusEl.textContent = q || activeState
    ? `Showing ${matches.length} of 57 branches ${scope}`
    : `57 branches ${scope}. Search above, or filter by state.`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderChips(null);
  runFilter();
  document.getElementById("locationSearch").addEventListener("input", () => {
    if (document.getElementById("locationSearch").value.trim()) {
      // free text search overrides state filter scope but chip stays visually available
    }
    runFilter();
  });

  // nav toggle
  const navToggle = document.getElementById("navToggle");
  const mobilePanel = document.getElementById("mobilePanel");
  navToggle.addEventListener("click", () => {
    const open = mobilePanel.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // sticky header shadow state
  const header = document.getElementById("siteHeader");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // mobile action bar padding
  if (window.matchMedia("(max-width: 719px)").matches) {
    document.body.classList.add("has-mobile-bar");
  }
});
