const options = {method: 'GET', headers: {projectId: 'f104bi07c490'}};

fetch('https://academics.newtonschool.co/api/v1/music/song', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));