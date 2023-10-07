import React, { useRef } from "react";
import "animate.css";
import Navbar from "./consultancy/Navbar";
import Footer from "./consultancy/Footer";
import Statics from "./consultancy/Number";
import Collaborations from "./consultancy/Collaborations";
import Blogs from "./consultancy/Blogs";
import Services from "./consultancy/Services";
import Events from "./consultancy/Events";
import Colleges from "./consultancy/Colleges";

const Form = () => {
  const formRef = useRef(null);
  const scriptUrl = "https://script.google.com/macros/s/AKfycbzcUK3-cSSKgdAabo9B31Pan0G-ttOIqeHoCi_4F6NdB4gvba64BmLUt6h-p_tgv_hn6Q/exec";

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(scriptUrl, { method: "POST", body: new FormData(formRef.current) })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
        alert("SUCCESSFULLY SUBMITTED");
        window.location.reload(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar transparent />
      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white capitalize font-semibold text-4xl">Unlocking excellence in Tech & Non-Tech Operations.</h1>
                  <p className="mt-4 text-m text-gray-300">
                    In the fast-paced world of business, the pursuit of excellence knows no bounds. At Quizaro, we specialize in transforming both tech and
                    non-tech operations to reach their fullest potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden" style={{ height: "70px" }}>
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
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="animate__animated animate__backInLeft lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award fa-xl"></i>
                    </div>
                    <h6 className="text-xl capitalize font-semibold">Cross-Industry Streamlining </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Our expertise spans diverse industries, ensuring your operations run seamlessly, delivering optimal performance and cost-efficiency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate__animated animate__backInDown w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-retweet fa-lg"></i>
                    </div>
                    <h6 className="text-xl capitalize font-semibold">Data-Driven Insights</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Our consultants use cutting-edge analytics and technology for actionable insights for empowering your success.
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate__animated animate__backInRight pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-fingerprint fa-lg"></i>
                    </div>
                    <h6 className="text-xl capitalize font-semibold">Maximizing Growth</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Our consultancy services are designed to unlock the growth potential in every aspect of your business!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="animate__animated animate__backInLeft w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl capitalize mb-2 font-semibold leading-normal">Working with us is a pleasure</h3>
                <p className="text-lg  leading-relaxed mt-4 mb-4 text-gray-700">
                  At Quizaro, we believe that the journey to excellence should not only be rewarding but enjoyable. Our commitment to your success extends
                  beyond consultancy; it's about building strong, collaborative partnerships.
                </p>
                <p className="text-lg  leading-relaxed mt-0 mb-4 text-gray-700">
                  Working with Quizaro isn't just business; it's a pleasure. We look forward to embarking on a journey of excellence together.
                </p>
              </div>

              <div className="animate__animated animate__backInRight w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
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
              <polygon className="text-white fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4" id="vision">
            <div className="items-center flex flex-wrap">
              <div className="animate__animated animate__backInLeft w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className=" animate__animated animate__backInRight w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-18">
                  <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl capitalize font-semibold">Our Vision</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    our vision is to lead the way in transforming businesses across industries. We aim to be the trusted partner that empowers organizations to
                    achieve operational excellence.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600 capitalize">Trailblazing Transformation</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Innovators of Excellence</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600 capitalize">Empowering Tomorrow's Success</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48" id="team">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl capitalize font-semibold">Meet our heroes</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">The Driving Force Behind Excellence. Discover the Team Shaping Your Success.</p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img alt="HR Manager" src={"../Images/pradeep1.jpeg"} className="shadow-lg rounded-lg max-w-full mx-auto" style={{ maxWidth: "130px" }} />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl capitalize font-bold">Prdeep Kumar</h5>
                    <p className="mt-1 text-m text-gray-500 uppercase font-semibold">HR Manager</p>
                    <p className="mt-1 text-m text-gray-500  font-semibold">(Quizaro EduTech)</p>
                    <div className="mt-4">
                      <button className="bg-blue-900 text-white w-11 h-11 rounded-full outline-none focus:outline-none mr-3 mb-1" type="button">
                        <a href="https://www.linkedin.com/in/pradeep-kumar-4083b0229/">
                          <i class="fa-brands fa-linkedin-in fa-xl"></i>
                        </a>
                      </button>
                      <button className="bg-orange-500 text-white w-12 h-12 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                        <a href="https://www.instagram.com/bp_pk_7117/?igshid=NGVhN2U2NjQ0Yg%3D%3D">
                          <i className="fab fa-instagram fa-2xl"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img alt="..." src={"../Images/syed.jpeg"} className="shadow-lg rounded-lg max-w-full mx-auto" style={{ maxWidth: "90px" }} />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl capitalize font-bold">Syed Satham</h5>
                    <p className="mt-1 text-m text-gray-500 uppercase font-semibold">Hr Manager</p>
                    <p className="mt-1 text-m text-gray-500  font-semibold">(Quizaro Business Consultancy)</p>
                    <div className="mt-4">
                      <button className="bg-blue-900 text-white w-11 h-11 rounded-full outline-none focus:outline-none mr-3 mb-1" type="button">
                        <a href="https://www.linkedin.com/in/syed-satham-3999b9254/">
                          <i class="fa-brands fa-linkedin-in fa-xl"></i>
                        </a>
                      </button>
                      <button className="bg-orange-500 text-white w-12 h-12 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                        <a href="https://www.instagram.com/syed_satham_/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
                          {" "}
                          <i className="fab fa-instagram fa-2xl"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img alt="..." src={"../Images/suriya1.jpeg"} className="shadow-lg rounded-lg max-w-full mx-auto" style={{ maxWidth: "120px" }} />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl capitalize font-bold">Suriya Prakash</h5>
                    <p className="mt-1 text-m text-gray-500 uppercase font-semibold">HR BD Specialist</p>
                    <div className="mt-4">
                      <button className="bg-blue-900 text-white w-11 h-11 rounded-full outline-none focus:outline-none mr-3 mb-1" type="button">
                        <a href="https://www.linkedin.com/in/suriya-prakash-6b5738284/">
                          <i class="fa-brands fa-linkedin-in fa-xl"></i>
                        </a>
                      </button>
                      <button className="bg-orange-500 text-white w-12 h-12 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                        <a href="https://www.instagram.com/black_pearl_rider_suriya/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">
                          <i className="fab fa-instagram fa-2xl"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-5">
                  <img alt="..." src={"../Images/joan1.jpeg"} className="shadow-lg rounded-xl max-w-full mx-auto" style={{ maxWidth: "120px" }} />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl capitalize font-bold">Joan Antony</h5>
                    <p className="mt-1 text-m text-gray-500 uppercase font-semibold">HR Recruiter</p>
                    <div className="mt-4">
                      <button className="bg-blue-900 text-white w-11 h-11 rounded-full outline-none focus:outline-none mr-3 mb-1" type="button">
                        <a href="https://www.linkedin.com/in/joan-antony-23908a255/">
                          <i class="fa-brands fa-linkedin-in fa-xl"></i>
                        </a>
                      </button>
                      <button className="bg-orange-500 text-white w-12 h-12 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                        <a href="https://instagram.com/joan_j_a_s?igshid=NzZlODBkYWE4Ng==">
                          <i className="fab fa-instagram fa-2xl"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-gray-900">
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
              <polygon className="text-gray-900 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl capitalize font-semibold text-white">Let's Connect</h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-400">
                  Your success story begins with a conversation. Reach out to us today, and let's start shaping your path to excellence. We're ready to listen,
                  guide, and transform together
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 capitalize font-semibold text-white">Excelent Services</h6>
                <p className="mt-2 mb-4 text-gray-500"> Elevate your expectations, because we're committed to delivering nothing less.</p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 capitalize font-semibold text-white">Grow your Career</h5>
                <p className="mt-2 mb-4 text-gray-500">Unlock new possibilities and take the next step toward success.</p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 capitalize font-semibold text-white">Expand Your Network</h5>
                <p className="mt-2 mb-4 text-gray-400">Connect with industry leaders and innovators for new opportunities and insights.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-gray-900" id="contactus">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl capitalize font-semibold">Want to work with us?</h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">Complete this form and we will get back to you in 24 hours.</p>
                    <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
                      <div className="relative w-full mb-3 mt-8">
                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="Name">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Full Name"
                          name="Name"
                          required
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="Contact">
                          Contact No.
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Phone Number"
                          name="Contact"
                          required
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="Email">
                          Email
                        </label>
                        <input
                          type="email"
                          name="Email"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          required
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                          Message
                        </label>
                        <textarea
                          rows="3"
                          cols="80"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Type a message..."
                          name="Message"
                        />
                      </div>
                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                          type="submit"
                          style={{ transition: "all .15s ease" }}
                        >
                          Send Message
                        </button>
                      </div>
                      {/* <div className="text-center mt-6">
                        <input type="submit" value={loading ? "Loading..." : "SEND MESSAGE"} />
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Blogs />
      <Statics />
      <Colleges />
      <Services />
      <Events />
      <Collaborations />
      <Footer />
    </>
  );
};

export default Form;
