const techs =[
    {id:1, name:"javascript", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},
    {id:2, name:"symfony", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg"},
    {id:3, name:"php", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"},
    {id:4, name:"mysql", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"},
    {id:5, name:"tailwindcss", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"},
]


const Techno = () => {
    return (
        <div>
            <p id="propros" className="md:m-15 md:ml-24 text-1xl md:text-2xl mt-6 md:mt-10 text-center md:text-left w-235">
                <span className="text-info font-bold">Développeur</span> web en reconversion professionnelle 
                et actuellement étudiant en <span className="text-info font-bold">licence professionnelle</span> à l'UHA 4.0 de Mulhouse, 
                j'ai débuté avec une formation en électrotechnique avant de m'orienter vers le commerce auprès des particuliers, 
                où j'ai acquis une solide expérience du <span className="text-info font-bold">contact client</span>. Habitué à écouter, comprendre les besoins et les problématiques, 
                j'apprécie particulièrement la logique et la résolution de problèmes, ce qui m'a naturellement conduit vers la programmation. 
                <span className="text-info font-bold">Curieux, motivé et rigoureux</span>, j'apprends très vite et sais prendre le lead lorsque la situation l'exige. 
                Actuellement, je suis à la recherche d'un <span className="text-info font-bold">stage</span>, 
                puis d'une <span className="text-info font-bold">alternance</span>, 
                afin de développer mes compétences sur des projets concrets. 
                </p>
            <div className="grid grid-cols-3 gap-3 w-fit ml-auto mr-50 p-5 rounded-3xl border-neutral border-1">
                {techs.map((tech) => (
                    <img key={tech.id} className="size-32" src={tech.src} alt={tech.name} />
                ))}
            </div>
        </div>
    )
}

export default Techno