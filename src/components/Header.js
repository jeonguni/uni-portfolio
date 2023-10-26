import { useState, useEffect } from 'react';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const useScroll = () => {
    setScrollPosition(document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', useScroll);
    console.log(scrollPosition);
  });
  return (
    <header className={scrollPosition > 50 ? 'on' : ''}>
      <div className="header-inner">
        <h1>Uni's</h1>
        <ul className="header-list">
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#profile">profile</a>
          </li>
          <li>
            <a href="#work">work</a>
          </li>
          <li>
            <a href="https://jeonguni-que.tistory.com/" target="_blank" rel="noopener noreferrer">
              blog
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
