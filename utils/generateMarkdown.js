// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ''; // empty if no license is provided
  }

  return `- [License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `## License
  This project is license under the ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Installation
  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage
  \`\`\`
  ${data.usage}
  \`\`\`

  ## Contribution
  \`\`\`
  ${data.contribution}

  ## Tests
  \`\`\`
  ${data.tests}
  \`\`\`

  ${renderLicenseSection(data.license)}

  ## License Link
  ${renderLicenseLink(data.license)}
`;
}

export default generateMarkdown;
