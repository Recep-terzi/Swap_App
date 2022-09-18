import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { logout } from "../../redux/swapSlice";
import Modal from "../Modal/Modal";
import "./Navbar.Module.css";
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const user = useSelector((state) => state.swap.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("başarıyla çıkış yapıldı");
        dispatch(logout());
        localStorage.removeItem("user");
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
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

  return (
    <>
      <div className="sidebar closes">
        <div className="logo-details">
          <i className="fa-sharp fa-solid fa-p"></i>
          <span className="logo_name">Pyson Swap App</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">
              <i className="bx bx-grid-alt"></i>
              <span className="link_name">Anasayfa</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/">
                  Anasayfa
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
                <Link to="/clothes"> Kıyafetler </Link>
              </li>
              <li>
                <Link to="/technology"> Teknolojik Ürünler </Link>
              </li>
              <li>
                <Link to="/other"> Diğer ürünler </Link>
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
          {user && (
            <>
              <li>
                <Link to="/products">
                  <i class="fa-brands fa-product-hunt"></i>

                  <span className="link_name">Ürünlerim</span>
                </Link>
                <ul className="sub-menu blank">
                  <li>
                    <Link className="link_name" to="/">
                      Ürünlerim
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <a>
                  <i
                    className="fa-solid fa-square-plus"
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
              <li onClick={handleLogout}>
                <Link to="/">
                  <i className="fa-solid fa-right-from-bracket"></i>
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
            </>
          )}
          {!user && (
            <>
              <li>
                <Link to="/login">
                  <i className="fa-solid fa-user"></i>
                  <span className="link_name">Giriş Yap</span>
                </Link>
                <ul className="sub-menu blank">
                  <li>
                    <Link className="link_name" to="/login">
                      Giriş Yap
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/signin">
                  <i class="fa-solid fa-user-plus"></i>
                  <span className="link_name">Kayıt Ol</span>
                </Link>
                <ul className="sub-menu blank">
                  <li>
                    <Link className="link_name" to="/signin">
                      Kayıt Ol
                    </Link>
                  </li>
                </ul>
              </li>
            </>
          )}
          <li>
            <div className="profile-details">
              <div className="profile-content">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="name-job">
                <div className="profile_name">
                  {user ? user.displayName : "Giriş Yap"}
                </div>
                <div className="job"> {user ? user.displayName : "Satıcı"}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <div className="home-content">
          <i className="bx bx-menu"></i>
          {user && <span className="text">Welcome to {user.displayName}!</span>}
          {!user && <span className="text">Welcome to SWAP APP!</span>}
        </div>
      </section>
    </>
  );
};

export default Navbar;
