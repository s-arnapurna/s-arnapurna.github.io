import React from 'react';

export default function About() {
  return (
    <section id="about">
      <div className="section-heading">
        <h2>About Me</h2>
        <span className="divider" />
      </div>

      <p>
        Hello! My name is <strong>Arnapurna Satapathy</strong> and I enjoy designing APIs and modeling data, solving real-world problems using distributed systems, designing efficient database schemas, and optimizing APIs for performance and reliability. Whether it's designing event-driven microservices or integrating with cloud-native tools, I’m passionate about building resilient systems that are clean, testable, and production-ready.


      </p>

      <p>
        Fast-forward to today, I’ve had the privilege of contributing to impactful engineering teams across academia, fintech, and cloud-based research platforms—including <a href="https://www.wellsfargo.com/" target="_blank" rel="noreferrer">Wells Fargo</a> and <a href="https://www.onedatashare.org/" target="_blank" rel="noreferrer">OneDataShare</a> at the State University of New York at Buffalo. My current focus is on building high-throughput, fault-tolerant backend systems—from designing distributed schedulers with Hazelcast to architecting cloud-native microservices with Spring Boot and AWS. I’ve led initiatives to migrate critical workloads to YugabyteDB, automate observability with ELK and Grafana stacks, and drive CI/CD excellence improving system resilience, scalability, and developer velocity.
       </p>

      <p>
        Here are a few technologies I’ve been working with recently:
      </p>
      <ul className="tech-list">
        <li>Java (Spring Boot)</li>
        <li>Apache Kafka</li>
        <li>MongoDB</li>
        <li>AWS Lambda</li>
        <li>AWS EC2</li>
        <li>Docker & Kubernetes</li>
        <li>PostgreSQL</li>
        <li>Hazelcast</li>
        <li>Redis</li>
        <li>Apache Cassandra</li>
      </ul>
    </section>
  );
}
