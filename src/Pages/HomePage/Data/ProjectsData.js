/*
    projectName: '',
    link: '',
    description: '',
    currentStatus: 'Completed',
    relatedImages: [],
    learningPoints: []
*/

const ProjectsData = [{
    projectName: 'Loki V1',
    link: null,
    description: 'A typing game created by me and my friends. Its main appeal was its lofi aesthetic, as well as the ability to earn and collect various keyboards to use as cosmetic items ingame.',
    currentStatus: 'Completed',
    relatedImages: [],
    learningPoints: [
        'First taste to working with a small group of people',
        'General game programming in Unity3D',
        'Usage of Backend as a Service(BaaS) in the form of Playfab',
        'Introduction to creation of multiplayer games'
    ]
}, {
    projectName: 'Table talk telegram',
    link: 'https://t.me/tabletalktelegrambot',
    description: 'A telegram bot created together with Vessels, who wanted to digitalize their card game. The game focuses on getting people to talk to each other in order to invoke reflection and raise awareness on what others might be going through.',
    currentStatus: 'Completed',
    relatedImages: [],
    learningPoints: [
        'Learnt how to use Javascript/NodeJS, as well as npm',
        'Usage of PostgreSQL for data analytics',
        'Learnt basics of how to host and deploy applications on the cloud(AWS)'
    ]
}, {
    projectName: 'Loki V2',
    link: 'https://loki.katto.studio/',
    description: 'A web based version of Loki V1. In this iteration of Loki, we wanted to smooth out issues that were present in the older version, such as dependence on Playfab for login, limited customizability, and overall clunkiness of the game.',
    currentStatus: 'On hold',
    relatedImages: [],
    learningPoints: [
        'Creation and usage of REST endpoints',
        'More in-depth usage of AWS, such as loadbalancing, and domain name registry',
        'Using Google accounts for authentication',
        'Usage of Stripe to monitize our game',
        'Usage of Socket.io to create web-based multiplayer games'
    ]
}, {
    projectName: 'Tonvo (Hackathon)',
    link: null,
    description: 'A mobile application created for the Mission:Unite hackathon organized by StartupX, and funded by MCCY. Together with Vessels, we created an application that hoped to bridge the divide between the different races and religions in Singapore. Gameplay wise, it was a more in-depth version of Vessel\'s TableTalk card game, complete with voice chat and room hosting/joining. The goal of this was to hear the actual voice and overall tone of the person sharing thier thoughts, which we felt was missing in the telegram version. In the end, we were placed in the top 10 for the hackthon, which awarded us with 30 grand of grant funding to continue building the product.',
    currentStatus: 'Completed',
    relatedImages: [],
    learningPoints: [
        'Integration of voice communication platforms into games',
        'Creation of multiplayer games without the usage of third party libraries, relying solely on C#',
        'Learnt how to work under time pressure, as well as constantly changing ideas'
    ]
}, {
    projectName: 'Tonvo',
    link: 'https://tonvo.net/',
    description: 'This web application was created as a continuation of the project created in the Hackathon. This version features a customizable 3D avatar, which can be used to join rooms. While the core gameplay remained largely the same, players are able to feel much more immersed in the game, as well as be able to tack an avatar on to the person speaking.',
    currentStatus: 'Completed',
    relatedImages: [],
    learningPoints: [
        'Integration of Google accounts to an existing authentication platform',
        'Usage of React to create web applications',
        'Usage of MongoDB to store and query data',
        'Learnt how to create and utilize a GraphQL endpoint'
    ]
}, {
    projectName: 'Lets talk',
    link: 'https://go.gov.sg/letstalk',
    description: 'This project was commisioned by the MoE, which wanted to create a digitalized version of their card game, Lets Talk, which prompts students to have discussions about topics which are set by the teacher. By digitalizing the game, they wish to decrease the time and effort needed to setup and stop games, as well as be able to reach out to more people, since a physical deck would no longer be needed.',
    currentStatus: 'Completed',
    relatedImages: [],
    learningPoints: [
        'Creation of a custom built networking framework, complete with rooming and reconnection capabilities',
        'Creation of a custom built loadbalancer, to go along with the framework',
        'Learnt how to use Typescript to help manage complexity of larger projects'
    ]
}, {
    projectName: 'Hustle bot',
    link: '',
    description: 'A custom built discord bot, created for use in my private discord server with friends. The main goal for this discord bot was to automate tasks which I personally found annoying and could be automated. Features include embedding tiktok links into mp4s which can then be viewed in the discord server itself, as well as expanding pixiv images into its full resolution verion, instead of the default miniturized version.',
    currentStatus: 'On hold',
    relatedImages: [],
    learningPoints: [
        'Introduction to webscraping both Client side and Server side rendering web applications',
        'Overall peak laziness'
    ]
}];

export default ProjectsData;