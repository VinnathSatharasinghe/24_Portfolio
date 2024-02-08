// Import React (make sure you have React installed)
import React, { useEffect } from 'react';

// Import CSS (make sure you have the corresponding CSS file imported or included in your project)
import './header.css';

// Functional component representing the Navigation Bar
const NavigationBar = () => {

    useEffect(() => {
        const linkItems = document.querySelectorAll(".link-item");
    
        linkItems.forEach((linkItem, index) => {

          linkItem.addEventListener("click", () => {
            
            document.querySelector(".active").classList.remove("active");
            linkItem.classList.add("active");
            const indicator = document.querySelector(".indicator");
            indicator.style.left = `${index * 95 + 48}px`;
          });
    
          // Cleanup event listeners when component unmounts
          return () => {
            linkItem.removeEventListener("click");
          };
        });
      }, []); // Empty dependency array ensures that this effect runs once when the component mounts
    


  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Navigation Bar with Indicator</title>
        {/* Boxicons CSS */}
        <link
          href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <nav className="nav">
          <ul className="nav-content">
            <li className="nav-list">
              <a href="#ww" className="link-item active">
                <i className="bx bxs-home link-icon"></i>
                <span className="link-text">Home</span>
              </a>
            </li>
            <li className="nav-list">
              <a href="#w" className="link-item">
                <i className="bx bxs-caret-right-square link-icon"></i>
                <span className="link-text">Content</span>
              </a>
            </li>
            <li className="nav-list">
              <a href="#ww" className="link-item">
                <i className="bx bxs-bar-chart-square link-icon"></i>
                <span className="link-text">Analytics</span>
              </a>
            </li>
            <li className="nav-list">
              <a href="#ww" className="link-item">
                <i className="bx bxs-message-rounded link-icon"></i>
                <span className="link-text">Comments</span>
              </a>
            </li>
            <li className="nav-list">
              <a href="#ww" className="link-item">
                <i className="bx bxs-user link-icon"></i>
                <span className="link-text">Profile</span>
              </a>
            </li>
            <span className="indicator"></span>
          </ul>
        </nav>

        {/* JavaScript */}
        <script src="./test.js"></script>
      </body>
    </html>
  );
};

export default NavigationBar;