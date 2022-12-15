function Navigation({ setCurrentPage }) {
  return (
    <nav class="navbar-dark bg-dark shadow">
      <div className="container" class="container">
        <div class="row">
          <div class="col-md-12">
            <nav class="navbar navbar-expand-lg">
              <div class="container-fluid">
                <a
                  href="/About"
                  onClick={(event) => {
                    event.preventDefault();
                    setCurrentPage("about");
                  }}
                >
                  About Me
                </a>
                <a
                  href="/Portfolio"
                  onClick={(event) => {
                    event.preventDefault();
                    setCurrentPage("portfolio");
                  }}
                >
                  Portfolio
                </a>
                <a
                  href="/Contact"
                  onClick={(event) => {
                    event.preventDefault();
                    setCurrentPage("contact");
                  }}
                >
                  Contact
                </a>
                <a
                  href="/Resume"
                  onClick={(event) => {
                    event.preventDefault();
                    setCurrentPage("resume");
                  }}
                >
                  Resume
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </nav>

    //     <a class="navbar-brand" href="#">Navbar</a>
    //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li class="nav-item">
    //           <a class="nav-link active" aria-current="page" href="#">Home</a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">Link</a>
    //         </li>
    //         <li class="nav-item dropdown">
    //           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //             Dropdown
    //           </a>
    //           <ul class="dropdown-menu">
    //             <li><a class="dropdown-item" href="#">Action</a></li>
    //             <li><a class="dropdown-item" href="#">Another action</a></li>
    //             <li><hr class="dropdown-divider"/></li>
    //             <li><a class="dropdown-item" href="#">Something else here</a></li>
    //           </ul>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link disabled">Disabled</a>
    //         </li>
    //       </ul>
    //       <form class="d-flex" role="search">
    //         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //         <button class="btn btn-outline-success" type="submit">Search</button>
    //       </form>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Navigation;
