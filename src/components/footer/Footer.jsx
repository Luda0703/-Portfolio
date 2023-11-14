import instagram from './../../img/icons/instagram.svg';
import linkedin from './../../img/icons/linkedin.svg';
import gitHub from './../../img/icons/gitHub.svg';

import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a target='_blank' rel="noreferrer" href="https://instagram.com/liudmilanikitenko4730?igshid=MWQ5OXltMDNmb3hucQ==">
                <img src={instagram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a target='_blank' rel="noreferrer" href="https://github.com/Luda0703">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/ludmilanikitenko/">
                <img src={linkedin} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2023 Ukraine</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
