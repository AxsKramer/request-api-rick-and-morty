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

const getDataFromAPI = async (url_API) => {
  try{
    const data1 = await fetchData(url_API);
    const data2 = await fetchData(`${url_API}${data1.results[0].id}`);
    const data3 = await fetchData(data2.origin.url); 
    console.log(data1.info.count);
    console.log(data2.name);
    console.log(data3.dimension);
  }
  catch (error){
    console.log(error);
  }
}

getDataFromAPI(API)