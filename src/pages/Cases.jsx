import React from "react";

export default function Cases() {
  return (
    <main>
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/hero.jpg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold px-4 text-center">
            We work to free the innocent,<br/>
            prevent wrongful convictions,<br/>
            and create fair, compassionate,<br/>
            and equitable systems of justice for everyone.
          </h1>
        </div>
      </section>
      {/* …other Home sections… */}
    </main>
  );
}