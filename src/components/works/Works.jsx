import { useState } from "react";
import Backend from "./Backend";
import Database from "./Database";
import Express from "./Express";
import Fulstack from "./Fulstack";
import Javascript from "./Javascript";
import Mongo from "./Mongo";
import Node from "./Node";
import Reacts from "./React";
import Sql from "./Sql";
import "./works.scss";

const listItem = [
  { id: "backend", name: "Backend Developer" },
  { id: "fullstack", name: "Fullstack Apps" },
  { id: "database", name: "Database Management" },
  { id: "javascript", name: "JavaScript" },
  { id: "mongo", name: "Mongo DB" },
  { id: "sql", name: "MySQL" },
  { id: "node", name: "Node JS" },
  { id: "express", name: "Express" },
  { id: "react", name: "React" },
];

export default function Works() {
  const [works, setWorks] = useState("backend");
  return (
    <div className="works" id="works">
      <div className="container">
        <div className="left">
          <ul>
            {listItem.map((item) => (
              <li key={item.id}>
                <span
                  onClick={() => {
                    setWorks(item.id);
                  }}
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="right">
          {works === "backend" ? (
            <Backend />
          ) : works === "fullstack" ? (
            <Fulstack />
          ) : works === "database" ? (
            <Database />
          ) : works === "javascript" ? (
            <Javascript />
          ) : works === "mongo" ? (
            <Mongo />
          ) : works === "sql" ? (
            <Sql />
          ) : works === "node" ? (
            <Node />
          ) : works === "express" ? (
            <Express />
          ) : (
            <Reacts />
          )}
        </div>
      </div>
    </div>
  );
}
