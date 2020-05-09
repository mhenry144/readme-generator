const generateReadMe = (data) => {
  return `
  
  # ${data.title.toUpperCase()}
  
  _Repository created by ${data.name}_
  
  __Description:__
  ${data.desc}
  
  __Installation:__
  ${data.inst}
  
  __Usage:__
  ${data.usage}
  
  __Contributors:__
  ${data.contr}
  
  __Tests:__
  ${data.test}
  
  __Questions:__
  ${data.questions}

  __Table of Contents:__
  ${data.toc}
  
  ![License: ${
    data.lic ? data.lic : "None"
  }](https://img.shields.io/badge/License-${
    data.lic ? data.lic : "None"
  }-brightgreen)
  `;
};

module.exports = generateReadMe;
