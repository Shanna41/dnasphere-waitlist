
import { Link } from "react-router-dom";
import "../styles/WaitlistForm.css";

const WaitlistSuccess = () => {
  return (
    <main className="waitlist-form-container" aria-live="polite">
      <h2>Thank You for Joining the Waitlist!</h2>
      <p>
        You're now one step closer to accessing personalized wellness rooted in your biology.
      </p>
      <p>You are free to leave the site or explore more when you're ready.</p>

      <Link to="/">
        <button className="cta-button" style={{ marginTop: "20px" }}>
          Return to Homepage
        </button>
      </Link>
    </main>
  );
};

export default WaitlistSuccess;
