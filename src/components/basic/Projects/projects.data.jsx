import googleBloggerProjImg1 from "assets/project-images/google-blogger-api-proj/index.png";
import googleBloggerProjImg2 from "assets/project-images/google-blogger-api-proj/dashboard.png";
import courseHuntProjImg1 from "assets/project-images/course-hunt-website-proj/IndexPage.png";
import courseHuntProjImg2 from "assets/project-images/course-hunt-website-proj/ResultsPage.png";
import gitHubApiProjImg1 from "assets/project-images/github-async-profile-proj/IndexPage.png";
import gitHubApiProjImg2 from "assets/project-images/github-async-profile-proj/repositories-results.png";
import w3SchoolProjImg1 from "assets/project-images/w3-schools-courses-proj/1st.png";
import w3SchoolProjImg2 from "assets/project-images/w3-schools-courses-proj/2nd.png";
import fruitsWebsiteProjImg1 from "assets/project-images/fruits-website-proj/1st.png";
import fruitsWebsiteProjImg2 from "assets/project-images/fruits-website-proj/5th.png";

const projectsData = [
    {
        projectHeading: 'google blogger api project',
        projectDescription: `This is an API based project where multiple http requests are 
            being made to the Google’s Blogger API to carry out CRUD operations on the posts of a
            blogger.This project offers a dashboard page (dashboard.html), where all the operations
            on the blogger’s posts can be performed seamlessly.`,
        projectSubDescription: {
            requirements: `API key, OAuth 2.0 (Bearer Token), Blogger ID , Resources URIs`,
            tools: `Postman`,
            skills: `Vanilla JS, Fect API, async await, promises, SASS, Bootstrap, request’s headers and body`,
            projectAim: `Exploring Google’s Blogger REST API`
        },
        projectLink: 'https://aniketbhalla2544.github.io/GoogleBloggerAPI_Proj/index.html',
        projImg1: googleBloggerProjImg1,
        projImg2: googleBloggerProjImg2,
    },

    {
        projectHeading: 'course hunt',
        projectDescription: `This is an API based project where an http GET request is being
            made to Google's YouTube API to fetch related videos as response to the searched
            context. The API delivers and filters the data according to the viewCount
            parameter, where the related videos with maximum number of views will be added
            to the response by the API. This project offers a search field on searchPage.html
            where the user can seamlessly search and fetch the results.`,
        projectSubDescription: {
            requirements: `YouTube’s API key , Resources URIs`,
            tools: `Postman`,
            skills: `Vanilla JS, SASS, Bootstrap, Fect API, async await and promises`,
            projectAim: `Exploring Google’s YouTube REST API`
        },
        projectLink: 'https://aniketbhalla2544.github.io/CourseHuntWebsite/index.html',
        projImg1: courseHuntProjImg1,
        projImg2: courseHuntProjImg2,
    },

    {
        projectHeading: 'gitHub API profile data fetcher',
        projectDescription: `This is a React based project which uses AXIOS npm module to make 
            a http  GET request to Github’s public REST API at a specific URI to get all the details
            regarding the user. is being made to Google's YouTube API to fetch related videos as
            response to the searched context.`,
        projectSubDescription: {
            requirements: `Github Username`,
            tools: `Postman`,
            skills: `React.js, axios npm module, async await, SASS, Bootstrap and promises`,
            projectAim: `Exploring Gihub’s REST API`
        },
        projectLink: 'https://aniketbhalla2544.github.io/githubapiasyncprofileproject/',
        projImg1: gitHubApiProjImg1,
        projImg2: gitHubApiProjImg2,
    },

    {
        projectHeading: 'w3schools courses page clone',
        projectDescription: `This is a React based project in which a clone of the newly launched
            courses page of w3schools website has been created. This is my first React based project
            which I made as a college project for a course module. The cloned webpage provides
            functionalities like keeping a count record of favourite courses marked by a red heart.`,
        projectSubDescription: {
            requirements: `A simple npm start command`,
            skills: `React.js, SASS and Bootstrap`,
            projectAim: `To make a clone of w3schools courses clone page using React.js`
        },
        projectLink: 'https://aniketbhalla2544.github.io/w3schoolscoursesclone/',
        projImg1: w3SchoolProjImg1,
        projImg2: w3SchoolProjImg2,
    },

    {
        projectHeading: 'fruits website',
        projectDescription: `This website mainly uses JQuery to provide the fruit options functionality 
            to the user for switching between multiple fruit options. I really enjoyed implementing the functionality
            through JQuery and designing it with Bootstrap and SASS.`,
        projectSubDescription: {
            skills: `JQuery, SASS and Bootstrap`,
            projectAim: `To make a highly interactive webpage with friendly UX`
        },
        projectLink: 'https://aniketbhalla2544.github.io/FruitsFunctionalWebsite/',
        projImg1: fruitsWebsiteProjImg1,
        projImg2: fruitsWebsiteProjImg2,
    }
];

export default projectsData;