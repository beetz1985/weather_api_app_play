function CallApi({locationCity}) {

    const apiKey = `key=88f681c472d44de5b49120737222009`;
    const location = `&q=${locationCity}`;
    const corsProxy = `https://cors-anywhere.herokuapp.com/`;

    
    return fetch(`https://api.weatherapi.com/v1/forecast.json?${apiKey}${location}&days=1&aqi=no&alerts=no` )
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));


    
}

export default CallApi