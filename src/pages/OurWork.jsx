import React from "react";

export default function OurWork() {
  const videoUrl = "https://www.youtube.com/embed/iMgNeyD0OD8";
  const images = [
    { src: "/images/Kurki.jpeg", href: "http://jstor.org/stable/1147665" },
    { src: "/images/moving.jpeg", href: "https://www.jstor.org/journal/polity" },
    { src: "/images/crimlaw.png", href: "https://online.ucpress.edu/nclr/article/18/4/510/68876/Restorative-JusticeUnderlying-Mechanisms-and" },
  ];

  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      {/* Title */}
      <h2 style={{
        fontSize: "1.75rem",
        marginTop: "100px",
        marginBottom: "20px",
        textAlign: "center"
      }}>
        Restorative Justice Circle Demonstration
      </h2>

      {/* Video section */}
      <section style={{ textAlign: "center", padding: "20px 0" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <iframe
            width="100%"
            height="450"
            src={videoUrl}
            title="Research Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Journal section title */}
      <h2 style={{
        fontSize: "1.75rem",
        marginBottom: "20px",
        textAlign: "center"
      }}>
        Journal and Research Study Links 
      </h2>
      <h3 style={{
       
        marginBottom: "20px",
        textAlign: "center"
      }}>

        Click on any image box below to see some critical journal studies in restorative justice and <br></br> referred throughout our capstone!
      </h3>


      {/* Image gallery */}
      <section style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        padding: "20px"
      }}>
        {images.map(({ src, href }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block" }}
          >
            <img
              src={src}
              alt={`Research ${idx + 1}`}
              style={{
                width: "300px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "4px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
              }}
            />
          </a>
        ))}
      </section>


      <h3 style={{
       
       marginBottom: "20px",
       textAlign: "center"
     }}>
       This graph compares the effectiveness of two justice approaches—Restorative Justice (blue bars) and Traditional Justice (red bars)—across five key metrics:

Recidivism Rate

Victim Satisfaction

Offender Accountability

Cost Effectiveness

Community Engagement


       
     </h3>

      {/* Graph image */}
      <section style={{
        textAlign: "center",
        padding: "40px 20px",
        backgroundColor: "#fff"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <img
            src="/images/restorativegraph.JPG"
            alt="Graph Placeholder"
            style={{
              width: "100%",
              height: "auto",
              border: "1px solid #ccc",
              borderRadius: "4px"
            }}
          />
        </div>

        <h3 style={{
       
       marginBottom: "20px",
       textAlign: "center"
     }}>

  - Traditional Justice (~65%) is significantly higher than Restorative Justice (~30%). Restorative Justice likely reduces repeat offenders more effectively.<br></br>
  - Restorative Justice scores ~85%, while Traditional Justice is around 50% in Victim Satisfaction <br></br>
  - Restorative Justice reaches ~90%, compared to ~60% for Traditional Justice. Restorative practices may encourage offenders to take responsibility.<br></br>
  - Restorative Justice (~70%) outperforms Traditional Justice (~40%). Insight: Likely due to reduced incarceration and court costs.<br></br>
  - Restorative Justice shows ~80%, while Traditional Justice lags at ~30%. There is a strong community participation in restorative processes
     </h3>
      </section>
    </main>
  );
}
