
import "../styles/WaitlistForm.css";

const WaitlistForm = () => {
  return (
    <div className="waitlist-form-container">
      <h2>Join the DNA Sphere Waitlist</h2>
      <p>Be the first to access our personalized wellness platform.</p>

      <form
        name="waitlist"
        method="POST"
        data-netlify="true"
        action="/waitlist-success"
        className="waitlist-form"
        netlify-honeypot="bot-field"

      >
        <input type="hidden" name="form-name" value="waitlist" />
        <input type="text" name="bot-field" style={{ display: 'none' }} />

        <label>
          Name
          <input type="text" name="name" required />
        </label>

        <label>
          Email
          <input type="email" name="email" required />
        </label>

        <button type="submit">Join Waitlist</button>
      </form>
    </div>
  );
};

export default WaitlistForm;
