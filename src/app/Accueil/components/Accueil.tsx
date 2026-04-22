const Accueil = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-44 aspect-square md:w-52 rounded-full overflow-hidden shadow-md shrink-0">
          <img
            src="/images/Julien.jpg"
            alt="Photo de Julien Simon"
            className="w-full h-full object-cover object-[25%_center]"
          />
        </div>

        <div className="md:ml-8 mt-15 lg:ml-12">
          <h1 className="text-3xl md:text-4xl mt-6 md:mt-10 text-center md:text-left">
            Bienvenue sur mon portfolio.
            <br />
            Je m’appelle{" "}
            <span className="text-info font-bold">Julien Simon</span>,<br />
            développeur web full-stack junior,
            <br />
            actuellement étudiant en <br />
            <span className="text-info font-bold">
              Licence Professionnelle Développement Logiciels
            </span>
            .
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Accueil;
