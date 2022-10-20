import self from "../img/photo.jpg"
import mock1 from "../img/mnf.png"
import mock2 from "../img/kazakh.png"
import mock3 from "../img/evision.png"
import mock4 from "../img/compound.png"
import mock5 from "../img/flywheel.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Chingiz",
    lastName: "Tuleubayev",
    initials: "cv", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        {
            emoji: "💼",
            text: "1 Year student at Lehigh"
        },
        {
            emoji: "📧",
            text: "chingizof@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com/tuleuchina",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/chingizof",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/chinkz/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Chingiz. I'm a software engineer studying CompSci at Lehigh. I enjoy long walks on the beach, playing poker, and I believe Quantum Computing is a future of the world. You should hire me!",
    skills:
        {
            proficientWith: ['Go', 'React', 'Node.js', 'Firebase', 'MondoDB', 'Heroku', 'Python'],
            exposedTo: ['Quantum Computing', 'Machine Learning', 'Web 3', 'Solidity']
        }
    ,
    hobbies: [
        {
            label: 'sports',
            emoji: '📖'
        },
        {
            label: 'dancing',
            emoji: '🎭'
        },
        {
            label: 'math',
            emoji: '🎥'
        },
        {
            label: 'blogging',
            emoji: '📖'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Math and Furious",
            live: "https://mathandfurious.vercel.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/chingizof/math-and-furious", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Kazakh Poems Guesser",
            live: "https://kazakh-poems-quiz.vercel.app/",
            source: "https://github.com/chingizof/kazakh-poems-server",
            image: mock2
        },
        {
            title: "E-Vision",
            live: "https://github.com/DulatKuntu/bilim",
            source: "https://github.com/DulatKuntu/bilim",
            image: mock3
        },
        {
            title: "Investment Visualization",
            live: "https://compound-visualization.vercel.app/",
            source: "https://github.com/chingizof/compound-visualization",
            image: mock4
        },
        {
            title: "Catch Star - sound game",
            live: "https://flywheel-nu.vercel.app/",
            source: "https://github.com/chingizof/flywheel-lehigh",
            image: mock5
        }
    ]
}