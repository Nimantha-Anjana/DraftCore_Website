export default function SectionTitle({ tag, children, aside }) {
  return (
    <div className="sh">
      <div>
        {tag && <span className="tag">{tag}</span>}
        <h2 className="display">{children}</h2>
      </div>
      {aside}
    </div>
  );
}
