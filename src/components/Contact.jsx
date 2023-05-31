import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

import "styles/Contact.scss";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-title">
          <p>Contact</p>
          <h3>Hit me up! 👇</h3>
        </div>
        <div className="contact-icons-container">
          <a className="contact-icon" href="mailto:omarhamid664@gmail.com">
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
          </a>
          <h3>Mail</h3>
          <a href="mailto:omarhamid664@gmail.com">omarhamid664@gmail.com</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
