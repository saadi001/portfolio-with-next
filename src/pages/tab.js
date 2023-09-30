import Filter from "@/component/Filter";
import Project from "@/component/ProjectCard";
import React from "react";
import { useState } from "react";

const TabPage = ({ projects }) => {
  const [project, setProjects] = useState(projects);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState("all");
  console.log(activeGenre);

  return (
    <div>
      <Filter
        project={project}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <div className="w-full">
        {filtered.map((p) => {
          return <Project key={p.id} project={p} />;
        })}
      </div>
    </div>
  );
};

export default TabPage;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/projects");
  const data = await res.json();

  return {
    props: {
      projects: data,
      revalidate: 30,
    },
  };
};
