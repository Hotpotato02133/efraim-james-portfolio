import { motion } from "framer-motion";
import WorkCard from "../modules/WorkCard";
import classes from "./styles/Works.module.css";

export default function Works() {
  const projects = [
    {
      src: "/Prod1.png",
      title: "ORO Admin Dashboard",
      description:
        "Centralized platform displaying performance, reports, tables for pharmaceutical, sales, jewelry, and payroll businesses.",
      linkSite: "https://admin-dashboard-three-lake.vercel.app/",
      linkGit: "https://github.com/Hotpotato02133/admin-dashboard",
    },
    {
      src: "/Prod2.png",
      title: "ORO Landing Page",
      description:
        "Gateway to a diverse pharmaceutical conglomerate spanning Pharmacy, Jewelry, Pawnshop, Grocery, Automotive, and Restaurant sectors.",
      linkSite: "https://oro-business-group.vercel.app/",
      linkGit: "https://github.com/Hotpotato02133/ORO-Landing-page",
    },
    {
      src: "/Prod3.png",
      title: "ORO Landing Page v2",
      description:
        "Simplified, elegant, and visually striking. Experience the best of our diverse pharmaceutical conglomerate with enhanced UI across multiple sectors.",
      linkSite: "https://react-landing-page-or-ov2.vercel.app/",
      linkGit: "https://github.com/Hotpotato02133/React-Landing-Page---OROv2",
    },
    // ,{
    // 	src: "",
    // 	title: "",
    // 	description: "",
    // 	linkSite: "",
    // 	linkGit: "",
    // }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
    >
      <div className={classes.header}>
        <h3 className={classes.title}>
          Here are some of the projects I've been working on!
        </h3>

        <span className={classes.work_card}>
          <div className="container">
            <div className="row g-0">
              {projects.map((project, index) => (
                <WorkCard
                  key={index}
                  src={project.src}
                  heading={project.title}
                  description={project.description}
                  linkGit={project.linkGit}
                  linkSite={project.linkSite}
                />
              ))}
            </div>
          </div>
        </span>
      </div>
    </motion.div>
  );
}
