import React from "react";

export default function OurWork() {
  const resources = [
    {
      title: "University of Maryland, Restorative approaches in education",
      description: "University of Maryland Law School website on current restorative justice methods, and breakthroughs.",
      link: "https://www.law.umaryland.edu/academics/programs--centers/dispute-resolution-program/initiatives/restorative-approaches-in-education/"
    },
    {
      title: "Get involved in current restorative justice initiatives in Maryland.",
      description: "Find support circles, community led programs, and educational resources.",
      link: "https://www.crimaryland.org/"
    },

    {
      title: "Learn about your Maryland representatives",
      description: "Contact information for Maryland restorative justice leaders.",
      link: "https://mejc.maryland.gov/pages/collaborative-members"
    },
    {
      title: "National Restorative Justice Website",
      description: "A collection of local and regional restorative justice organizations and support groups.",
      link: "https://restorativejustice.org/resources"
    },
    {
      title: "Restorative Justice Simulation",
      description: "This simulation: focuses on the victim, family, and school, with the intention of finding a way for the offender to take responsibility and make the situation right. The perspectives of both the offender and the victim are important..",
      link: "https://hear.public-health.uiowa.edu/interactive-restorative-justice/"
    }
  ];

  return (
    <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Restorative Justice Resources</h1>

      <section style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        {resources.map((item, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "20px",
              backgroundColor: "#f9f9fc",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)"
            }}
          >
            <h2 style={{ marginBottom: "10px", fontSize: "1.5rem" }}>{item.title}</h2>
            <p style={{ marginBottom: "10px", color: "#555" }}>{item.description}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#007bff", fontWeight: "bold", textDecoration: "none" }}
            >
              Visit Resource →
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}
