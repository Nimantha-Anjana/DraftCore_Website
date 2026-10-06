const SectionTitle = ({
  eyebrow,
  title,
  description,
  align = "left",
}) => {
  return (
    <div className={`section-heading section-heading-${align}`}>

      {eyebrow && (
        <div className="eyebrow">
          {eyebrow}
        </div>
      )}

      <h2 className="section-title">
        {title}
      </h2>

      {description && (
        <p className="section-description">
          {description}
        </p>
      )}

    </div>
  );
};

export default SectionTitle;