import React, { useState } from 'react'
import getData from '../utils/getData'
import { Tab } from 'semantic-ui-react'
import EmploymentGroup from './EmploymentGroup'
import EmploymentDiscModal from './EmploymentDiscModal'
import EmploymentTable from './EmploymentTable'

// This component populates Employment Tab, nested tabs for further sections

// Component Crumbs: [>> EmploymentTabs <<] > EmploymentDiscModal
//                   [>> EmploymentTabs <<] > EmploymentGroup 
//                   [>> EmploymentTabs <<] > EmploymentTable > EmploymentRow
// Semantic UI

const EmploymentTabs = () => {
    const [loaded, setLoaded] = useState(false);
    const [empObj, setEmpObj] = useState();

    const panes = [
        {
            menuItem: 'Degree Statistics', render: () => <Tab.Pane>
                <EmploymentGroup title="Degree Statistics" employmentGroupObject={empObj.degreeStatistics} />
            </Tab.Pane>
        },
        {
            menuItem: 'Employers', render: () => <Tab.Pane>
                <EmploymentGroup title="Employers" employmentGroupObject={empObj.employers} />
            </Tab.Pane>
        },
        {
            menuItem: 'Careers', render: () => <Tab.Pane>
                <EmploymentGroup title="Careers" employmentGroupObject={empObj.careers} />
            </Tab.Pane>
        },
        {
            menuItem: 'Co-op Table', render: () => <Tab.Pane>
                <EmploymentTable title="Co-op Table" employmentTableObject={empObj.coopTable} />
            </Tab.Pane>
        },
        {
            menuItem: 'Employment Table', render: () => <Tab.Pane>
                <EmploymentTable title="Employment Table" employmentTableObject={empObj.employmentTable} />
            </Tab.Pane>
        }
    ]

    React.useEffect(() => {
        getData('employment/')
            .then((json) => {
                setLoaded(true);
                setEmpObj(json);
            })
    }, []);

    if (!loaded) return (
        <Tab.Pane loading></Tab.Pane>
    )

    return (
        <>
            <h1>{empObj.introduction.title}</h1>
            {/* Place two modals for employment & coop descriptions */}
            {empObj.introduction.content.map((p, index) =>
                <a key={index}><EmploymentDiscModal {...p} /></a>
            )}
            <Tab panes={panes} />
        </>
    )
}

export default EmploymentTabs