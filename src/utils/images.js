const imageList = [
  {
    id: "accessibility_standards.png",
    width: 1080,
    height: 1620,
    title: 'accessibility standards',
    description: 'the accessibility standards available to select from when using axe-core enginer'
  },
  {
    id: "axe-core-react_code.png",
    width: 1080,
    height: 1426,
    title: 'axe core react package',
    description: 'the accessibility standards available to select from when using axe-core enginer'
  },
  {
    id: "axe-core-react_output.png",
    width: 1080,
    height: 1440,
    title: 'axe core console output',
    description: 'the accessibility standards available to select from when using axe-core enginer'
  },
  {
    id: "eslint_output.png",
    width: 1080,
    height: 716,
    title: 'eslint output',
    description: 'the accessibility standards available to select from when using axe-core enginer'
  },
  {
    id: "github_workflow.png",
    width: 1080,
    height: 1620,
    title: 'github actions workflow',
    description: 'the accessibility standards available to select from when using axe-core enginer'
  },
  {
    id: "google_lighthouse_score.png",
    width: 1080,
    height: 718,
    title: 'google lighthouse score',
    description: 'the accessibility standards available to select from when using axe-core enginer'
  },
  {
    id: "husky_precommit_fail.png",
    width: 1080,
    height: 1620,
    title: 'husky precommit fail',
    description: 'the accessibility standards available to select from when using axe-core enginer'
  },
  {
    id: "inline_linting.png",
    width: 1080,
    height: 1620,
    title: 'inline linting',
    description: 'the accessibility standards available to select from when using axe-core enginer'
  },
  {
    id: "wave_dashboard.png",
    width: 1080,
    height: 720,
    title: 'wave dashboard',
    description: 'the accessibility standards available to select from when using axe-core enginer'
  },
  {
    id: "wave_overlay.png",
    width: 1080,
    height: 1620,
    title: 'wave overlay',
    description: 'the accessibility standards available to select from when using axe-core enginer'
  }
];

const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

const images = imageList.map((img, index) => {
  const id = img.id
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
        height: breakpointHeight
      };
    })
  };
});

export default images;
