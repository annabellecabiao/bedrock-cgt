export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <h3>Bedrock Consumer Goods Trading</h3>
        <p>Your trusted importer of premium wines and olive oils.</p>
      </div>

      <div className="footer-contact">
        <p>Business Address: Valencia, Spain</p>
        <p>Phone: +34 XXX XXX XXX</p>
        <p>Email: info@bedrockcgt.com</p>
      </div>

      <div className="footer-social">
        <p>Follow us:</p>
        <ul>
          <li>Facebook</li>
          <li>WhatsApp</li>
          <li>Telegram</li>
          <li>Instagram</li>
          <li>YouTube</li>
        </ul>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Bedrock CGT. All Rights Reserved.
      </p>
    </footer>
  );
}
