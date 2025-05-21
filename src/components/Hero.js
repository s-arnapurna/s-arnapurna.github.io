import React from 'react';

export default function Hero() {
  return (
    <section id="hero">
      <div className="pre-title">Hi, my name is</div>
      <h1>Arnapurna Satapathy.</h1>
      <h2>I write code to make an impact.</h2>
      <p>
        I’m a software engineer specializing in Distributed Systems. Currently, I’m focused on building distributed schedulers and
        orchestrating high-throughput file transfers using Hazelcast and Spring Batch. I’ve had the privilege of contributing to impactful engineering teams across academia, fintech, and cloud-based
        research platforms including Wells Fargo and OneDataShare.
        human-centered products at
          OneDataShare
      </p>
      <a href="#work" className="resume-btn">
        Check out my work!
      </a>
    </section>
  );
}
