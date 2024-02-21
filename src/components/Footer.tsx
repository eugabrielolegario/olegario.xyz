import { IFooter } from '../interfaces/Footer';

function Footer({ linkedin, linkedinURL, email, emailURL }: IFooter) {
  return (
    <footer className='footer-container'>  
      <div>
        <ul>
          <li>
            <a href={linkedinURL} target='_blank' rel='noopener noreferrer'>{linkedin}</a>
          </li>
          <li>
            <a href={emailURL} target='_blank' rel='noopener noreferrer'>{email}</a>
          </li>
          <li>
            <a href={lattesURL} target='_blank' rel='noopener noreferrer'>{;attes}</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
