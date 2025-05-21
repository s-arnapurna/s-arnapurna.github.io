// src/components/SocialLinks.js
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://github.com/s-arnapurna" target="_blank" rel="noreferrer">
        <FaGithub size={20} />
      </a>
      <a href="https://www.linkedin.com/in/arnapurnasatapathy/" target="_blank" rel="noreferrer">
        <FaLinkedin size={20} />
      </a>
      <a href="https://x.com/miss_arnap" target="_blank" rel="noreferrer">
        <FaXTwitter size={20} />
      </a>
    </div>
  );
}
