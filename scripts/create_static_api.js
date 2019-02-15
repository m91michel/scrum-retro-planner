const API = require('static-api-generator'),
      fs = require('fs');
const activityApi = new API({
    addIdToFiles: false,
    blueprint: 'content/:activity',
    outputPath: 'dist/api'
  });

activityApi.generate({
    endpoints: ['activity'],
    root: 'activity',
    entriesPerPage: 500
  }).then(renameFile);

function renameFile() {
    fs.unlinkSync('dist/api/activities.json');
    fs.rename('dist/api/.json', 'dist/api/activities.json', function(err) {
      if ( err ) console.log('ERROR: ' + err);
    });
    fs.copyFile('dist/api/activities.json', 'src/api/activities.json', function(err) {
      if ( err ) console.log('ERROR: ' + err)
    });
}