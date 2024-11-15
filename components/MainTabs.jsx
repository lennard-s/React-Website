import React from 'react'
import { Tab } from 'semantic-ui-react'
import DegreeTabs from './DegreeTabs'
import PeopleTabs from './PeopleTabs'
import CoursesTable from './CoursesTable'
import MinorGroup from './MinorGroup'
import EmploymentTabs from './EmploymentTabs'

// this component is responsible for the main navigation tabs (degrees, minors, courses, employment, people)

// Semantic UI & mui

const panes = [
    { menuItem: 'Degrees', render: () => <Tab.Pane attached={false}><DegreeTabs /></Tab.Pane> },
    { menuItem: 'Minors', render: () => <Tab.Pane attached={false}><MinorGroup /></Tab.Pane> },
    { menuItem: 'Courses', render: () => <Tab.Pane attached={false}><CoursesTable /></Tab.Pane> },
    { menuItem: 'Employment', render: () => <Tab.Pane attached={false}><EmploymentTabs /></Tab.Pane> },
    { menuItem: 'People', render: () => <Tab.Pane attached={false}><PeopleTabs /></Tab.Pane> },
]

const MainTabs = () => <Tab menu={{ secondary: true, pointing: true }} panes={panes} />

export default MainTabs