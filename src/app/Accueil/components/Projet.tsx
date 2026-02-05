import imgPRH from "../../../../public/images/PageAccueilPRH.png";

const MesProjets = [
    {id:1, name:"PRH68", image: imgPRH, lien:"#", git:"#"}, 
    {id:2, name:"PRH2", image: imgPRH, lien:"#"}, 
    {id:3, name:"PRH3", image: imgPRH, lien:"#"}
]

const Projet = () => {
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-20 lg:px-50 mt-20 max-w-7xl mx-auto">
        {MesProjets.map((projet) => (
        <div key={projet.id} className="rounded-3xl bg-base-200 p-6 flex flex-col border-accent border-2">
            <a href={projet.lien} className="block mb-4 mx-auto w-full max-w-md">
            <img 
                src={projet.image} 
                alt={projet.name} 
                className="w-full aspect-square object-cover rounded-xl"
            />
            </a>
            <h3 className="text-accent text-2xl font-bold mb-5">{projet.name}</h3>
            <p className="mb-4">
            s,ryyyyyyyyyyyyyyyy yyyyyh serjhsbhzehbvi zhvi ouzuhgqiu eviaepfhOZIHV PZIUVPUI AHEVPHQPEO HBVPOISHB^OIJZIUHGBQI EHPUIVPEIUVUQHORUVHQOUE BHOsdfhnbosr hpobinopribkljs hbo
            </p>
            <div className="mt-auto">
            {projet.lien && (<a href={projet.lien} className="btn btn-accent w-full sm:w-auto">
                Voir le projet
            </a>)}
            {projet.git &&(<a href={projet.git} className="btn btn-secondary w-full sm:w-auto mt-2 sm:mt-0 sm:ml-2">
                Voir le code
            </a>)}
            </div>
        </div>
        ))}
    </div>
    )
}

export default Projet
