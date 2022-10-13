import React, { useEffect, useRef } from "react";

const Navbar = (props) => {
  const ref = useRef(null);
  const { query, onChange, handleSubmit } = props;

  useEffect(() => {
    ref.current.click();
  }, [query]);

  return (
    <nav className="navbar sticky-top navbar-dark navbar-expand-sm bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Sportz Interactive
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={query}
              onChange={onChange}
            />
            <button className="btn btn-success" type="submit" ref={ref}>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
