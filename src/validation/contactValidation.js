export const validateContactForm = (formData) => {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "Name is required";
  }

  if (!formData.company.trim()) {
    errors.company = "Company name is required";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Enter a valid email address";
  }

  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required";
  }

  if (!formData.projectType) {
    errors.projectType = "Please select a project type";
  }

  if (!formData.requiredService) {
    errors.requiredService = "Please select a required service";
  }

  if (!formData.message.trim()) {
    errors.message = "Please enter your project details";
  }

  if (!formData.consent) {
    errors.consent = "Please confirm that you agree to be contacted";
  }

  return errors;
};