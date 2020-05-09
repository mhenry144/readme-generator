// GIVEN the developer has a GitHub profile and a repository

//WHEN prompted for the developer's GitHub username and repo specific information

//THEN a README for the repo is generated
const prompt = require("inquirer").createPromptModule();
const fs = require("fs");
const githubAPI = require("./githubAPI.js");

const generateReadMe = require("./generateReadMe.js");

const generateMD = (fileName, data) => {
  fs.writeFile(fileName + ".md", data, (error) =>
    error ? console.error(error) : console.log(`${fileName + ".md"} generated!`)
  );
};

const init = async (_) => {
  let object = {};
  do {
    const { userName, repository } = await prompt([
      {
        type: "input",
        name: "userName",
        message: "What is your Github user name?",
      },
      {
        type: "input",
        name: "repository",
        message: "What is your Github repository name?",
      },
    ]);
    object = await githubAPI.getUser(userName, repository);
    if (!object) {
      console.error("Repo not found!");
    } else {
      console.log(`${object.fullName} found!`);
    }
  } while (!object);

  Object.assign(
    object,
    await prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title project?",
      },
      {
        type: "input",
        name: "desc",
        message: "What is the description?",
      },
      {
        type: "input",
        name: "toc",
        message: "What is the table of contents?",
      },
      {
        type: "input",
        name: "inst",
        message: "Any installation instructions?",
      },
      {
        type: "input",
        name: "usage",
        message: "What is the Usage for?",
      },
      {
        type: "input",
        name: "lic",
        message: "Any Licenses?",
      },
      {
        type: "input",
        name: "contr",
        message: "Who contributed to the project?",
      },
      {
        type: "input",
        name: "questions",
        message: "Any questions?",
      },
    ])
  );
  generateMD(object.title, await generateReadMe(object));
};

init();
