const CLASS_MIN = 60; // default class length

function parseTime(s: string): number | null {
  const trimmed = s.trim();
  const spaceIdx = trimmed.lastIndexOf(" ");
  if (spaceIdx === -1) return null;
  const hm = trimmed.slice(0, spaceIdx);
  const ap = trimmed.slice(spaceIdx + 1).toUpperCase();
  const colonIdx = hm.indexOf(":");
  if (colonIdx === -1) return null;
  let h = parseInt(hm.slice(0, colonIdx), 10);
  const m = parseInt(hm.slice(colonIdx + 1), 10);
  if (isNaN(h) || isNaN(m)) return null;
  if (ap === "PM" && h !== 12) h += 12;
  if (ap === "AM" && h === 12) h = 0;
  return h * 60 + m;
}

function formatTime(minsTotal: number): string {
  // keep inside 0..1439 for wrapping (e.g., 11:30 PM + 60m => 12:30 AM)
  minsTotal = ((minsTotal % (24 * 60)) + 24 * 60) % (24 * 60);
  const h24 = Math.floor(minsTotal / 60);
  const m = minsTotal % 60;
  const ap = h24 >= 12 ? "PM" : "AM";
  const h12 = h24 % 12 || 12;
  const mm = m < 10 ? "0" + m : String(m);
  return h12 + ":" + mm + " " + ap;
}


export function displayLabel(
  t: string,
  durationMin: number = CLASS_MIN
): string {
  // If it's already a range or contains a dash, leave as-is (e.g., "Open Gym 10:00 AM–12:00 PM").
  if (t.indexOf("–") !== -1 || t.indexOf("-") !== -1) return t;
  const start = parseTime(t);
  if (start == null) return t; // non-time text; don't change
  const end = start + durationMin;
  return formatTime(start) + "–" + formatTime(end);
}
