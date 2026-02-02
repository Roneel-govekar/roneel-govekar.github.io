fetch("data/projects.json")
.then(r => r.json())
.then(projects => {
  const c = document.getElementById("projects-container");
  projects.forEach(p => {
    const d = document.createElement("div");
    d.className = "project-card";
    d.innerHTML = `
      <h2>${p.title}</h2>
      <p>${p.shortDescription}</p>
      <a href="${p.link}">View Case Study →</a>
    `;
    c.appendChild(d);
  });
});