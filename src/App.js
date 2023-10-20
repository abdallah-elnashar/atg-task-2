import React, { useState, useRef } from "react";
import { motion as m } from "framer-motion";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);

  function handleTouchStart(event) {
    // Capture the starting X coordinate when the touch starts
    setStartX(event.touches[0].clientX);
    console.log(startX);
  }

  const handleScroll = (e) => {
    if (window.innerWidth > 800) {
      const delta = e.deltaY;
      if (delta > 0) {
        if (currentIndex >= 0) {
          setCurrentIndex(currentIndex + 1);
        }
        if (currentIndex >= 6) {
          setCurrentIndex(currentIndex);
        }
      }
      if (delta < 0) {
        setCurrentIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
      }
    }
  };

  const touchMove = (e) => {
    // const deltaX = e.touches[0].clientX;
    if (window.innerWidth < 800) {
      if (startX !== null) {
        const currentX = e.touches[0].clientX;
        console.log(currentX);
        const deltaX = startX - currentX;
        if (deltaX > 0) {
          if (currentIndex >= 0) {
            setCurrentIndex(currentIndex + 1);
          }
          if (currentIndex >= 6) {
            setCurrentIndex(currentIndex);
          }
        }
        if (deltaX < 0) {
          setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex
          );
        }
      }
    }
  };
  return (
    <div className="App">
      <section
        className="section-1"
        id="section-1"
        onWheel={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchMove={touchMove}
      >
        {/* section 1111 */}

        {currentIndex === 0 && (
          <div className="container" id="content1">
            <div className="desc">
              <div className="text">
                <svg width="300" height="300">
                  <m.circle
                    initial={{ strokeDashoffset: 628 }}
                    animate={{ strokeDashoffset: 550 }}
                    transition={{ duration: 0.45, ease: "easeIn" }}
                    r="115"
                    cx="125"
                    cy="125"
                    className="progress"
                  ></m.circle>
                </svg>
                <m.h1
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  25M+ Downloads
                </m.h1>
                <m.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  on app store & google playstore
                </m.p>
              </div>
              <m.div className="title">
                <m.h1
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  ABC 123
                </m.h1>
                <m.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  We are the best web development company in the world
                </m.p>
              </m.div>
              <div className="footer">
                <m.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  View Case Study
                </m.button>
                <m.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  SKIP
                </m.button>
              </div>
            </div>
            <div className="photo">
              <div>
                <m.img
                  initial={{ opacity: 0, y: 150 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                  src="./assets/2.png"
                  alt="phone"
                />
                <m.img
                  initial={{ opacity: 0, y: -150 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                  src="./assets/1.png"
                  alt="phone"
                />
              </div>
            </div>
          </div>
        )}

        {/* sectoin 2222 */}
        {currentIndex === 1 && (
          <div className="container container-2" id="content2">
            <m.div
              initial={{ opacity: 0.8, backgroundColor: "rgb(84, 27, 219) " }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="desc"
            >
              <div className="text">
                <svg width="300" height="300">
                  <m.circle
                    initial={{ strokeDashoffset: 550 }}
                    animate={{ strokeDashoffset: 472 }}
                    transition={{ duration: 0.45, ease: "easeIn" }}
                    r="115"
                    cx="125"
                    cy="125"
                    class="progress"
                  ></m.circle>
                </svg>
                <m.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                  className="small-header"
                >
                  The Next Big
                </m.p>
                <m.h1
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  Blockchain
                </m.h1>
                <m.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  Revolution
                </m.p>
              </div>
              <div className="title">
                <m.h1
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  ABC 234
                </m.h1>
                <m.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  We are the best web development company in the world
                </m.p>
              </div>
              <div className="footer">
                <m.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  View Case Study
                </m.button>
                <m.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  SKIP
                </m.button>
              </div>
            </m.div>
            <m.div
              initial={{ opacity: 0.8, backgroundColor: "rgb(37, 23, 110)" }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="photo"
            >
              <div>
                <m.img
                  initial={{ opacity: 0, y: 150 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                  src="./assets/3.png"
                  alt="phone"
                />
                <m.img
                  initial={{ opacity: 0, y: -150 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                  src="./assets/4.png"
                  alt="phone"
                />
              </div>
            </m.div>
          </div>
        )}
        {/* section 333 */}
        {currentIndex === 2 && (
          <div className="container container-3" id="content2">
            <m.div
              initial={{ opacity: 0.8, backgroundColor: "#1a0c4e" }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="desc"
            >
              <div className="text">
                {" "}
                <svg width="300" height="300">
                  <m.circle
                    initial={{ strokeDashoffset: 472 }}
                    animate={{ strokeDashoffset: 394 }}
                    transition={{ duration: 0.45, ease: "easeIn" }}
                    r="115"
                    cx="125"
                    cy="125"
                    class="progress"
                  ></m.circle>
                </svg>
                <m.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                  className="small-header"
                >
                  Powered by advance
                </m.p>
                <m.h1
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  NASA
                </m.h1>
                <m.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  algorithms
                </m.p>
              </div>
              <div className="title">
                <m.h1
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  ABC 345
                </m.h1>
                <m.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  We are the best web development company in the world
                </m.p>
              </div>
              <div className="footer">
                <m.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  View Case Study
                </m.button>
                <m.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  SKIP
                </m.button>
              </div>
            </m.div>
            <m.div
              initial={{ opacity: 0.8, backgroundColor: "#3311a2" }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="photo"
            >
              <div>
                <m.img
                  initial={{ opacity: 0, y: 150 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                  src="./assets/5.png"
                  alt="phone"
                />
                <m.img
                  initial={{ opacity: 0, y: -150 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                  src="./assets/6.png"
                  alt="phone"
                />
              </div>
            </m.div>
          </div>
        )}
        {/* section 444 */}
        {currentIndex === 3 && (
          <div className="container container-4" id="content2">
            <m.div
              initial={{ opacity: 0.8, backgroundColor: "#293242" }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="desc"
            >
              <div className="text">
                {" "}
                <svg width="300" height="300">
                  <m.circle
                    initial={{ strokeDashoffset: 394 }}
                    animate={{ strokeDashoffset: 316 }}
                    transition={{ duration: 0.45, ease: "easeIn" }}
                    r="115"
                    cx="125"
                    cy="125"
                    class="progress"
                  ></m.circle>
                </svg>
                <m.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                  className="small-header"
                >
                  Redifinig
                </m.p>
                <m.h1
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  UX Strategy
                </m.h1>
                <m.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  and UI design
                </m.p>
              </div>
              <div className="title">
                <m.h1
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  ABC 456
                </m.h1>
                <m.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  We are the best web development company in the world
                </m.p>
              </div>
              <div className="footer">
                <m.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  View Case Study
                </m.button>
                <m.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  SKIP
                </m.button>
              </div>
            </m.div>
            <m.div
              initial={{ opacity: 0.8, backgroundColor: "#242527" }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="photo"
            >
              <m.img
                initial={{ opacity: 0, y: -350 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                src="./assets/7.png"
                alt="phone"
              />
              <m.img
                initial={{ opacity: 0, y: -150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                src="./assets/8.png"
                alt="phone"
              />
              <m.img
                initial={{ opacity: 0, y: 350 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeIn" }}
                src="./assets/9.png"
                alt="phone"
              />
              <m.img
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeIn" }}
                src="./assets/10.png"
                alt="phone"
              />
              <m.img
                initial={{ opacity: 0, y: -250 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                src="./assets/11.png"
                alt="phone"
              />
            </m.div>
          </div>
        )}
        {/* section 5555 */}
        {currentIndex === 4 && (
          <div className="container container-5" id="content2">
            <m.div
              initial={{ opacity: 0.8, backgroundColor: "rgb(48, 48, 243)" }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="desc"
            >
              <div className="text">
                {" "}
                <svg width="300" height="300">
                  <m.circle
                    initial={{ strokeDashoffset: 316 }}
                    animate={{ strokeDashoffset: 238 }}
                    transition={{ duration: 0.45, ease: "easeIn" }}
                    r="115"
                    cx="125"
                    cy="125"
                    class="progress"
                  ></m.circle>
                </svg>
                <m.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                  className="small-header"
                >
                  Text Headline
                </m.p>
                <m.h1
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  Text Headline
                </m.h1>
                <m.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  Footer headline
                </m.p>
              </div>
              <div className="title">
                <m.h1
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  ABC 567
                </m.h1>
                <m.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  We are the best web development company in the world
                </m.p>
              </div>
              <div className="footer">
                <m.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  View Case Study
                </m.button>
                <m.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  SKIP
                </m.button>
              </div>
            </m.div>
            <m.div
              initial={{ opacity: 0.8, backgroundColor: "rgb(105, 199, 214)" }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="photo"
            >
              <m.img
                initial={{ opacity: 0, y: -350 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                src="./assets/12.png"
                alt="phone"
              />
              <m.img
                initial={{ opacity: 0, y: -250 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                src="./assets/13.png"
                alt="phone"
              />
              <m.img
                initial={{ opacity: 0, x: 350 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, ease: "easeIn" }}
                src="./assets/14.png"
                alt="phone"
              />
              <m.img
                initial={{ opacity: 0, y: 250 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeIn" }}
                src="./assets/15.png"
                alt="phone"
              />
              <m.img
                initial={{ opacity: 0, y: 250 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                src="./assets/16.png"
                alt="phone"
              />
            </m.div>
          </div>
        )}
        {/* section 6666 */}
        {currentIndex === 5 && (
          <div className="container container-6" id="content2">
            <m.div
              initial={{ opacity: 0.8, backgroundColor: "blue" }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="desc"
            >
              <div className="text">
                {" "}
                <svg width="300" height="300">
                  <m.circle
                    initial={{ strokeDashoffset: 238 }}
                    animate={{ strokeDashoffset: 160 }}
                    transition={{ duration: 0.45, ease: "easeIn" }}
                    r="115"
                    cx="125"
                    cy="125"
                    class="progress"
                  ></m.circle>
                </svg>
                <m.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                  className="small-header"
                >
                  Developing ERP Solution for
                </m.p>
                <m.h1
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  Text Headline
                </m.h1>
                <m.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  in furniture industry
                </m.p>
              </div>
              <div className="title">
                <m.h1
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  ABC 678
                </m.h1>
                <m.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  We are the best web development company in the world
                </m.p>
              </div>
              <div className="footer">
                <m.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  View Case Study
                </m.button>
                <m.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  SKIP
                </m.button>
              </div>
            </m.div>
            <m.div
              initial={{ opacity: 0.8, backgroundColor: "#888" }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="photo"
            >
              <m.img
                initial={{ opacity: 0, y: -350 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                src="./assets/20.jpeg"
                alt="phone"
              />
              <m.img
                initial={{ opacity: 0, y: 350 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                src="./assets/17.png"
                alt="phone"
              />
            </m.div>
          </div>
        )}
        {/* section 7 */}
        {currentIndex === 6 && (
          <div className="container container-7" id="content2">
            <m.div
              initial={{ opacity: 0.8, backgroundColor: "rgb(33, 95, 33)" }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="desc"
            >
              <div className="text">
                {" "}
                <svg width="300" height="300">
                  <m.circle
                    initial={{ strokeDashoffset: 160 }}
                    animate={{ strokeDashoffset: 80 }}
                    transition={{ duration: 0.45, ease: "easeIn" }}
                    r="115"
                    cx="125"
                    cy="125"
                    class="progress"
                  ></m.circle>
                </svg>
                <m.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                  className="small-header"
                >
                  Biggest Classfields
                </m.p>
                <m.h1
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  East Asia
                </m.h1>
                <m.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  Countries
                </m.p>
              </div>
              <div className="title">
                <m.h1
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  ABC 23478
                </m.h1>
                <m.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  We are the best web development company in the world
                </m.p>
              </div>
              <div className="footer">
                <m.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  View Case Study
                </m.button>
                <m.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeIn" }}
                >
                  SKIP
                </m.button>
              </div>
            </m.div>
            <m.div
              initial={{ opacity: 0.8, backgroundColor: "rgb(89, 182, 89)" }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              className="photo"
            >
              <m.img
                initial={{ opacity: 0, y: -350 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                src="./assets/18.png"
                alt="phone"
              />
              <m.img
                initial={{ opacity: 0, y: 350 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                src="./assets/19.png"
                alt="phone"
              />
            </m.div>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
