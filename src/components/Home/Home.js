import React, { useEffect, useState } from "react";
import Items from "../Items/Items";
import "./Home.Module.css";
import clothes from "../../assets/clothes.png";
import swap from "../../assets/swap.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import Loading from "../Loading/Loading";
const Home = () => {
  const [loading, setLoading] = useState(true);
  // const user = useSelector((state) => state.swap.user);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   onAuthStateChanged(auth, (userAuth) => {
  //     if (userAuth) {
  //       dispatch(
  //         setUser({
  //           email: userAuth.email,
  //           uid: userAuth.uid,
  //           displayName: userAuth.displayName,
  //         })
  //       );
  //     } else {
  //       dispatch(setLogout());
  //     }
  //   });
  // });
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <>
          <Navbar />
          <div className="slider">
            <p>Welcome to Swap App! </p>
          </div>
          <div className="home-container">
            <div className="row home-row">
              <div className="col-md-7">
                <div className="home-title">Clothing Swap</div>
                <div className="home-description">
                  Give your clothes a new life
                </div>
                <div className="home-description-other">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                  reprehenderit blanditiis, porro quae quidem, iusto animi
                  aspernatur quam accusantium fugiat molestias quia possimus
                  cupiditate recusandae voluptate voluptas tempora quaerat
                  expedita! Similique minus neque, omnis architecto, in rerum
                  laudantium quam porro inventore exercitationem illum ipsa
                  tempore molestiae nesciunt pariatur! Ad, debitis.
                </div>
                <div className="home-btn">
                  <a href="/clothes">
                    <button>Daha Fazla</button>
                  </a>
                </div>
              </div>
              <div className="col-md-5">
                <img src={clothes} alt="clothes-img"></img>
              </div>
            </div>{" "}
            <div className="row home-row">
              <div className="col-md-6">
                <img src={swap} alt="clothes-img"></img>
              </div>
              <div className="col-md-6">
                <div className="home-title">Item Swap</div>
                <div className="home-description">
                  Give your items a new life
                </div>
                <div className="home-description-other">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                  reprehenderit blanditiis, porro quae quidem, iusto animi
                  aspernatur quam accusantium fugiat molestias quia possimus
                  cupiditate recusandae voluptate voluptas tempora quaerat
                  expedita! Similique minus neque, omnis architecto, in rerum
                  laudantium quam porro inventore exercitationem illum ipsa
                  tempore molestiae nesciunt pariatur! Ad, debitis.
                </div>
                <div className="home-btn">
                  <a href="/technology">
                    <button>Daha Fazla</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="items-container">
              <Items />
            </div>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
