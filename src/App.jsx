import { useState } from "react";
import "./App.css";

const projects = [
  {
    title: "Web Programming Portfolio",
    week: "Week 5",
    description: "My HTML, CSS and JavaScript portfolio.",
    url: "https://yaminkywatkhaing1422001-create.github.io/week1/week5/"
  },
  {
    title: "Random Joke Fetcher",
    week: "Week 6",
    description: "A JavaScript app using the Fetch API.",
    url: "https://yaminkywatkhaing1422001-create.github.io/week1/week6/"
  },
  {
    title: "Git & GitHub Pages",
    week: "Week 9",
    description: "Git practice and website deployment.",
    url: "https://yaminkywatkhaing1422001-create.github.io/webpro-w9/"
  },
  {
    title: "Book Search App",
    week: "Project",
    description: "Search for books using an API.",
    url: "https://github.com/yaminkywatkhaing1422001-create/webpro-book-search"
  }
];

export default function App() {
  const [search, setSearch] = useState("");

  const filtered = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="container">
      <header>
        <h1>My Portfolio Gallery</h1>
        <p>Web Programming Projects</p>
        <p>Student ID: 202537619</p>
      </header>

      <input
        type="search"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search projects"
      />

      <section className="gallery">
        {filtered.map((project) => (
          <article className="card" key={project.title}>
            <span className="week">{project.week}</span>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noreferrer">
              View Project
            </a>
          </article>
        ))}
      </section>

      {filtered.length === 0 && <p>No projects found.</p>}

      <footer>Built with React + Vite</footer>
    </main>
  );
}
