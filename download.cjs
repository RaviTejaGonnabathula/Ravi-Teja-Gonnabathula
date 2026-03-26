const https = require('https');
const fs = require('fs');
const path = require('path');

const targetPath = path.join(process.cwd(), 'public', 'profile.jpg');
const file = fs.createWriteStream(targetPath);

https.get('https://github.com/RaviTejaGonnabathula.png', function(response) {
  if (response.statusCode === 301 || response.statusCode === 302) {
    https.get(response.headers.location, function(res) {
      res.pipe(file);
      file.on('finish', function() {
        file.close();
        console.log('Download completed');
      });
    });
  } else {
    response.pipe(file);
    file.on('finish', function() {
      file.close();
      console.log('Download completed');
    });
  }
}).on('error', function(err) {
  fs.unlink(targetPath, () => {});
  console.error('Error downloading:', err.message);
});
