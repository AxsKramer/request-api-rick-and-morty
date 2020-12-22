const  XMTLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API = `https://rickandmortyapi.com/api/character/`;

const fetchData = (urlApi) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMTLHttpRequest();
    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = (event) => {
      if(xhttp.readyState === 4){
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error('Error' + urlApi));
      }
    }
    xhttp.send();  
  });
}

fetchData(API).then(data => {
  console.log(data.info.count);
  return fetchData(`${API}${data.results[0].id}`)
}).then(data => {
  console.log(data.name);
  return fetchData(data.origin.url);
}).then(data => {
  console.log(data.dimension);
}).catch(error => console.log(error));