##stats
const path = require("path");
const fetch = require("node-fetch");
const fs = require("fs");

let stars = 0,
  page = 1;

const CountStars = async () => {
  let StarsData = await fetch(
    `https://api.github.com/users/SudhanPlayz/starred?per_page=100&page=${page}`
  ).then((res) => res.json());
  stars += StarsData.length;
  page++;
  if (StarsData.length === 100) CountStars();
  else WriteReadMe();
};

const WriteReadMe = async () => {
  //Get ReadMe path
  const ReadMe = path.join(__dirname, "..", "README.md");
  const date = new Date();

  //Fetching Info From Github API
  let UserData = await fetch("https://api.github.com/users/SudhanPlayz").then(
    (res) => res.json()
  );

  //Creating the text what we gonna save on ReadMe file
  const text = `<!-- You found this secret 👏 -->
<!--
    My secret things lol
    
    - I code more hours 
    - I am a gamer too 
    - I play minecraft, roblox, AMOUNG US ;-;
    - This readme.md is created using GitHub Codespaces 👀
    - I am also a YouTuber XD, make sure to sub ;-;
-->
    
<h1 align="center">Who am I?</h1>
<p align="center">Hello I'm Sudhan. I use typescript to code and there is nothing so special about me...</p>
## Hello, Im Sudhan <img src="https://raw.githubusercontent.com/SudhanPlayz/SudhanPlayz/master/images/WaveIcon.gif" width="30px">
\`\`\`js
const Sudhan = {
    Age: 14,
    Description: "${UserData.bio}",
    FavouriteLanguage: "Javascript/Typescript",
    OpenedIssues: {{ ISSUES }},
    OpenedPullRequests: {{ PULL_REQUESTS }},
    TotalCommits: {{ COMMITS }},
    Repositories: {
       Created: {{ REPOSITORIES }},
       Contributed: {{ REPOSITORIES_CONTRIBUTED_TO }}
    },
    CreatedAt: "${new Date(UserData.created_at).toString()}",
    Stars: ${stars},
    FavouriteThings: ["GitHub <3", "GitHub Copilot", "VS Code", "A Potato PC with 50kbps internet", "Docker"]
}; //I'm a Epic Object. UwU
\`\`\`
<hr>
<div>
<h3 align="left">Languages and Tools:</h3>
<p align="left"><a href="https://aws.amazon.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="40" height="40"/> </a> <a href="https://azure.microsoft.com/en-in/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" alt="azure" width="40" height="40"/> </a> <a href="https://www.gnu.org/software/bash/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="40" height="40"/> </a> <a href="https://www.blender.org/" target="_blank"> <img src="https://download.blender.org/branding/community/blender_community_badge_white.svg" alt="blender" width="40" height="40"/> </a> <a href="https://getbootstrap.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/cs/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.docker.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a> <a href="https://www.electronjs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg" alt="electron" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://www.figma.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> <a href="https://firebase.google.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a><a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.linux.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nextjs.org/" target="_blank"> <img src="https://cdn.worldvectorlogo.com/logos/nextjs-3.svg" alt="nextjs" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://github.com/puppeteer/puppeteer" target="_blank"> <img src="https://www.vectorlogo.zone/logos/pptrdev/pptrdev-official.svg" alt="puppeteer" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://reactnative.dev/img/header_logo.svg" alt="react" width="40" height="40"/> </a> <a href="https://sass-lang.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a></p>
</div>
## Stats
<hr>
<div align="center"><img src="https://github-profile-trophy.vercel.app/?username=SudhanPlayz&theme=dracula"></div>
![Profile Views](https://komarev.com/ghpvc/?username=SudhanPlayz&color=blueviolet)&nbsp;&nbsp;![Profile Followers](https://img.shields.io/badge/Followers-${
    UserData.followers
  }-blueviolet)&nbsp;&nbsp;![Profile Following](https://img.shields.io/badge/Following-${
    UserData.following
  }-blueviolet)&nbsp;&nbsp;![Profile Stars](https://img.shields.io/badge/Stars-${stars}-blueviolet)
Some of my epic coding stats here that i was doing this week 
<!--START_SECTION:waka-->
<!--END_SECTION:waka-->
<details>
    <summary><b>GitHub</b> Activity</summary>
    <img align="left" src="https://github-readme-stats.vercel.app/api?username=SudhanPlayz&theme=tokyonight"><img align="right" src="https://github-readme-stats.vercel.app/api/top-langs/?username=SudhanPlayz&theme=tokyonight&hide=batchfile">
    <img src="https://github-readme-streak-stats.herokuapp.com/?user=SudhanPlayz&theme=tokyonight">
</details>
<!-- Last updated on ${date.toString()} ;-;-->
<i>Last updated on ${date.getDate()}${
    date.getDate() === 1
      ? "st"
      : date.getDate() === 2
      ? "nd"
      : date.getDate() === 3
      ? "rd"
      : "th"
  } ${
    [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][date.getMonth()]
  } ${date.getFullYear()} using magic</i> ✨`;

  //Saving on readme.md
  fs.writeFileSync(ReadMe, text);
};

(() => {
    CountStars();
})()
