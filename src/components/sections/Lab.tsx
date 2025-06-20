"use client";

import { labProjects } from "@/data/lab";
import { useState } from "react";
import { ProjectDetails } from "../ui/ProjectDetails";

/**
 * Lab section displaying featured projects in an expandable table format
 * Users can click on project rows to view detailed information
 */

export const Lab = () => {
  // Track which project is currently expanded (null = none expanded)
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  // Toggle project details visibility
  const toggleProjectDetails = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section className="flex flex-col py-section border-b border-border gap-12">
      <h2 className="text-3xl text-title font-bold">Featured Projects</h2>
      <div className="w-full">
        {/* Table header with column labels */}
        <div className="grid grid-cols-[1.4fr_1fr_1fr_auto] py-2 text-muted uppercase">
          <p>project</p>
          <p>category</p>
          <p>client</p>
          <p>year</p>
        </div>

        {/* Project rows with expandable details */}
        {labProjects.map((project, index) => (
          <div key={index}>
            {/* Clickable project row with hover animation */}
            <div
              onClick={() => toggleProjectDetails(index)}
              className="grid grid-cols-[1.4fr_1fr_1fr_auto] py-2 border-t border-table 
            py-2 border-t border-table cursor-pointer relative overflow-hidden group
            transition-all duration-300 ease-out hover:px-4"
            >
              {/* Sliding background on hover */}
              <div
                className="absolute inset-0 bg-card transform translate-y-full 
                  group-hover:translate-y-0 transition-transform duration-300 ease-in-out -z-10"
              ></div>

              {/* Project data cells */}
              <p
                className="relative z-10 transition-colors duration-300 ease-out 
                group-hover:text-background"
              >
                {project.title}
              </p>
              <p
                className="relative z-10 transition-colors duration-300 ease-out 
                group-hover:text-background"
              >
                {project.category}
              </p>
              <p
                className="relative z-10 transition-colors duration-300 ease-out 
                group-hover:text-background"
              >
                {project.client}
              </p>
              <p
                className="relative z-10 transition-colors duration-300 ease-out 
                group-hover:text-background"
              >
                {project.year}
              </p>
            </div>

            {/* Expandable project details with smooth animation */}
            <div
              className={`grid transition-all duration-500 ease-out ${
                expandedProject === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <ProjectDetails
                client={project.client}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                cta={project.cta}
                images={project.images || []}
                isexpended={expandedProject === index}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
