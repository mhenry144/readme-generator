// GIVEN the developer has a GitHub profile and a repository

//WHEN prompted for the developer's GitHub username and repo specific information

//THEN a README for the repo is generated

const fs = require("fs");
const githubAPI = require("./githubAPI.js");
const prompt = require("inquirer").createPromptModule();

const generateReadMe = require("./generateReadMe.js");

const generateMD = (fileName, data) => {
  fs.generateMD(fileName + ".md", data, (error) =>
    error ? console.error(error) : console.log(`${fileName + ".md"} generated!`)
  );
};

const init = async (_) => {
  let object = {};
  do {
    const { userName } = await prompt([
      {
        type: "input",
        name: "userName",
        message: "What is your Github user name?",
      },
    ]);
    const { Repository } = await prompt([
      {
        type: "input",
        name: "repository",
        message: "What is your Github repository name?",
      },
    ]);
    object = await api.getUser(User, Repository);
    if (!object) {
      console.error("Error: Repo not found!");
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
        type: "Description",
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
        message: "What are the installation installation instructions?",
      },
      {
        type: "input",
        name: "usage",
        message: "What is the Usage for?",
      },
      {
        type: "input",
        name: "lisc",
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
  generateMD(ojbect.title, await generateReadMe(object));
};

init();
