import "../navbar/navbar.css";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo-box mt-1">
          <img src={require("../../media/logo.png")} />
        </div>
        <hr />
        <div className="mt-4 nav-box d-flex flex-row justify-content-center">
          <a
            href=""
            className="pb-3 link-dark text-decoration-none border-bottom border-danger border-2 text-center"
          >
            <h6>Youtube to Mp4</h6>
          </a>
          <a
            href=""
            className="link-dark text-decoration-none ms-4 text-center"
          >
            <h6>Youtube to Mp3</h6>
          </a>
          <a
            href=""
            className="link-dark text-decoration-none ms-4 text-center"
          >
            <h6>Facebook Downloader</h6>
          </a>
        </div>
        <hr className="mt-0" />
      </nav>
    </div>
  );
}

export default Navbar;
