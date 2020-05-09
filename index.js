// GIVEN the developer has a GitHub profile and a repository

//WHEN prompted for the developer's GitHub username and repo specific information

//THEN a README for the repo is generated

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
};
