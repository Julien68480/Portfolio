import imgPRH from "../../../../public/images/PageAccueilPRH.png";
import imgFR1 from "../../../../public/images/FilRouge1.png";
import imgFR2 from "../../../../public/images/FilRouge2.png";
import imgKageko from "../../../../public/images/Kageko.png";
import DescriptionPRH68 from "../../../data/descriptions/DescriptionPRH68.jsx";
import DescritpionFilRouge1 from "../../../data/descriptions/DescriptionFilRouge4.0.1.jsx";
import DescritpionFilRouge2 from "../../../data/descriptions/DescriptionFilRouge4.0.2.jsx";
import DescriptionKageko from "../../../data/descriptions/DescriptionKageko.jsx";

const MesProjets = [
  {
    id: 1,
    name: "Fil rouge 4.0.1",
    image: imgFR1,
    description: DescritpionFilRouge1,
    git: "https://github.com/Julien68480/FilRouge",
  },
  { id: 2, name: "Kageko", image: imgKageko, description: DescriptionKageko },
  {
    id: 3,
    name: "PRH68",
    image: imgPRH,
    description: DescriptionPRH68,
    lien: "https://prh68.fr/",
  },
  {
    id: 4,
    name: "Fil rouge 4.0.2",
    image: imgFR2,
    description: DescritpionFilRouge2,
    git: "https://github.com/Julien68480/FilRouge4.0.2",
  },
];

const Projet = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-20 lg:px-50 mt-40 max-w-[1600px] mx-auto">
      {MesProjets.map((projet) => (
        <div
          key={projet.id}
          className="rounded-3xl bg-base-200 p-6 flex flex-col border-accent border-2"
        >
          <a href={projet.lien} className="block mb-4 mx-auto w-full max-w-md">
            <img
              src={projet.image}
              alt={projet.name}
              className="w-full aspect-square object-cover rounded-xl"
            />
          </a>
          <h3 className="text-accent text-2xl font-bold mb-5">{projet.name}</h3>
          {projet.description && <projet.description />}
          <div className="mt-auto">
            {projet.lien && (
              <a
                href={projet.lien}
                target="_blank"
                className="btn btn-accent w-full sm:w-auto"
              >
                Voir le projet
              </a>
            )}
            {projet.git && (
              <a
                href={projet.git}
                className="btn btn-secondary w-full sm:w-auto mt-2 sm:mt-0 sm:ml-2"
                target="_blank"
              >
                Voir le code
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projet;
