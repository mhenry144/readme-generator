const generateReadMe = (data) => {
  return `
  <a href="${data.link}" title="${data.name}"</a>
  
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
