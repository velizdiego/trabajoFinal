import Article from "./Article";
import Articleb from "./Articleb";
import Articlec from "./Articlec";

const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <h1 className="visually-hidden">Features examples</h1>
            <div className="container px-4 py-5" id="featured-3">
              <h2 className="pb-2 border-bottom" />
              <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <Article
                  icon="bi bi-credit-card"
                />
                <Articleb
                  icon="bi bi-gift-fill"
                />
                <Articlec
                  icon="bi bi-person-circle"
                />
                <div className="b-example-divider" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-body-primary">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-body-primary">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-body-primary">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-body-primary">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-body-primary">
              About
            </a>
          </li>
        </ul>
        <p className="text-center text-body-primary">© 2023 Company, Inc</p>
      </footer>
    </>

  );
}


export default Footer;