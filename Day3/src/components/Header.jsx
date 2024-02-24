import "../assets/css/Header.css";

const Header = () => {
  return (
    <div>
      <header className="header-main header-fixed header-transparent">
        <div className="container">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-2 logo-holder">
              <a aria-current="page" className="" href="/">
                <img className="logo-nav default-logo" src="/static/common-app-logo-black-new-0bb016a61c1dc3b8e95467420eb3abe0.svg" alt="common app logo" />
                <img className="logo-nav mobile-logo" src="/static/common-app-logo-black-new-0bb016a61c1dc3b8e95467420eb3abe0.svg" alt="common app logo" />
                <img className="logo-nav white-logo" src="/static/common-app-logo-white-new-2b788a1d68a1d85e1e3a39609da93c7a.svg" alt="common app logo" />
              </a>
            </div>
            <div className="col searching">
              <div className="nav-scroller" role="navigation" aria-label="Main navigation">
                <div>
                  <nav className="nav">
                    <a className="" href="/explore">Find a college</a>
                    <span className="">
                      <a className="nav-link-expandable" href="/plan">Plan for college</a>
                      <div className="children">
                        <a className="" href="/plan/why-college-matters">Why college matters</a>
                        <a className="" href="/plan/paying-for-college">Paying for college</a>
                        <a className="" href="/plan/your-path-to-college">Your path to college</a>
                        <a className="" href="/plan/for-families">Family resources</a>
                      </div>
                    </span>
                    <span className="">
                      <a className="nav-link-expandable" href="/apply">Apply to college</a>
                      <div className="children">
                        <a className="" href="/apply/first-year-students">First-year application guide</a>
                        <a className="" href="/apply/essay-prompts">First-year essay prompts</a>
                        <a className="" href="/apply/transfer-students">Transfer application guide</a>
                        <a className="" href="/mobile">Download mobile app</a>
                      </div>
                    </span>
                    <span className="">
                      <a className="nav-link-expandable" href="/counselors-and-recommenders">Support your students</a>
                      <div className="children">
                        <a className="" href="/counselors-and-recommenders/recommender-system">Recommender system</a>
                        <a className="" href="/counselors-and-recommenders/common-app-ready">Common App Ready toolkit</a>
                        <a className="" href="/counselors-and-recommenders/recommender-guide">Recommender guide</a>
                        <a className="" href="/transfer-counselors-and-advisors">Transfer advisors</a>
                        <a className="" href="/blog">News and updates</a>
                      </div>
                    </span>
                  </nav>
                  <div className="mobile-menu">
                    <div>
                      {/* Add your mobile menu content here */}
                      <button type="button" id="hamburger-menu-button" aria-label="Toggle menu">
                        {/* Add your hamburger menu icon content here */}
                      </button>
                      <div style={{ position: "fixed", top: 0, left: 0, bottom: 0, overflowY: "scroll", overflowX: "hidden", height: 0, width: "100vw", display: "flex", flexDirection: "column", opacity: 1, color: "#fafafa", zIndex: 2 }}>
                        {/* Add your mobile menu items here */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="search-link text-white">
              <input type="search" className="search-link-input" aria-label="Site-wide search" placeholder="Search" />
              <img className="close-search" src="data:image/svg+xml;base64,PD94bW...Ig==" alt="close search icon" />
            </div>
            <div className="col justify-content-end align-items-center search-login text-right">
              <button className="log-in-btn btn btn-sm btn-white">Sign in</button>
              <a className="btn btn-sm btn-transparent" href="https://apply.commonapp.org/createaccount">Create an account</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
