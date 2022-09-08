import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/config";
import Modal from "../Modal/Modal";
import "./Navbar.Module.css";
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
      });
    }
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".bx-menu");
    sidebarBtn.addEventListener("click", () => {
      sidebar.classList.toggle("closes");
    });
  });

  const login = useSelector((state) => state.swap.login);
  console.log(login);
  return (
    <>
      <div className="sidebar closes">
        <div className="logo-details">
          <i className="fa-sharp fa-solid fa-p"></i>
          <span className="logo_name">Pyson</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">
              <i className="bx bx-grid-alt"></i>
              <span className="link_name">Dashboard</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/">
                  Category
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="iocn-link">
              <Link to="/">
                <i className="bx bx-collection"></i>
                <span className="link_name">Category</span>
              </Link>
              <i className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <Link className="link_name" to="/">
                  Category
                </Link>
              </li>
              <li>
                <Link to="/">HTML & CSS</Link>
              </li>
              <li>
                <Link to="/">JavaScript</Link>
              </li>
              <li>
                <Link to="/">PHP & MySQL</Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="iocn-link">
              <Link to="/">
                <i className="bx bx-book-alt"></i>
                <span className="link_name">Posts</span>
              </Link>
              <i className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <Link className="link_name" to="/">
                  Posts
                </Link>
              </li>
              <li>
                <Link to="/">Web Design</Link>
              </li>
              <li>
                <Link to="/">Login Form</Link>
              </li>
              <li>
                <Link to="/">Card Design</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="link_name">Analytics</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/">
                  Analytics
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">
              <i className="bx bx-line-chart"></i>
              <span className="link_name">Chart</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/">
                  Chart
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="iocn-link">
              <Link to="/">
                <i className="bx bx-plug"></i>
                <span className="link_name">Plugins</span>
              </Link>
              <i className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <Link className="link_name" to="/">
                  Plugins
                </Link>
              </li>
              <li>
                <Link to="/">UI Face</Link>
              </li>
              <li>
                <Link to="/">Pigments</Link>
              </li>
              <li>
                <Link to="/">Box Icons</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">
              <i className="bx bx-compass"></i>
              <span className="link_name">Explore</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/">
                  Explore
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">
              <i className="bx bx-history"></i>
              <span className="link_name">History</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/">
                  History
                </Link>
              </li>
            </ul>
          </li>
          {login && (
            <>
              <li onClick={() => signOut(auth)}>
                <Link to="/login">
                  <i class="fa-solid fa-right-from-bracket"></i>
                  <span className="link_name">Çıkış Yap</span>
                </Link>
                <ul className="sub-menu blank">
                  <li>
                    <Link className="link_name" to="/">
                      Çıkış Yap
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a>
                  <i
                    class="fa-solid fa-square-plus"
                    onClick={handleClickOpen}
                  ></i>
                  <span className="link_name">Ürün Ekle</span>

                  <Modal
                    handleClickOpen={handleClickOpen}
                    open={open}
                    setOpen={setOpen}
                  />
                </a>
                <ul className="sub-menu blank">
                  <li>
                    <Link className="link_name" to="/additem">
                      Ürün Ekle
                    </Link>
                  </li>
                </ul>
              </li>
            </>
          )}
          {!login && (
            <li>
              <Link to="/login">
                <i class="fa-solid fa-user"></i>
                <span className="link_name">Login</span>
              </Link>
              <ul className="sub-menu blank">
                <li>
                  <Link className="link_name" to="/">
                    Login
                  </Link>
                </li>
              </ul>
            </li>
          )}
          <li>
            <div className="profile-details">
              <div className="profile-content">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="name-job">
                <div className="profile_name">Recep</div>
                <div className="job">Web Desginer</div>
              </div>
              <i className="bx bx-log-out"></i>
            </div>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <div className="home-content">
          <i className="bx bx-menu"></i>
          <span className="text">Welcome to Swap App!</span>
        </div>
      </section>
    </>
  );
};

export default Navbar;
