import React from "react";
import Slideshow from "../components/Slideshow.jsx";
import ArticleCard from "../components/ArticleCard.jsx";

export default function Home() {
  const images = [
    "../images/image1.jpg",
    "../images/image2.jpg",
    "../images/image3.jpg",
    "../images/image4.jpg",
  ];

  const HEADER_HEIGHT = 80;

  return (
    <main>
      <section
        id="hero"
        style={{
          position: "relative",
          width: "100vw",
          height: `calc(100vh - ${HEADER_HEIGHT}px)`,
          overflow: "hidden",
        }}
        
      >
        <Slideshow images={images} interval={4000} />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 2,
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            padding: "10px 20px",
            zIndex: 3,
          }}
        >
          <h1
            style={{
              color: "#ffffff",
              fontSize: "2.3rem",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: 1.2,
              padding: "0 20px",
              zIndex: 20,
            }}
          >
            An informational website detailing
            restorative justice initiatives, leading research, and wrongful
            convictions to highlight a fair, and equitable systems of justice for everyone.
          </h1>

        </div>
      </section>

      {/* New info section below hero
      <section
        id="info-block"
        style={{
          position: "relative",
          width: "100%",
          backgroundColor: "#f9f9f9",
          padding: "40px 20px",
          boxSizing: "border-box",
          zIndex: 0,
        }}
      >
        <h2 style={{ fontSize: "1.75rem", marginBottom: "20px" }}>
          Current Research
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "#333" }}>
          Here you can add your additional content, such as descriptions of
          your mission, call to action, contact details, or any other
          relevant information you wish to display below the slideshow.
        </p>
      </section> */}

      {/* Article teaser right below slideshow */}
      <div style={{ maxWidth: "1500px", margin: "20px auto", padding: "20px" }}>
        <ArticleCard
          category="Op-Ed"
          title="Tony's Story"
          excerpt="Tony chased the teenager who snatched his 99‑year‑old mother’s handbag, recovered it at risk of harm, surrendered the money, then later met his young offender through restorative justice, finding closure."
          imageSrc="../images/tonyimage.jpg"
          link="https://restorativejustice.org.uk/resources/tonys-story"
        />
      </div>


      <section
        id="info-block"
        style={{
          position: "relative",
          width: "100%",
          backgroundColor: "#f9f9f9",
          padding: "40px 20px",
          boxSizing: "border-box",
          zIndex: 0,
        }}
      >
        {/* <h2 style={{ fontSize: "1.75rem", marginBottom: "20px" }}>
          Current Research
        </h2> */}
        <div style={{ maxWidth: "1200px", margin: "20px auto", padding: "20px" }}>
          <p style={{ fontWeight: "bold", fontSize: "1.25rem", textAlign: "center", margin: 0 }}>
            One in every 5 restorative justice program evaluations reported a statistically significant drop in victim fear or anger.
          </p>
        </div>
      </section>

       {/* Article teaser right below slideshow */}
       <div style={{ maxWidth: "1500px", margin: "20px auto", padding: "20px" }}>
        <ArticleCard
          category="Op-Ed"
          title="The Sentencing Project - Colorado Youth Justice System"
          excerpt="Colorado RJ diversion pilot, over 90% of youth completed the program, and less than 10% of those
          youth reoffended within one year."
          imageSrc="../images/colorado.jpg"
          link="https://www.sentencingproject.org/reports/protect-and-redirect-americas-growing-movement-to-divert-youth-out-of-the-justice-system/"
        />
      </div>


      <section
        id="info-block"
        style={{
          position: "relative",
          width: "100%",
          backgroundColor: "#f9f9f9",
          padding: "40px 20px",
          boxSizing: "border-box",
          zIndex: 0,
        }}
      >
        {/* <h2 style={{ fontSize: "1.75rem", marginBottom: "20px" }}>
          Current Research
        </h2> */}
        <div style={{ maxWidth: "1200px", margin: "20px auto", padding: "20px" }}>
          <p style={{ fontWeight: "bold", fontSize: "1.25rem", textAlign: "center", margin: 0 }}>
            Victims who went through Restorative Justice were far less likely to fear re-victimization. 
          </p>
        </div>
      </section>

      {/* Footer with names */}
      <div style={{
        maxWidth: "100vw",
        padding: "80px 0",
        textAlign: "center",
        fontSize: "1.0rem",
        color: "#fff",
        backgroundColor: '#111'
      }}>
        Website Designed: Vyshnav Kandamath

        Coded by team: Vyshnav Kandamath, Joey Wu, Olade Kounou, Miral Mohamed, Christian Hill
      </div>
      
    </main>

    
  );
}
