const Footer = () => {
    return (
        <footer className="content-footer footer bg-footer-theme">
            <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
              <div className="mb-2 mb-md-0">
                ©
                  {(new Date().getFullYear())}
                <strong>&nbsp;3Stage PVT LTD. All Right Reserved. </strong> Power by ❤️ &nbsp; 
                <a aria-label="go to themeselection" href="https://sonexwebinfo.com" target="_blank" rel='noreferrer' className="footer-link fw-medium"><strong className="text-primary">Sonex Webinfo</strong></a>
                </div>
            </div>
          </footer>
      );
}
export default Footer;