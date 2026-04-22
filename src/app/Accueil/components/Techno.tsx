const techs = [
  {
    id: 1,
    name: "html",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    id: 2,
    name: "css",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    id: 3,
    name: "javascript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    id: 4,
    name: "symfony",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg",
  },
  {
    id: 5,
    name: "php",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  },
  {
    id: 6,
    name: "mysql",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
  },
  {
    id: 7,
    name: "tailwindcss",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: 8,
    name: "react",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: 9,
    name: "git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    id: 10,
    name: "postman",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  },
  {
    id: 11,
    name: "docker",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    id: 12,
    name: "hibernate",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg",
  }
];

const Techno = () => {
  return (
    <section className="mt-34 px-6">
      <div className="mx-auto max-w-6xl">
        <h4 className="text-3xl md:text-4xl font-bold text-center text-accent mb-10">
          Technologies
        </h4>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 rounded-3xl border border-neutral bg-base-100 p-6 md:p-8 shadow-sm">
          {techs.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center justify-center bg-neutral-content rounded-2xl p-4 transition hover:scale-105"
            >
              <img
                className="h-20 w-20 object-contain md:h-24 md:w-24"
                src={tech.src}
                alt={tech.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Techno;
