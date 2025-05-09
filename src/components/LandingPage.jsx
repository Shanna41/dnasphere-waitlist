
import { Link } from "react-router-dom";
import '../styles/LandingPage.css';
import healthImage2 from "../assets/images/healthImage2.jpg";
import healthImage1 from "../assets/images/healthImage1.jpg";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>DNA Sphere: Personalized Wellness Rooted in Your Biology</h1>
        <p>
          DNA Sphere is a privacy-first wellness platform designed for individuals managing chronic conditions. It empowers you with AI-driven insights, personalized meal plans, and expert support—built on your unique biological data and protected with secure, encrypted technology.
        </p>

        <div className="cta-buttons">
          <Link to="/waitlist">
            <button className="cta-button">Join Our Waitlist</button>
          </Link>
        </div>
      </header>

      <section className="image-container">
        <img src={healthImage2} alt="A colorful plate of fresh fruits and vegetables, promoting healthy eating" />
      </section>

      <section className="features-section">
        <h2>Features That Make DNA Sphere Unique</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Privacy-Focused DNA Insights</h3>
            <p>Your DNA data is encrypted with Zero-Knowledge Proofs (ZKPs) and securely stored on the Aleo blockchain—giving you full control over your health information.</p>
          </div>

          <div className="feature-card">
            <h3>Customizable Meal Plans</h3>
            <p>Enjoy personalized meal plans, recipes, and shopping lists tailored to your health needs, dietary preferences, and DNA insights. Easily swap ingredients to fit your lifestyle!</p>
          </div>

          <div className="feature-card">
            <h3>Local Delivery & Smart Shopping Lists</h3>
            <p>Automatically generate shopping lists based on your meal selections and connect with local delivery services for fresh, seasonal produce.</p>
          </div>

          <div className="feature-card">
            <h3>Curated Health & Nutrition Insights</h3>
            <p>Access personalized articles and expert-backed nutrition tips from trusted genomics and wellness research institutions—designed to support your health journey.</p>
          </div>

          <div className="feature-card">
            <h3>Find a Trusted Practitioner</h3>
            <p>Explore a directory of vetted functional medicine providers ready to support your chronic disease management and overall health journey.</p>
          </div>

          <div className="feature-card">
            <h3>AI-Powered Health Assistant</h3>
            <p>DNA Sphere’s AI chatbot helps you understand your meal plans, provides nutritional insights, and connects you with trusted experts when needed.</p>
          </div>
        </div>
      </section>

      <section className="image-container">
        <img src={healthImage1} alt="Purple flowers" />
      </section>

      <section className="cta-section">
        <h2>Take Control of Your Health</h2>
        <p>
          DNA Sphere helps you take control of chronic health challenges with AI-powered insights, personalized meal plans based on your de-identifiable health markers, and access to trusted wellness experts. Discover how your biology can guide you to better health—on your terms.
        </p>

        <Link to="/waitlist">
          <button className="cta-button">Join the Waitlist</button>
        </Link>
      </section>

      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-section">
            <p>&copy; 2025 DNA Sphere LLC&trade;. All rights reserved.</p>
          </div>
          <div className="footer-section">
            <div className="footer-links">
              <Link to="/terms">Terms</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/disclaimer-modal">Disclaimer</Link>
            </div>
          </div>
         {/* <div className="footer-section">
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter" aria-hidden="true"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram" aria-hidden="true"></i></a>
            </div>
          </div> */}
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
