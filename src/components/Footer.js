import sign from '../assets/images/asset/signiture.png';
import { FaGithub } from 'react-icons/fa6';
import { TiHeart } from 'react-icons/ti';

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-left">
          <img src={sign} alt="footer sign" />
        </div>
        <div className="footer-right">
          <p>
            <span>
              made by <b>uni</b> with{' '}
            </span>
            <i className="icon-heart">
              <TiHeart />
            </i>
          </p>
          <ul>
            <li>
              <a href="git" target="_blank">
                <i className="icon-git">
                  <FaGithub />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
