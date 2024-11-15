import React, { useState } from 'react'
import getData from '../utils/getData'
import { Tab } from 'semantic-ui-react'
import PeopleGroup from './PeopleGroup'

// This component populates Faculty and Staff tabs

// Component Crumbs: [>> PeopleTabs <<] > PeopleGroup > PeopleModal
// Semantic UI

const PeopleTabs = () => {
    // instance vars
    const [loaded, setLoaded] = useState(false);
    const [pepObj, setPepObj] = useState();

    const panes = [
        {
            menuItem: 'Faculty', render: () => <Tab.Pane>
                <PeopleGroup title="Faculty" peopleGroupObject={pepObj.faculty} />
            </Tab.Pane>
        },
        {
            menuItem: 'Staff', render: () => <Tab.Pane>
                <PeopleGroup title="Staff" peopleGroupObject={pepObj.staff} />
            </Tab.Pane>
        }
    ]

    React.useEffect(() => {
        getData('people/')
            .then((json) => {
                setLoaded(true);
                setPepObj(json);
            })
    }, []);

    if (!loaded) return (
        <Tab.Pane loading></Tab.Pane>
    )

    return (
        <>
            <h1>{pepObj.title}</h1>
            <h3>{pepObj.subTitle}</h3>
            <Tab panes={panes} />
        </>
    )
}

export default PeopleTabs