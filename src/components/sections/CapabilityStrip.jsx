const items = ["Revit BIM", "CAD Documentation", "Shop Drawings", "Interior Design", "Project Delivery", "FF&E Solutions"];

export default function CapabilityStrip() {
  return (
    <section className="strip dark" aria-label="Capabilities">
      <div className="strip-track mono">
        {[...items, ...items, ...items, ...items].map((t, i) => <span key={i}>{t}<b>+</b></span>)}
      </div>
    </section>
  );
}
