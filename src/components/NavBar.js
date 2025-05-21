import React from 'react';

const links = [
  { id: 'about',      label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work',       label: 'Work' },
  { id: 'contact',    label: 'Contact' },
];

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">Portfolio</div>
      <ul className="nav-links">
        {links.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`}>{label}</a>
          </li>
        ))}
      </ul>
      <a href="/resume.pdf" className="resume-btn" target="_blank" rel="noreferrer">
        Resume
      </a>
    </nav>
  );
}
