export default function PageHero({ sheet, tag, title, lede, label }) {
  return (
    <section className="phero grid-bg">
      <div className="wrap phero-in">
        <div>
          <span className="tag">{tag}</span>
          <h1 className="display">{title}</h1>
          {lede && <p className="lede">{lede}</p>}
        </div>
        <dl className="tb" aria-hidden="true">
          <div><dt>Sheet</dt><dd>{sheet}</dd></div>
          <div><dt>Title</dt><dd>{label}</dd></div>
          <div><dt>Scale</dt><dd>NTS</dd></div>
          <div><dt>Rev</dt><dd>A</dd></div>
        </dl>
      </div>
    </section>
  );
}
