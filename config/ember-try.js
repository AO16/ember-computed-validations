module.exports = {
  scenarios: [
    {
      name: 'default',
      dependencies: { }
    },
    {
      name: 'ember-release',
      dependencies: {
        'ember': 'components/ember#release'
      },
      resolutions: {
        'ember': 'release'
      }
    },
    {
      name: 'ember-beta',
      dependencies: {
        'ember': 'components/ember#beta'
      },
      resolutions: {
        'ember': 'beta'
      }
    },
    {
      name: 'ember-canary',
      dependencies: {
        'ember': 'components/ember#canary'
      },
      resolutions: {
        'ember': 'canary'
      }
    },
    {
      name: 'ember-1.13',
      dependencies: {
        'ember': '~1.13.0'
      },
    },
    {
      name: 'ember-1.12',
      dependencies: {
        'ember': '~1.12.0'
      },
    },
    {
      name: 'ember-1.11',
      dependencies: {
        'ember': '~1.11.0'
      },
    },
    {
      name: 'ember-1.10',
      dependencies: {
        'ember': '~1.10.0'
      },
    }
  ]
};
