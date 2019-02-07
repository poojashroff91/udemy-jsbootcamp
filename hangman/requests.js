const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    if(response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Unable to fetch the puzzle');
    }
}


const getPuzzleOld = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then( (response) => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch the puzzle');
        }
    }).then ((data) => {
        return data.puzzle;
    });
}


/*const getPuzzle = (wordCount) => new Promise ( (resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            resolve(data.puzzle);
        } else if (e.target.readyState === 4){
            reject('An error has taken place');
        }
    })

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
});*/


const getCountry = async (countryCode) =>{
    const response = await fetch('http://restcountries.eu/rest/v2/all');
    if(response.status === 200){
        const data = await response.json();
        return data.find((country) => country.alpha2Code === countryCode);
    } else {
        throw new Error ('Unable to get country');
    }
}

/*
const getCountry = (countryCode) => new Promise ( (resolve, reject) => {

    {
        const request = new XMLHttpRequest()
        request.addEventListener('readystatechange', (e) => {
            if(e.target.readyState === 4 && e.target.status === 200) {
                const countries = JSON.parse(e.target.responseText);
                const myCountry = countries.find((country) => country.alpha2Code === countryCode);
                resolve(myCountry);
            } else if (e.target.readyState === 4){
                reject('An error has taken place');
            }
        })
    
        request.open('GET', 'http://restcountries.eu/rest/v2/all')
        request.send();
    }

});
*/


/*
{
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4 && e.target.status === 200) {
            const countries = JSON.parse(e.target.responseText);
            const myCountry = countries.find((country) => country.alpha2Code === countryCode);
            callback(undefined, myCountry);
        } else if (e.target.readyState === 4){
            callback('An error has taken place', undefined);
        }
    })

    request.open('GET', 'http://restcountries.eu/rest/v2/all')
    request.send();
}

*/


const getLocation = async () => {
    const response = await fetch('http://ipinfo.io/json?token=3fe89a22358998');
    if(response.status === 200) {
        return response.json();
    } else {
        throw new Error('Unable to fetch location info');
    }
}


const getCurrentCountry = async () => {

    const location = await getLocation();
    const country = await getCountry(location.country);
    return country.name;

}