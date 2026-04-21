const techs =[
    {id:1, name:"html", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"},
    {id:2, name:"css", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"},
    {id:3, name:"javascript", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},
    {id:4, name:"symfony", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg"},
    {id:5, name:"php", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"},
    {id:6, name:"mysql", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"},
    {id:7, name:"tailwindcss", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"},
    {id:8, name:"react", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
    {id:9, name:"git", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"},
    {id:10, name:"postman", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"},
]


const Techno = () => {
    return (

            <div className="grid grid-cols-4 gap-3 w-fit ml-auto mt-40 mr-50 p-5 rounded-3xl border-neutral border-1">
                {techs.map((tech) => (
                    <img key={tech.id} className="size-32" src={tech.src} alt={tech.name} />
                ))}
            </div>
    )
}

export default Techno