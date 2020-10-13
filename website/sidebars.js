const examples = require('./examples');

module.exports = {
  someSidebar: {
    'Prologue': [
      'change-log',
      'migrating-0',
      'contributing',
    ],
    'Getting Started': [
      'getting-started',
      'installation',
      'tour',
      'tutorial-hello',
      'tutorial-beer',
      'tutorial-monitor',
      'tutorial-counter',
      'tutorial-todo',
    ],
    'Guide': [
      'guide',
      'architecture',
      'scripts',
      'apps',
      'pages',
      'layout',
      'cards',
      'buffers',
      'components',
      'arguments',
      'state',
      'routing',
      'realtime',
      'expressions',
      'files',
      'plotting',
      'graphics',
      'logging',
      'development',
      'browser-testing',
      'configuration',
      'backup',
    ],
    'Enterprise': [
      'enterprise/index',
      'enterprise/basic-concepts',
      'enterprise/developer-guide',
    ],
    'Examples': examples.map(e => `examples/${e.slug}`),
    'API': [
      'api/index',
      'api/core',
      'api/ui',
      'api/server',
      'api/graphics',
      'api/types',
      'api/test',
    ],
  },
};
