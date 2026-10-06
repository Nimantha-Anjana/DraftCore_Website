const SectionLabel = ({ number, children }) => {
	return (
		<div className="section-label">
			<span className="section-number">{number}</span>
			<span>{children}</span>
			<span className="section-label-line" aria-hidden="true" />
		</div>
	);
};

export default SectionLabel;
