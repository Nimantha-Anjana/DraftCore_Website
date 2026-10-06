import { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    jobTitle: "",
    email: "",
    phone: "",
    projectType: "",
    service: "",
    location: "",
    startDate: "",
    deliverables: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Name Required",
        text: "Please enter your name.",
      });

      return;
    }

    if (!formData.email.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Email Required",
        text: "Please enter your email address.",
      });

      return;
    }

    if (!formData.service) {
      Swal.fire({
        icon: "warning",
        title: "Service Required",
        text: "Please select the required service.",
      });

      return;
    }

    if (!formData.consent) {
      Swal.fire({
        icon: "warning",
        title: "Consent Required",
        text: "Please confirm that DraftCore can contact you.",
      });

      return;
    }

    Swal.fire({
      icon: "success",
      title: "Enquiry Ready",
      text: "Your enquiry form has been validated successfully.",
      confirmButtonText: "Continue",
    });
  };

  return (
    <main>

      <section className="page-hero">
        <div className="container-dc">

          <span className="eyebrow">
            Contact DraftCore
          </span>

          <h1>
            Let's discuss
            <br />
            your project.
          </h1>

        </div>
      </section>

      <section className="section">

        <div className="container-dc">

          <div className="contact-grid">

            <div className="contact-info">

              <span className="eyebrow">
                Start a conversation
              </span>

              <h2>
                Tell us what
                you're building.
              </h2>

              <p>
                Share your project requirements,
                documentation needs or technical
                support requirements.
              </p>

              <div className="contact-details">

                <a href="mailto:info@draftcoresolutions.com">
                  info@draftcoresolutions.com
                </a>

                <a href="tel:+94714449070">
                  +94 71 444 9070
                </a>

              </div>

            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <div className="form-group">
                  <label>Name *</label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label>Company</label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                  />
                </div>

              </div>

              <div className="form-row">

                <div className="form-group">
                  <label>Email *</label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                  />
                </div>

                <div className="form-group">
                  <label>Phone / WhatsApp</label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+94..."
                  />
                </div>

              </div>

              <div className="form-group">

                <label>Required Service *</label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >

                  <option value="">
                    Select a service
                  </option>

                  <option value="bim">
                    BIM Modelling
                  </option>

                  <option value="cad">
                    CAD Documentation
                  </option>

                  <option value="shop-drawings">
                    Shop Drawings
                  </option>

                  <option value="interior-design">
                    Interior Design
                  </option>

                  <option value="project-delivery">
                    Project Delivery
                  </option>

                  <option value="ffe">
                    FF&E Solutions
                  </option>

                </select>

              </div>

              <div className="form-group">

                <label>Project Location</label>

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Project location"
                />

              </div>

              <div className="form-group">

                <label>Project Details</label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell us about your project..."
                />

              </div>

              <label className="consent">

                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                />

                <span>
                  I consent to being contacted regarding
                  this enquiry.
                </span>

              </label>

              <button
                type="submit"
                className="dc-button dc-button-primary"
              >
                Send Project Details
                <i className="bi bi-arrow-up-right"></i>
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Contact;