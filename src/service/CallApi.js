function CallApi() {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1c63c3d514mshd895c6733c49ce9p138bd9jsn0cc2346e2b79',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    return fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=5', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

export default CallApi