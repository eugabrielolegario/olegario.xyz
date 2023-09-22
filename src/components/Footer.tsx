import { IFooter } from '../interfaces/Footer';

function Footer({ linkedin, linkedinURL, email, emailURL }: IFooter) {
  return (
    <footer className='footer-container'>  
      <div>
        <ul>
          <li>
            <a href={linkedinURL}>{linkedin}</a>
          </li>
          <li>
            <a href={emailURL}>{email}</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
