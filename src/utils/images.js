const imageList = [
  {
    id: "github_workflow.png",
    // width: 1080,
    // height: 1400,
    title: "Github Actions - Accessibility Testing Workflow",
    description:
      "This image depicts an accessibility testing workflow in Github Actions using the matrix approach. Each test suite executes the Cypress framework, directing it to use a different browser and device combination. Utilizing the Cypress-Axe package, axe-core is automatically integrated into the Cypress framework.",
  },
  {
    id: "accessibility_standards.png",
    // width: 1080,
    // height: 1620,
    title: "Axe-core Supported Accessibility Standards",
    description:
      "Using the Axe-core engine, teams can pick the exact standard they want to test.",
  },
  {
    id: "axe-core-react_code.png",
    // width: 1080,
    // height: 1426,
    title: "Axe-core React Package",
    description:
      "The axe-core react plugin can be implemented in 3 lines of code. You can see it in action for this site by opening your developer console (right click -> inspect -> console)",
  },
  {
    id: "axe-core-react_output.png",
    // width: 1080,
    // height: 1440,
    title: "Axe-core Console Output",
    description:
      "The axe-core react plugin prints all accessibility issues in the browser console during local development. The advantage of this approach is that tests are run against what is rendered in the browser window and not just a codebase, providing a higher issue discovery rate.",
  },
  {
    id: "inline_linting.png",
    // width: 1080,
    // height: 1620,
    title: "Inline Linting",
    description:
      "Implementation of live code linting in the repo will result in compliance issues being automatically flagged, without developers having to install or run any tools",
  },
  {
    id: "eslint_output.png",
    // width: 1080,
    // height: 716,
    title: "Eslint Output",
    description:
      "Sample output from linting the codebase using eslint and jsx-ally",
  },
  {
    id: "husky_precommit_fail.png",
    // width: 1080,
    // height: 1620,
    title: "Husky Precommit Fail",
    description:
      "This console output shows the result of implementing husky, eslint and jsx-ally to prevent code with accessibility issues from being committed.",
  },

  {
    id: "google_lighthouse_score.png",
    // width: 1080,
    // height: 718,
    title: "Google Lighthouse",
    description:
      "This open-source tool supported by Google provides insights into multiple areas of web application performance, including Accessibility.",
  },
  {
    id: "wave_dashboard.png",
    // width: 1080,
    // height: 720,
    title: "Wave Dashboard",
    description:
      "This is an open-source browser extension that provides comprehensive accessibility checks and is considered a best-in-class tool to assist in manual accessibility testing.",
  },
  {
    id: "wave_overlay.png",
    // width: 1080,
    // height: 1620,
    title: "Wave Overlay",
    description:
      "In addition to the compliance dashboard, Wave overlays the application with icons that direct testers to the exact location of accessibility issues.",
  },
];

const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

const images = imageList.map((img, index) => {
  const id = img.id;
  const width = img.width * 4;
  const height = img.height * 4;
  return {
    src: `/images/${id}`,
    key: `${index}`,
    width,
    height,
    title: img.title,
    description: img.description,
    srcSet: breakpoints.map((breakpoint) => {
      const breakpointHeight = Math.round((height / width) * breakpoint);
      return {
        src: `/images/${id}`,
        width: breakpoint,
        height: breakpointHeight,
      };
    }),
  };
});

export default images;
