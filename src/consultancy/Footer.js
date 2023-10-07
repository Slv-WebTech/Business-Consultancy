import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-300 pt-8 pb-6" id="footer">
      <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style={{ height: "80px" }}>
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl capitalize font-semibold">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">Find us on any of these platforms, we respond within 1-2 business days.</h5>
            <div className="mt-6">
              <button
                className=" text-blue-800 shadow-lg font-normal h-14 w-14 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-4 p-3"
                type="button"
              >
                <i className="flex fab fa-linkedin fa-2xl"></i>
              </button>
              <button
                className=" text-orange-600 shadow-lg font-normal h-14 w-14 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-instagram fa-2xl"></i>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="https://quizaro.in/terms-and-conditions">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="https://quizaro.in/privacy-and-policy">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="https://quizaro.in/we-are">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="#Blogs">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">Office At:-</span>
                <ul className="list-unstyled">
                  <li className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-md">Sector 6, HSR Layout, Bengaluru, Karnataka 560102</li>
                  <li className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-md">9380036855</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-md text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()} Quizaro ExtendedEdge by{" "}
              <a href="https://github.com/Slv1-webpage" className="text-gray-900 hover:text-black-900">
                Slv Web-Tech
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
