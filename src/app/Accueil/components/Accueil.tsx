const Accueil = () => {
    return (
        <div className="md:m-15 md:ml-24">
            <h1 className="text-4xl md:text-5xl mt-6 md:mt-10 text-center md:text-left">
                Bonjour,<br/>
                je m'appelle{" "}
                <span className="text-accent font-bold">
                Julien
                </span><br/>
            </h1>
            <h2 className="text-1xl md:text-2xl text-center md:text-left  mt-4 md:mt-6">
                Étudiant en Licence Pro <span className="text-warning font-bold">|</span> Développeur Web
            </h2>
        </div>
    )
}

export default Accueil