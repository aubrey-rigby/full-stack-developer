import SmokingGun from "./projectImages/smoking-gun.png"

const Projects = [
    {
        name: "The Smoking Gun",
        image: SmokingGun,
        description: "A customizable, digital bullet journal where you can store different kinds of information all in one place. Built mobile-first, this application will allow you to stay organized both at home and on the go. It's easy to add, edit and delete lists, keep track of daily habits, manage your calendar, throw your thoughts into the journal or take some time to yourself and doodle away with the ability to save or download your own doodles.",
        utilizes: "Utilizes React, MongoDB, Mongoose, Axios, Express, Material-UI, Firebase, FullCalendar, Chart.js, Gravatar, Geolocation, various APIs",
        repo: "https://github.com/UWB-Bandits/the-smoking-gun",
        app: "https://the-smoking-gun.herokuapp.com/",
        login: "Guest login: test@presentation.com Password: password",
    },
    {
        name: "React Employee Directory",
        image: "https://github.com/aubrey-rigby/full-stack-developer/blob/main/src/utils/projectImages/react-employee-directory.gif?raw=true",
        description: "This Employee Directory is created using the React library and JSX. I was able to use components to easily respond to user interaction and inputs. 20 employees are randomly generated when the page loads, and their information is shown. Users are able to search for an employee by their name, phone number, or email. Users are also able to sort the order of the employees by these fields.",
        utilizes: "Utilizes React, JSX, Axios, Bootstrap, randomuser.me",
        repo: "https://github.com/aubrey-rigby/react-employee-directory",
        app: "https://aubrey-rigby.github.io/react-employee-directory/",
        login: "",
    },
    {
        name: "gifNjelly",
        image: "https://github.com/aubrey-rigby/full-stack-developer/blob/main/src/utils/projectImages/gifNjelly.gif?raw=true",
        login: "Guest login: guest@guest.com Password: password ",
        description: "gifNjelly users are able caption gifs that are currently trending. Other users are then able to vote on these captions.",
        utilizes: "Utilizes SweetAlert, Handlebars, Giphy API, Express, Sequelize, MySQL, Passport, BCrypt, and Axios.",
        repo: "https://github.com/TommyWillen/gifNjelly",
        app: "https://mighty-fjord-82642.herokuapp.com/",
    },
    {
        name: "Budget Tracker",
        image: "https://github.com/aubrey-rigby/full-stack-developer/blob/main/src/utils/projectImages/budget-tracker.gif?raw=true",
        description: "This Budget Tracker is a Progressive Web Application which allows users to access the application and input transactions while offline. Offline trasactions are stored using the browser's IndexDB. Static application files and data are cached through the use of a webmanifest and service workers.",
        utilizes:"Utilizes IndexDB, Mongoose, webmanifest, service-workers",
        repo: "https://github.com/aubrey-rigby/budget-tracker",
        app: "https://damp-ridge-75773.herokuapp.com/",
        login: "",
    },
    {
        name: "!Bored",
        image: "https://github.com/aubrey-rigby/full-stack-developer/blob/main/src/utils/projectImages/bored.gif?raw=true",
        description: "!Bored is an application which pulls event, attraction, and weather data from a user’s location to recommend activities.",
        utilizes:"Utilizes HTML, CSS, JavaScript, JQuery, Semantic UI, several APIs",
        repo: "https://github.com/dancornutt/UWB-ActivityApp",
        app: "https://dancornutt.github.io/UWB-ActivityApp/",
        login: "",
    },
    {
        name: "Employee Tracker",
        image: "https://github.com/aubrey-rigby/full-stack-developer/blob/main/src/utils/projectImages/employee-tracker.gif?raw=true",
        description: "This Employee Tracker has the ability to create, read, update, and delete (CRUD) departments, roles, and employees in the terminal.",
        utilizes:"Utilizes Node.js and the Inquirer, MySQL, and Console.Table npm packages.",
        repo: "https://github.com/aubrey-rigby/employee-tracker",
        app: "https://drive.google.com/file/d/1mOiRJwkBGZSegMi-PFcsChkJawuz-cvD/view",
        login: "",
    },
    {
        name: "Eat-da-Burger",
        image: "https://github.com/aubrey-rigby/full-stack-developer/blob/main/src/utils/projectImages/eat-da-burger.gif?raw=true",
        description: "Eat-da-Burger takes in burgers and stores them in a database along with whether or not they have been devoured.",
        utilizes: "Utilizes Handlebars, MVC framework, ORMs, Express.js, MySQL as well as GET, POST, and PUT routes.",
        repo: "https://github.com/aubrey-rigby/burger",
        app: "https://shrouded-badlands-13796.herokuapp.com/",
        login: "",
    },
]

export default Projects