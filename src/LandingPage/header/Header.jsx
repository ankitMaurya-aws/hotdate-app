import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { CgMenuRightAlt } from "react-icons/cg";
import { useCookies } from "react-cookie";
import jwtDecode from "jwt-decode";

const Header = ({ Lplayout }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  const [userToken, setUserToken] = useState("");
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    const token = cookies["token"];
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken) {
        setUserToken(decodedToken);
      }
    }
  }, []);

  return (
    <header
      className={`landingpage_header_main top-0 left-0 z-[999] w-full py-5 ${
        Lplayout === "light_layout" ? "landingpage_header_bg" : "absolute"
      }`}
    >
      <div className="container mx-auto">
        <div className="landingpage_header flex flex-wrap items-center justify-between">
          <div className="w-[150px]">
            <Link to="/">
              <img
                src="landingPage/images/landing-logo.png"
                className="cursor-pointer max-w-100px block"
                alt=""
              />
            </Link>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="items-center text-3xl
                            text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2
                            focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <CgMenuRightAlt />
            </button>
          </div>
          <div
            className={`${
              openMenu ? "lp_navbar_open" : ""
            } lp_navbar lg:w-[calc(100%-150px)]`}
          >
            <nav className="lg:flex justify-between">
              <div className="flex lg:hidden items-center justify-between gap-5 mb-10 px-4">
                <Link to="/" className="flex items-center">
                  <img
                    src="landingPage/images/landing-logo.png"
                    className="mr-3 logo_image max-w-[100px] xl:max-w-[215px] h-auto"
                    alt="Logo"
                  />
                </Link>
                <span
                  className="text-xl text-black"
                  onClick={() => setOpenMenu(false)}
                >
                  <RxCross1 />
                </span>
              </div>
              <ul className="lg:w-[calc(100%-150px)] max-w-full block lg:flex justify-center items-center">
                <li
                  className={`${
                    pathname === "/"
                      ? "text-orange"
                      : "text-black lg:text-white"
                  } uppercase px-5`}
                >
                  <Link to="/">Homepage</Link>
                </li>
                {userToken ? (
                  <li
                    className={`${
                      pathname === "/login"
                        ? "text-orange"
                        : "text-black lg:text-white"
                    } uppercase px-5`}
                  >
                    <Link to="/home">Events</Link>
                  </li>
                ) : (
                  <li
                    className={`${
                      pathname === "/login"
                        ? "text-orange"
                        : "text-black lg:text-white"
                    } uppercase px-5`}
                  >
                    <Link to="/login">login</Link>
                  </li>
                )}

                <li
                  className={`${
                    pathname === "/live-chat"
                      ? "text-orange"
                      : "text-black lg:text-white"
                  } uppercase px-5`}
                >
                  <Link to="/live-chat">Live chat</Link>
                </li>
                <li
                  className={`${
                    pathname === "/contact"
                      ? "text-orange"
                      : "text-black lg:text-white"
                  } uppercase px-5`}
                >
                  <Link to="/contact">Contact</Link>
                </li>
                <li
                  className={`${
                    pathname === "/about"
                      ? "text-orange"
                      : "text-black lg:text-white"
                  } uppercase px-5`}
                >
                  <Link to="/about">About us</Link>
                </li>
              </ul>
              {userToken ? (
                ""
              ) : (
                <div className="lg:w-[150px] flex lg:justify-end lg:px-0 px-5 mt-5 lg:mt-0">
                  <Link to="/signup" className="uppercase primary_btn">
                    Join now
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
