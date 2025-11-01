"use client";

import { motion } from "framer-motion";

import { projectsShowcase } from "@/data/projects";
import { ProjectCard } from "./project-card";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export function ProjectsShowcase() {
  return (
    <motion.section
      id="projects-grid"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col gap-16"
    >
      {projectsShowcase.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </motion.section>
  );
}
