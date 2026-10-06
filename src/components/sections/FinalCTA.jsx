import Button from "../common/Button";

export default function FinalCTA() {
  return (
    <section className="cta grid-bg">
      <div className="wrap">
        <span className="tag">Start a conversation</span>
        <h2 className="display">Have a project <em>in mind?</em></h2>
        <p className="lede">Tell us about the package, the stage and the deadline. We will come back with the right team and a clear way forward.</p>
        <Button to="/contact" variant="red">Discuss your project</Button>
      </div>
    </section>
  );
}
