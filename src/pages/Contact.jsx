import { useState } from "react";
import Swal from "sweetalert2";
import PageHero from "../components/common/PageHero";
import services from "../data/services";

const empty = { name: "", company: "", email: "", phone: "", service: "", location: "", message: "", consent: false };
const next = ["We read your brief and the stage you are at.", "We reply with questions or a proposed scope.", "We agree the team, programme and standards, then begin."];

export default function Contact() {
  const [f, setF] = useState(empty);
  const change = (e) => {
    const { name, value, type, checked } = e.target;
    setF((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };
  const warn = (title, text) => Swal.fire({ icon: "warning", title, text, confirmButtonColor: "#14161a" });

  const submit = (e) => {
    e.preventDefault();
    if (!f.name.trim()) return warn("Name required", "Please enter your name.");
    if (!/^\S+@\S+\.\S+$/.test(f.email)) return warn("Valid email required", "Please enter a valid email address.");
    if (!f.service) return warn("Service required", "Please select the service you need.");
    if (!f.consent) return warn("Consent required", "Please confirm that DraftCore can contact you.");
    const body = `Name: ${f.name}\nCompany: ${f.company}\nEmail: ${f.email}\nPhone: ${f.phone}\nService: ${f.service}\nLocation: ${f.location}\n\n${f.message}`;
    window.location.href = `mailto:info@draftcoresolutions.com?subject=${encodeURIComponent("Project enquiry: " + f.service)}&body=${encodeURIComponent(body)}`;
    Swal.fire({ icon: "success", title: "Almost there", text: "Your email app has opened with the enquiry. Press send to complete it.", confirmButtonColor: "#14161a" });
  };

  const field = (label, name, props = {}) => (
    <label className="fg">
      <span className="mono">{label}</span>
      <input name={name} value={f[name]} onChange={change} {...props} />
    </label>
  );

  return (
    <>
      <PageHero sheet="A-06" label="Contact" tag="Contact DraftCore" title={<>Let us discuss <em>your project.</em></>}
        lede="Share the package, the stage and the deadline. The more we know, the more useful our first reply." />
      <section className="sec">
        <div className="wrap contact-grid">
          <aside>
            <span className="tag">Direct</span>
            <div className="cdet">
              <a href="mailto:info@draftcoresolutions.com"><i className="bi bi-envelope" /> info@draftcoresolutions.com</a>
              <a href="tel:+94714449070"><i className="bi bi-telephone" /> +94 71 444 9070</a>
            </div>
            <h3 className="mono sub">What happens next</h3>
            <ol className="next">{next.map((n, i) => <li key={n}><span className="mono">0{i + 1}</span>{n}</li>)}</ol>
          </aside>
          <form className="form" onSubmit={submit} noValidate>
            <div className="frow">{field("Name *", "name", { placeholder: "Your name" })}{field("Company", "company", { placeholder: "Company name" })}</div>
            <div className="frow">{field("Email *", "email", { type: "email", placeholder: "you@company.com" })}{field("Phone / WhatsApp", "phone", { type: "tel", placeholder: "+94..." })}</div>
            <label className="fg">
              <span className="mono">Service needed *</span>
              <select name="service" value={f.service} onChange={change}>
                <option value="">Select a service</option>
                {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
              </select>
            </label>
            {field("Project location", "location", { placeholder: "City / country" })}
            <label className="fg">
              <span className="mono">Project details</span>
              <textarea name="message" rows="5" value={f.message} onChange={change} placeholder="Scope, stage, drawings you already have, deadline..." />
            </label>
            <label className="consent">
              <input type="checkbox" name="consent" checked={f.consent} onChange={change} />
              <span>I agree to be contacted about this enquiry.</span>
            </label>
            <button type="submit" className="btn btn-ink">Send project details <i className="bi bi-arrow-up-right" /></button>
          </form>
        </div>
      </section>
    </>
  );
}
