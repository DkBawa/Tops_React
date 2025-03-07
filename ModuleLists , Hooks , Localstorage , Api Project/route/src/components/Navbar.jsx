import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div> 
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="javascript:void(0)">Logo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink to={'/home'} className="nav-link" href="javascript:void(0)">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/about'} className="nav-link" href="javascript:void(0)">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/contact'} className="nav-link" href="javascript:void(0)">Contact</NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="text" placeholder="Search" />
              <button className="btn btn-primary" type="button">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
