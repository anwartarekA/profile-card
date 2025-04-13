import React from "react";
import reactDOM from "react-dom/client";
import "./index.css";
const skills = [
  { skill: "JavaScript", level: "Advanced", bgcolor: "#f0db4f" },
  { skill: "Node.js", level: "Advanced", bgcolor: "#339933" },
  { skill: "React", level: "Intermediate", bgcolor: "#61dafb" },
  { skill: "MongoDB", level: "Intermediate", bgcolor: "#4DB33D" },
  { skill: "CSS", level: "Advanced", bgcolor: "#264de4" },
  { skill: "Git", level: "Advanced", bgcolor: "#f1502f" },
  { skill: "TypeScript", level: "Advanced", bgcolor: "#3178c6" },
  { skill: "Heroku", level: "Beginner", bgcolor: "#ff9900" },
  { skill: "Sass", level: "Advanced", bgcolor: "#cc6699" },
  { skill: "Express.js", level: "Advanced", bgcolor: "#000000" },
  { skill: "MongoDB", level: "Intermediate", bgcolor: "#4DB33D" },
  { skill: "MySQL", level: "Advanced", bgcolor: "#00758f" },
  { skill: "GraphQL", level: "Intermediate", bgcolor: "#e10098" },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <Bio />
      <Skills />
    </div>
  );
}
// avatar
function Avatar() {
  return (
    <div className="avatar">
      <img src="6042056161634666442.jpg" alt="avatar" />
    </div>
  );
}
// bio
function Bio() {
  return (
    <div className="bio">
      <h1>anwar tarek</h1>
      <p>
        full-Stack web developer, i have a lot of hobbies i like football and my
        best club <strong>Al-Ahly & Barcelona</strong> also i like cooking and
        watching tv with my family.
      </p>
    </div>
  );
}
// skills
function Skills() {
  return (
    <div className="skillList">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          level={skill.level}
          bgcolor={skill.bgcolor}
          key={skill.skill}
        />
      ))}
    </div>
  );
}
// skill
function Skill({ skill, level, bgcolor }) {
  return (
    <div className="specialSkill" style={{ backgroundColor: bgcolor }}>
      <span>{skill}</span>
      <span>{level === "Beginner" && "👶"}</span>
      <span>{level === "Intermediate" && "✊"}</span>
      <span>{level === "Advanced" && "💪"}</span>
    </div>
  );
}
const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
