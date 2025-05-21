import React from 'react';

const projects = [
  {
    title: 'Real-Time Disaster Response Pipeline',
    tech: 'Kafka · LLMs · MCP · PostgreSQL · Streaming',
    desc: 'Built a real-time pipeline to assist disaster response teams using Kafka and LLMs. Classified 10K+ tweets/sec with zero loss, achieved sub-second latency, and supported geospatial incident search over 0.2M+ records.',
  },
  {
    title: 'Invoice Financing Service',
    tech: 'Cassandra · Kafka · Spring Boot',
    desc: 'Designed a fault-tolerant invoice ledger on Apache Cassandra with Kafka-driven event sourcing, enabling financial institutions to process 150K+ invoice events per minute globally with tunable consistency.',
  },
  {
    title: 'TCP Chat Application',
    tech: 'C++ · Socket Programming · Networking',
    desc: 'Engineered a client-server TCP chat app from scratch using modern socket programming concepts. Enabled multiple client connections with real-time message relay and graceful disconnections.',
  },
  {
    title: 'Taco-DB: Mini Relational Database',
    tech: 'C++ · B-Trees · Query Optimization · Storage',
    desc: 'Built a lightweight SQL engine simulating core RDBMS features. Implemented B-Tree indexing, buffer management, and optimized joins to enable performant query execution on large datasets.',
  },
];

export default function Work() {
  return (
    <section id="work">
      <h2>Projects</h2>
      <div style={{ display: 'grid', gap: '20px' }}>
        {projects.map((p, i) => (
          <a href={p.link} key={i} className="project-card" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <h3>{p.title}</h3>
            <p style={{ color: 'var(--fg-med)', fontWeight: 'bold' }}>{p.tech}</p>
            <p style={{ color: 'var(--fg-med)' }}>{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
