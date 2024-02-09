import "./styles/headerthree.css";

const NavigationBar = () => {
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
      <h3 className="link-text">W I N N Y</h3>
        <nav className="nav">
          <ul className="nav-content">
            <li className="nav-list">
              <a href="/" className="link-item active">
                <i className="bx bxs-home link-icon"></i>
                <span className="link-textt">Home</span>
              </a>
            </li>
            <li className="nav-list">
              <a href="/feature" className="link-item">
                <i className="bx bxs-caret-right-square link-icon"></i>
                <span className="link-textt">Features</span>
              </a>
            </li>
            <li className="nav-list">
              <a href="/port" className="link-item">
                <i className="bx bxs-bar-chart-square link-icon"></i>
                <span className="link-textt">Portfolio</span>
              </a>
            </li>
            <li className="nav-list">
              <a href="/resu" className="link-item">
                <i className="bx bxs-message-rounded link-icon"></i>
                <span className="link-textt">Experince</span>
              </a>
            </li>
            <li className="nav-list">
              <a href="/con" className="link-item">
                <i className="bx bxs-user link-icon"></i>
                <span className="link-textt">Contact</span>
              </a>
            </li>
            <span className="indicatorc"></span>
          </ul>
        </nav>
      </body>
    </html>
  );
};

export default NavigationBar;