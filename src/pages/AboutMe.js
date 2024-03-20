import { motion } from "framer-motion";
import classe from "./styles/AboutMe.module.css";
import ProfileImage from "../assets/me1.png";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="row g-0">
          <div className="col-md-12">
            <div className={classe.flex}>
              <img
                src={ProfileImage}
                alt="my-profile"
                className={classe.image_profile}
              />
            </div>
          </div>

          <div className={classe.flex}>
            <div>
              <section className={classe.section}>
                <div className={classe.align}>
                  <h3 className={classe.h3}>Work</h3>
                  <p className={classe.paragraph}>
                  Hello! My name is <strong>Efraim James </strong>. I'm a Front-end Developer and Web Designer from the Philippines. Currently, I'm employed as a Front-end Developer at ORO Business Group, where I have gained valuable experience that has greatly enhanced my work ethic, communication skills, and adaptability.
                  <br /><br />
                  I graduated with a Bachelor's degree in Information Technology from Western Mindanao State University, Philippines. I have inclinations toward both Front-end Development and Graphic Design.
                  <br /><br />
                  During my spare time, I play mobile games such as ML, One Piece, Tower defense, and others. I also engage in Graphic design, creating banners, posters, print designs, logos, and mock-ups.
                  </p>
                </div>
                <button className={classe.button}>
                  <Link to="/works" className={classe.link}>
                    Projects &#8594;
                  </Link>
                </button>
              </section>
            </div>
          </div>
        </div>

        <div className="row g-0">
          <div className={classe.flex}>
            <div>
              <div className={classe.align}>
                <section>
                  <h3 className={classe.h3Bio}>Bio</h3>
                  <div className={classe.bio}>
                    <span className={classe.year}>1999</span>
                    <p className={classe.paragraphBio}>
                      Born in Zamboanga City, Philippines.
                    </p>
                  </div>
                  <div className={classe.bio}>
                    <span className={classe.year}>2018</span>
                    <p className={classe.paragraphBio}>
                      Started a BS in Information Technology program at Western
                      Mindanao State University in Zamboanga City.
                    </p>
                  </div>

                  <div className={classe.bio}>
                    <span className={classe.year}>2024</span>
                    <p className={classe.paragraphBio}>
                      Currently working as a Front-end Developer at ORO Business Group.
                    </p>
                  </div>
                </section>

                <h3 className={classe.h3Love}>I &#x2764;</h3>
                <p className={classe.paragraph}>
                  Playing Mobile Games, Music, Graphic Design, and Coding, Movies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
