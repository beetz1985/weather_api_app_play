function CallApi({locationCity}) {

    const apiKey = `key=88f681c472d44de5b49120737222009`;
    const location = `&q=${locationCity}`;
    const corsProxy = `https://cors-anywhere.herokuapp.com/`;

    
    return fetch(`http://api.weatherapi.com/v1/current.json?${apiKey}${location}` )
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));


    
}

export default CallApi