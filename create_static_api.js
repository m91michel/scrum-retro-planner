const API = require('static-api-generator');
const activityApi = new API({
    addIdToFiles: true,
    blueprint: 'content/:type/:activity',
    outputPath: 'dist/api'
  });

  activityApi.generate({
    endpoints: ['type', 'activity'],
    root: 'type'
  });