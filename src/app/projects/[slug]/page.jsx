import React from "react";

async function ProjectPage({ params }) {
  const { slug } = await params;
  return <div>My Post: {slug}</div>;
}

export default ProjectPage;
