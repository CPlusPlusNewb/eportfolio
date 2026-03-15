# Preston's E-Portfolio
**BAS Information Technology | Computer Science**

This portfolio presents my academic work and hands-on projects demonstrating competency across software development, web technologies, and IT management.

---

## Projects

### 1.Front-End Programming — Local File Manager
**Tech:** HTML, CSS, JavaScript, Python, PHP
https://github.com/CPlusPlusNewb/websitemaker_python 
A browser-based file manager served over a local Python HTTP server. The interface allows users to browse, view, and manage files through a clean web UI without needing a dedicated hosting environment.

**How it benefited me:** This project taught me how to bridge a Python backend with a PHP-assisted front-end, and how to serve dynamic content locally without a full web stack. It deepened my understanding of how servers handle file I/O and client requests.

**Security notes:** The server logs client IP addresses on each request, providing a basic audit trail of who accessed the file system. The index page auto-refreshes when files change on disk, reducing stale-state errors. Future improvements would include input sanitization and access authentication.

---

### 2. ⚙️ Back-End Programming — Python Auto-Web-Host *(Personal Project)*
**Tech:** Python

A Python script that, when run in any directory without an existing `index.html`, automatically generates `index.html`, `style.css`, and `scripts.js` — creating a ready-to-serve static site from scratch. No templates, no frameworks, no manual setup.

**How it benefited me:** Writing a generator that produces valid, structured web files programmatically pushed me to deeply understand how HTML/CSS/JS are structured. It also introduced me to file I/O automation and the concept of scaffolding tools.

**Security notes:** Exception handling is used to avoid overwriting existing files, preventing accidental data loss.

---

### 3. 🌐 Web Development — Social Media Messageboard *(Scrum Team Project)*
**Tech:** HTML, CSS, JavaScript, flat-file database  
**Repo:** [cs411-winter2026/socialmedia-messageboard](https://gitlab.com/cs411-winter2026/socialmedia-messageboard)

A social media-style messageboard built as a Scrum team project. My contributions included authoring `style.css`, laying out the project file structure on GitLab, and building the **feed function** — the core feature that reads from the database file and dynamically renders posts to the page.

**How it benefited me:** Working in a Scrum team exposed me to real collaborative development workflows — Sprint planning, backlog management, and dividing work across roles. Owning the feed function from database read to DOM render gave me a full-stack perspective on a feature slice.

**Scrum reflections:** Our team used short Sprints to iterate on the UI and backend separately. Successes included clear task ownership and regular stand-ups. Challenges included merge conflicts from parallel work on shared files and scope creep mid-Sprint.

**Security notes:** The feed function validates that database entries exist and are non-empty before rendering, preventing blank or broken post elements from appearing in the UI.

---

### 4. 🗄️ Relational Databases — *Coming Soon*

---

### 5. 🔒 Networks & Security — *Coming Soon*

---

### 6. 📋 IT Management / Scrum — *Coming Soon*

---

## Program Outcomes

Through these projects I have developed competencies in:
- Front-end design and dynamic web interfaces
- Server-side scripting and local hosting
- Agile/Scrum team collaboration
- File I/O, data rendering, and basic security practices

---

*Last updated: March 2026*
