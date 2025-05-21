import React from 'react';

const experiences = [
  {
    role: 'Software Developer @OneDataShare, SUNY Buffalo',
    date: 'Aug 2024 – Present',
    details: [
      'Developed job scheduler and worker nodes with Hazelcast for high-throughput file transfers (1 Gbps).',
      'Implemented protocol connection pools (SFTP, FTP, HTTP, S3) in ConnectionBag for concurrency optimization.',
      'Orchestrated job execution with Spring Batch, including step-level state, retries, and async task execution.',
    ],
  },
  {
    role: 'Senior Software Engineer @Wells Fargo, Hyderabad',
    date: 'Jan 2023 – Jan 2024',
    details: [
      'Reduced release time from 3 days to under 30 mins by automating proxy deployment and RCA processes.',
      'Migrated database layer from Oracle to YugabyteDB with new relational schema and data model.',
      'Led Spring AOP-based logging framework to enhance observability across microservices.',
      'Designed Jenkins CI/CD pipeline for 7+ microservices with streamlined builds and deployments.',
      'Integrated Prometheus, Grafana, and ELK stack for full-stack observability and incident analysis.',
      'Scaled AWS Lambda from 50 to 150 concurrent executions to handle 3× traffic with zero downtime.',
      'Collaborated with product teams for feature alignment, increasing user satisfaction by 25%.',
      'Raised test coverage above 90% through rigorous unit/integration test development.',
    ],
  },
  {
    role: 'Software Engineer @Wells Fargo',
    date: 'Sep 2021 – Jan 2023',
    details: [
      'Cut homepage load time by 80% via Redis caching of top API metrics.',
      'Built OAuth2-based integration with Apigee Management server using refresh token lifecycle.',
      'Resolved critical incidents with Grafana, Prometheus, and CloudWatch; mentored junior engineers.',
      'Documented feature designs and post-incident reports, improving handoff and issue resolution speed.',
      'Proposed and implemented three new process improvements beyond assigned scope.',
    ],
  },
  {
    role: 'Program Associate @Wells Fargo',
    date: 'Aug 2020 – Aug 2021',
    details: [
      'Owned SDLC for API Portal; iterated based on feedback to improve quality and usability.',
      'Built RESTful APIs for API consumer and producer flows using Java + Spring Boot.',
      'Integrated Apigee Edge for API lifecycle management and policy enforcement.',
      'Adopted incremental delivery strategy for complex features to improve feedback loop.',
      'Drove 20% velocity gain through cross-functional collaboration.',
      'Led performance tuning of app modules, achieving a 40% improvement in key metrics.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div style={{ display: 'grid', gap: '24px' }}>
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="experience-card"
            style={{
              background: '#f8f9fa',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
            }}
          >
            <h3 style={{ color: 'var(--fg-light)', marginBottom: '4px' }}>{exp.role}</h3>
            <span style={{ color: 'var(--fg-med)', fontSize: '0.9rem' }}>{exp.date}</span>
            <ul style={{ marginTop: '12px', paddingLeft: '20px', color: 'var(--fg-med)' }}>
              {exp.details.map((d, j) => (
                <li key={j} style={{ marginBottom: '8px', lineHeight: '1.5' }}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
