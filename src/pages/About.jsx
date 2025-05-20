import React from "react";

export default function About() {
  // Teammate profiles
  const teammates = [
    { name: "Vyshnav Kandamath", photo: "/images/vyshnav.jpg", major: "Computer Science, Law & Society Minor", classYear: "2025" },
    { name: "Olade Kounou",          photo: "/images/olade.JPG",     major: "Computer Science",                       classYear: "2025" },
    { name: "Joey Wu",              photo: "/images/joey.JPG",      major: "Information Systems",                   classYear: "2026" },
    { name: "Miral Mohamed",        photo: "/images/miral.JPG",     major: "Government & Politics",                 classYear: "2025" },
    { name: "Christian Hill",       photo: "/images/christian.JPG", major: "English, Law & Society Minor",          classYear: "2025" },
  ];

  return (
    <main style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "20px"}}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Meet The Team</h1>

      {/* Flex container: wraps and centers each row */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px"
        }}
      >
        {teammates.map((member, idx) => (
          <div
            key={idx}
            style={{
              flex: "0 1 200px",  // base width 200px, no growth, can shrink
              textAlign: "center"
            }}
          >
            <img
              src={member.photo}
              alt={member.name}
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "16px"
              }}
            />
            <h3 style={{ margin: "8px 0 4px" }}>{member.name}</h3>
            <p style={{ margin: 0, color: "#555" }}>
              {member.major}, Class of {member.classYear}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
