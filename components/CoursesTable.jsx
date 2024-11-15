import React, { useEffect, useState } from 'react'
import getData from '../utils/getData'
import { Table, Tab, Menu, Icon, Pagination } from 'semantic-ui-react'
import CourseRow from './CourseRow'

// This component populates the Courses Table, pagination is used to create a more digestible viewing experience
// pagination help from: https://www.codementor.io/@maseh87/paginating-a-react-app-with-semantic-ui-x1g4a0t79

// Component Crumbs: [>> CoursesTable <<] > CourseRow
// Semantic UI

const CoursesTable = () => {
    // instance vars
    const [loaded, setLoaded] = useState(false);
    const [courseObj, setCourseObj] = useState([]);
    const [activePage, setActivePage] = useState();

    // pagination vars
    const [dataLength, setDataLength] = useState([]);
    const [dataPerPage] = useState(5);
    const [pageData, setPageData] = useState([]);

    React.useEffect(() => {
        getData('course/')
            .then((json) => {
                setLoaded(true);
                setCourseObj(json);
                setActivePage(1);
            })
    }, []);

    // get length of data
    // create a new array based on the current page number
    useEffect(() => {
        if (courseObj) {
            setDataLength(courseObj.length);
            const startIndex = (activePage - 1) * dataPerPage;
            const endIndex = startIndex + dataPerPage;
            setPageData(courseObj.slice(startIndex, endIndex));
        }
    }, [activePage]);

    // method called when page is changed on pagination element
    const changePage = (e, pageInfo) => {
        setActivePage(pageInfo.activePage)
    };

    if (!loaded) return (
        <Tab.Pane loading></Tab.Pane>
    )

    return (
        <div className="courseContainer">
            <h2>Courses</h2>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {pageData.map((p, index) =>
                        <CourseRow {...p} key={index} />
                    )}
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a'>
                                    <Pagination
                                        activePage={activePage}
                                        totalPages={Math.ceil(dataLength / dataPerPage)}
                                        boundaryRange={0}
                                        onPageChange={changePage}
                                    />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}

export default CoursesTable