// this method is for accessing the data at the uri
// it also has functionality to store data in localStorage, updating if the data is more than a day old

// const proxy = 'http://solace.ist.rit.edu/~dsbics/proxy/http://ist.rit.edu/api/';
const proxy = 'https://people.rit.edu/~dsbics/proxy/http://ist.rit.edu/api/';

// endpoint is the uri I want to hit - ex: 'about/'
async function getData(endpoint) {
    // need to make a key for the data to be stored 
    // store key as whatever is being accessed when getData is called
    const storageKey = `dataKey_${endpoint}`;
    const storedData = localStorage.getItem(storageKey);
    // need a timestamp paired with each stored item
    // also need current time to compare stored time against 
    const timeStamp = localStorage.getItem(`${storageKey}_timestamp`)
    const currentTime = new Date().getTime();

    // check if there is storedData and if it is expired
    if (storedData && timeStamp) {
        // add 1 day (in ms) to the stored time
        // if it is more than current time, data is expired
        const expirationTime = parseInt(timeStamp) + 24 * 60 * 60 * 1000;

        if (currentTime < expirationTime) {
            // data is not expired
            return JSON.parse(storedData);
        }
    }

    // if data does not exist or is expired
    // get the data with the base and the endpoint
    const result = await fetch(`${proxy}${endpoint}`);
    // save it (but turn it into json first)
    const newData = await result.json();
    const time = new Date().getTime().toString();

    // store data and timestamp in localStorage
    localStorage.setItem(storageKey, JSON.stringify(newData));
    localStorage.setItem(`${storageKey}_timestamp`, time)

    return newData;
}

export default getData;

