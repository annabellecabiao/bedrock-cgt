import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3>Bedrock Consumer Goods Trading</h3>
          <p>
            Built on stability and growth, Bedrock CGT imports premium goods with long-term value in mind.
          </p>
        </div>
        <div className="footer-contact">
          <p>Business Address: Valencia, Spain</p>
          <p>Phone: +34 XXX XXX XXX</p>
          <p>Email: info@bedrockcgt.com</p>
        </div>
        <div className="footer-social">
          <p>Follow us:</p>
          <div className="footer-social-icons">
            <span>Facebook</span>
            <span>WhatsApp</span>
            <span>Telegram</span>
            <span>Instagram</span>
            <span>YouTube</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Bedrock CGT. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

