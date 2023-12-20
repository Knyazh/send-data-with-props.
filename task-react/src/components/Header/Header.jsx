import React from 'react';
import './header.css';

const Header = (props) => {
  return (
    <header>
      <div className="header">

      <div className="logo">
        <a href="">{props.data}</a>
      </div>
      <nav>
        {props.links.length > 0
          ? props.links.map((url, index) => (
              <a key={index} href="http://">
                {url}
              </a>
            ))
          : 'No data ....'}
      </nav>
      </div>
    </header>
  );
};

export default Header;
