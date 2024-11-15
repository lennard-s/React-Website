import React, { useState } from 'react'
import getData from '../utils/getData'
import { Tab } from 'semantic-ui-react'
import DegreeTable from './DegreeTable'

// This component populates the undergraduate and graduate tabs. 

// Component Crumbs: [>> DegreeTabs <<] > DegreeTable > DegreeRow/CertificateRow 
// Semantic UI

const DegreeTabs = () => {
    const [loaded, setLoaded] = useState(false);
    const [degObj, setDegObj] = useState();

    const panes = [
        {
            menuItem: 'Undergraduate', render: () => <Tab.Pane>
                <DegreeTable title="Undergraduate" degreeGroupObject={degObj.undergraduate} />
            </Tab.Pane>
        },
        {
            menuItem: 'Graduate', render: () => <Tab.Pane>
                <DegreeTable title="Graduate" degreeGroupObject={degObj.graduate} />
            </Tab.Pane>
        }
    ]

    React.useEffect(() => {
        getData('degrees/')
            .then((json) => {
                setLoaded(true);
                setDegObj(json);
            })
    }, []);

    if (!loaded) return (
        <Tab.Pane loading></Tab.Pane>
    )

    return (
        <>
            <Tab panes={panes} />
        </>
    )

}

export default DegreeTabs