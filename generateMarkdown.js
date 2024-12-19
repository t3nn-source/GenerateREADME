// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    GPLv3: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    Apache: '![License: Apache](https://img.shields.io/badge/License-Apache_2.0-green.svg)',
    BSD: '![License: BSD](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)',
  };
  if (!license) {
    return '';
  } else {
    return badges[license];
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: 'https://opensource.org/licenses/MIT',
    GPLv3: 'https://www.gnu.org/licenses/gpl-3.0',
    Apache: 'https://www.apache.org/licenses/LICENSE-2.0',
    BSD: 'https://opensource.org/licenses/BSD-3-Clause',
  };
  if (!license) {
    return '';
  }
  else {
    return licenseLinks[license];
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license.trim() === '') {
      return ''; // Return an empty string if no license is provided
  }

  return `
This project is licensed under the **${license}** license.`;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const licenseBadge = renderLicenseBadge(answers.license);
    const licenseSection = renderLicenseSection(answers.license);

  return `# ${answers.title}


  ${licenseBadge}

## Description
${answers.description}

## Installation
\`\`\`
${answers.installation}
\`\`\`

## Usage
${answers.usage}

## Contributors
${answers.contributing}

## Tests
\`\`\`
${answers.tests}
\`\`\`

## License
${licenseSection}

## Questions
If you have any questions, feel free to reach out:
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}
    `;
};


export default generateMarkdown;
