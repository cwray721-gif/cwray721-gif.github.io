import ProjectItem from "./ProjectItem";

export const projects: ProjectItem[] = [
    {
      title: "Food for the Sea",
      description: "PLACEHOLDER",
      tags: ["Game Design", "PLACEHOLDER"],
      link: "/Food for the Sea.pdf",
      pages: "8",
      photo: "/FoodfortheSea.png",
      fit: "cover",
      color: "blue"
    },  
    {
      title: "The Wash",
      description: "When a recluse moon used as a military outpost for a rebellion is threatened with an artificial apocalypse, a band of specialists embark on a suicide mission to break even.",
      tags: ["Sci Fi", "Action", "Prose Fiction"],
      link: "/The Wash.pdf",
      pages: "23",
      photo: "/Placeholder.png",
      fit: "contain",
      color: "blue"
    },
    {
      title: "Delta Green-1:1-Jessica's Bodies",
      description: "University Student, Jessica Amon was found dead a week ago in her home. Today, she is found dead bursting out of the gut of a fellow university student who had become impossibly obese over the course of a week. It’s up to natural biologist, Cathy Prennick and veteran Vince Foresythe to discover the cause and correlation of these 2 incidents.",
      tags: ["Scripts", "Thriller", "Mystery"],
      link: "/Jessica's Bodies.pdf",
      pages: "60",
      photo: "/JessicasBodies.png",
      fit: "cover",
      color: "blue"
    },
    {
      title: "Omar and the Wizard",
      description: "A writing competition piece: An old adventurer has to refuse an old friends wish for one last journey.",
      tags: ["Prose Fiction", "Fantasy"],
      link: "/Omar and the Wizard.pdf",
      pages: "7",
      photo: "/Omar&theWizard.png",
      fit: "cover",
      color: "blue"
    },
    {
      title: "Otto",
      description: "A freelance astronomer encounters an otherworldly being that improves his work significantly - but it comes at a great cost",
      tags: ["Prose Fiction", "Sci Fi", "Thriller"],
      link: "/Otto.pdf",
      pages: "41",
      photo: "/Otto.png",
      fit: "cover",
      color: "blue"
    },
    {
      title: "The Interim",
      description: "A writing competition piece: A young dead man awakens in a world between worlds and is faced with an odd task to determine his eternal fate.",
      tags: ["Fantasy", "Prose Fiction", "Gothic"],
      link: "/The Interim.pdf",
      pages: "8",
      photo: "/Placeholder.png",
      fit: "contain",
      color: "blue"
    },
    {
      title: "The Round",
      description: "A novel excerpt: a fantastical parliament addresses some serious issues in light of public outrage, and early signs of rebellion.",
      tags: ["Fantasy", "Prose Fiction", "Drama"],
      link: "/The Round.pdf",
      pages: "11",
      photo: "/Placeholder.png",
      fit: "contain",
      color: "blue"
    },
    {
      title: "BOOM!",
      description: "Two young filmmakers are trying to find a safe and legal way to set of an explosion for project.",
      tags: ["Scripts", "Comedy"],
      link: "/BOOM!.pdf",
      pages: "8",
      photo: "/Boom.png",
      fit: "cover",
      color: "blue"
    },
    {
      title: "Yorick",
      description: "During a production of Hamlet, the prop skull of Yorick has gone missing and the stagehands, tech booth, and backstage actors must work together to find it and get it on stage before the big scene.",
      tags: ["Scripts", "Comedy"],
      link: "/Yorick.pdf",
      pages: "16",
      photo: "/Placeholder.png",
      fit: "contain",
      color: "blue"
    },
    {
      title: "Wellness",
      description: "A mental health patient is routinely asked unreasonable questions by their psychiatrist and made worse than they did when they first arrived.",
      tags: ["Scripts", "Thriller"],
      link: "/Wellness.pdf",
      pages: "25",
      photo: "/Placeholder.png",
      fit: "contain",
      color: "blue"
    },
    {
      title: "Rum & Coke",
      description: "A feature film script where a famous writer/director duo in the late 1970s separate to pursue their “magnum opus”. Their projects overlap, compete, and turn painfully personal - all in pursuit of an academy award.",
      tags: ["Scripts", "Comedy", "Drama"],
      link: "/Rum & Coke.pdf",
      pages: "115",
      photo: "/Rum&Coke.png",
      fit: "cover",
      color: "blue"
    },
    {
      title: "Connect the Dots",
      description: "A noir style detective recounts his various interrogations with suspects and contacts of the victim to reach the conclusion of his investigation.",
      tags: ["Scripts", "Mystery", "Noir"],
      link: "/Connect the Dots.pdf",
      pages: "9",
      photo: "/ConnectTheDots.png",
      fit: "cover",
      color: "blue"
    },
    {
      title: "I Challenge You to a Duel",
      description: "Several travelling knights wish to cross a bridge, but must fight its protector to cross. Shenanigans ensue.",
      tags: ["Scripts", "Comedy"],
      link: "/I Challenge You to a Duel.pdf",
      pages: "9",
      photo: "/IChallengeYoutoaDuel.png",
      fit: "cover",
      color: "blue"
    },
    {
      title: "There is No Such Thing as the Enchilada Hut",
      description: "In a strange job interview, a hiring manager reveals that an interviewee’s favorite restaurant doesn’t exist, never has, and never will.",
      tags: ["Scripts", "Comedy", "Thriller"],
      link: "/Script There is No Such Thing as the Enchilada Hut.pdf",
      pages: "10",
      photo: "/Placeholder.png",
      fit: "contain",
      color: "blue"
    },
  ];

  export const scripts = projects.filter((ProjectItem) => ProjectItem.tags.includes("Scripts"));

  export const gameDesign = projects.filter((ProjectItem) => ProjectItem.tags.includes("Game Design"));

  export const books = projects.filter((ProjectItem) => ProjectItem.tags.includes("Prose Fiction"));


