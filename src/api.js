// Adaptador del endpoint url
const fetchData = (url, method = 'GET', data) => 
 fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(data => data.json())
  .catch(error => console.log('Error:', error));

export { fetchData }