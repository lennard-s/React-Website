import React, { useState, useEffect } from 'react'
import getData from '../utils/getData'
import { Tab } from 'semantic-ui-react'
import MinorCard from "./MinorCard";

// This component populates the Minors tab with cards for each Minor 

// Component Crumbs: [>> MinorGroup <<] > MinorCard > MinorModal > CourseModal 
// Semantic UI

const MinorGroup = () => {
    // instance vars
    const [loaded, setLoaded] = useState(false);
    const [minObj, setMinObj] = useState();

    // get data
    useEffect(() => {
        getData('minors/')
            .then((json) => {
                setLoaded(true);
                setMinObj(json);
            })
    }, []);

    if (!loaded) return (
        <Tab.Pane loading></Tab.Pane>
    )

    return (
        <>
            <div className="minorCards">
                {minObj.UgMinors.map((p, index) =>
                    <div className="minorItem" key={index}>
                        <MinorCard {...p} />
                    </div>
                )}
            </div>
        </>
    )
}

export default MinorGroup