import { useState } from "react";
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // simulazione invio dati
    console.log("Dati inviati:", formData);

    // reset del form
    setFormData({ name: "", email: "", message: "" });

    setIsSubmitting(false);
  };

  return (
    <section id="contact">
      <h2>Contattami</h2>
      <p>Compila il modulo qui sotto e ti rispondero al più presto.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="Il tuo nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="La tua email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Scrivi qui il tuo messaggio..."
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Invio in corso..." : "Invia messaggio"}
        </button>
      </form>
    </section>
  );
}

export default ContactForm;