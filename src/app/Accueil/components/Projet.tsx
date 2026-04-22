import { useState } from "react";
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
    introduction:
      "J'ai développé une application web complète de A à Z. Le front-end est construit avec HTML, CSS et JavaScript. Le back-end repose sur PHP et une base de données MySQL.",
  },
  {
    id: 2,
    name: "Kageko",
    image: imgKageko,
    description: DescriptionKageko,
    introduction:
      "J'ai réalisé une refactorisation complète d'une application web Symfony. J'ai appliqué les bonnes pratiques de l'architecture MVC tout au long du projet.",
  },
  {
    id: 3,
    name: "PRH68",
    image: imgPRH,
    description: DescriptionPRH68,
    lien: "https://prh68.fr/",
    introduction:
      "J'ai développé une solution web sur mesure basée sur WordPress. Ce projet comprend deux volets principaux. J'ai créé la page d'accueil du site et développé un plugin personnalisé de gestion des locations.",
  },
  {
    id: 4,
    name: "Fil rouge 4.0.2",
    image: imgFR2,
    description: DescritpionFilRouge2,
    git: "https://github.com/Julien68480/FilRouge4.0.2",
    introduction:
      "J'ai développé une application web full-stack autour de la génération de parcours narratifs. Le backend repose sur Java avec Spring Boot. Le frontend est construit avec React.",
  },
];

const Projet = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (projet) => {
    setSelectedProject(projet);
    document.getElementById("project_modal").showModal();
  };

  return (
    <>
      <h4
        id="projets"
        className="scroll-mt-24 text-3xl md:text-4xl mt-30 font-bold text-center text-accent mb-8"
      >
        Projets
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-20 lg:px-50 mt-15 max-w-[1600px] mx-auto">
        {MesProjets.map((projet) => (
          <div
            key={projet.id}
            onClick={() => openModal(projet)}
            className="rounded-3xl bg-base-200 p-6 flex flex-col border-accent border-2 cursor-pointer transition hover:scale-[1.02]"
          >
            <div className="block mb-4 mx-auto w-full max-w-md">
              <img
                src={projet.image}
                alt={projet.name}
                className="w-full aspect-square object-cover rounded-xl"
              />
            </div>

            <h3 className="text-accent text-2xl font-bold mb-5">
              {projet.name}
            </h3>

            {projet.introduction}

            <div className="mt-auto pt-4">
              <button className="btn btn-outline btn-accent w-full sm:w-auto">
                Voir les détails
              </button>
            </div>
          </div>
        ))}
      </div>

      <dialog id="project_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box max-w-3xl">
          {selectedProject && (
            <>
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full max-h-[400px] object-cover rounded-xl mb-4"
              />

              <h3 className="text-2xl font-bold text-accent mb-4">
                {selectedProject.name}
              </h3>

              <div className="mb-6">
                {selectedProject.description && <selectedProject.description />}
              </div>

              <div className="flex flex-wrap gap-3">
                {selectedProject.lien && (
                  <a
                    href={selectedProject.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-accent"
                  >
                    Voir le projet
                  </a>
                )}

                {selectedProject.git && (
                  <a
                    href={selectedProject.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Voir le code
                  </a>
                )}
              </div>
            </>
          )}

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Fermer</button>
            </form>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Projet;
