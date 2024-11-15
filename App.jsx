// useState so we get redraws (and the vars are available throughout)
import { useState } from 'react'
import React from 'react'
import './App.css'
import getData from './utils/getData';
// add my components
import MainTabs from './components/MainTabs';
import PeopleTabs from './components/PeopleTabs';

function App() {
  // create state
  // const [getter, setter] = useState(init)
  const [loaded, setLoaded] = useState(false);
  const [aboutObj, setAboutObj] = useState();

  // go get the data
  // useEffect pushes stuff into an array, hence the brackets as the second param.
  React.useEffect(()=>{
    // call getData
    getData('about/') // <- endpoint goes here
      .then((json)=> { // <- json here is the object we are seeing in console, it is the data we just fetched.
        // console.log('here', json);
        setLoaded(true);
        setAboutObj(json);
      })
  }, []);

  // show loading when we don't have data yet
  if (!loaded) return (
    <>
      <h1>Welcome to the iSchool Website!</h1>
      <h2>Loading...</h2>
    </>
  )

  return (
    <>
      <div className="stick">
        <h1>Welcome to the iSchool Website!</h1>
      </div>
      <div className="App">
        {/* get about */}
        <h2>{aboutObj.title}</h2>
        <h3>{aboutObj.description}</h3>
        <div className="aboutQuote">
          <h4>{aboutObj.quote}</h4>
          <h4>-- {aboutObj.quoteAuthor}</h4>
        </div>
        <br />
        <hr/>
        {/* space for all other components */}
        <MainTabs/>
      </div>
    </>
  )
}

export default App
