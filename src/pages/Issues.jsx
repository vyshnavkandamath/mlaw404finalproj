// src/components/Issues.jsx
import React from "react";

// 1️⃣ Import your local images from src/assets (Webpack will bundle them)
import forgiveImg from "/images/forgive.png";
import reconImg from "/images/grosmaire.webp";
import restoreImg from "/images/recon.jpeg";

// 2️⃣ Define your data array using the same `image` key everywhere
const issues = [
  {
    id: 1,
    title: "Forgiveness Project: Mary Johnson's Story",
    description:
      "Mary Johnson’s journey of turning grief into dialogue and reconciliation.",
    image: forgiveImg,
    link: "https://www.theforgivenessproject.com/stories-library/mary-johnson-oshea-israel/",
  },
  {
    id: 2,
    title: "Grosmaire Family's Story",
    description:
      "Bereaved Parents Are Leaders In Spread Of Restorative Justice Practices",
    image: reconImg,
    link: "https://news.wfsu.org/show/perspectives/2019-01-14/bereaved-parents-are-leaders-in-spread-of-restorative-justice-practices",
  },
  {
    id: 3,
    title: "Restorative Justice changing people",
    description:
      "I was every woman’s worst nightmare. Restorative justice changed me.",
    image: restoreImg,
    link: "https://wagingnonviolence.org/2023/04/restorative-justice-changed-me-every-womans-worst-nightmare/",
  },
];

// 3️⃣ A reusable card component that just reads `issue.image`
function IssueCard({ issue }) {
  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition p-6 flex flex-col items-center">
      <img
        src={issue.image}
        alt={issue.title}
        className="object-cover rounded-lg mb-4"
        style={{ width: "300px", height: "300px" }}
      />
      <h2 className="text-xl font-semibold mb-2 text-center">
        {issue.title}
      </h2>
      <p className="text-gray-600 text-center">{issue.description}</p>
      <a
        href={issue.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-indigo-600 hover:underline"
      >
        Learn more →
      </a>
      <br></br>
    </article>
  );
}

// 4️⃣ The main component
export default function Issues() {
  return (
    <main className="relative min-h-screen bg-gray-100">
      {/* Hero title */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <h1 style={{ fontSize: "1.75rem", marginTop: "100px", marginBottom: "20px"}}>
          Current Issues
      </h1>
      </div>

      {/* Cards grid */}
      <div className="relative z-10 pt-40 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {issues.map((issue) => (
              <IssueCard key={issue.id} issue={issue} />
            ))}
          </section>
        </div>
      </div>
      
    </main>
  );
}
