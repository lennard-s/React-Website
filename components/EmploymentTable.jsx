import React, { useEffect, useState } from 'react'
import { Table, Menu, Icon, Pagination } from 'semantic-ui-react'
import EmploymentRow from "./EmploymentRow";

// This component populates the Co-op & Employment Tables, pagination is used to create a more digestible viewing experience
// pagination help from: https://www.codementor.io/@maseh87/paginating-a-react-app-with-semantic-ui-x1g4a0t79

// Component Crumbs: EmploymentTabs > [>> EmploymentTable <<] > EmploymentRow
// Semantic UI

const EmploymentTable = ({ title, employmentTableObject }) => {
    // instance vars
    const [activePage, setActivePage] = useState();
    const [courseObj, setCourseObj] = useState();
    var columnCount = 0;

    if (title === 'Co-op Table') {
        columnCount = 4;
    } else {
        columnCount = 5;
    }

    // pagination vars
    const [dataLength, setDataLength] = useState(0);
    const [dataPerPage] = useState(5);
    const [pageData, setPageData] = useState([]);

    // Update courseObj when title/object changes
    useEffect(() => {
        if (title === 'Co-op Table') {
            setCourseObj(employmentTableObject.coopInformation || []);
        } else if (title === 'Employment Table') {
            setCourseObj(employmentTableObject.professionalEmploymentInformation || []);
        }
        setActivePage(1);
    }, [title, employmentTableObject]);

    // get length of data
    // create a new array based on the current page number
    useEffect(() => {
        if (courseObj) {
            setDataLength(courseObj.length);
            const startIndex = (activePage - 1) * dataPerPage;
            const endIndex = startIndex + dataPerPage;
            setPageData(courseObj.slice(startIndex, endIndex));
        }
    }, [courseObj, activePage]);

    // method called when page is changed on pagination element
    const changePage = (e, pageInfo) => {
        setActivePage(pageInfo.activePage)
    };

    return (
        <>
            {/* we need to put out the title then iterate*/}
            <h2>{title}</h2>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        {title == 'Co-op Table' &&
                            <>
                                <Table.HeaderCell>Employer</Table.HeaderCell>
                                <Table.HeaderCell>Degree</Table.HeaderCell>
                                <Table.HeaderCell>City</Table.HeaderCell>
                                <Table.HeaderCell>Term</Table.HeaderCell>
                            </>
                        }
                        {title == 'Employment Table' &&
                            <>
                                <Table.HeaderCell>Employer</Table.HeaderCell>
                                <Table.HeaderCell>Degree</Table.HeaderCell>
                                <Table.HeaderCell>City</Table.HeaderCell>
                                <Table.HeaderCell>Title</Table.HeaderCell>
                                <Table.HeaderCell>Start Date</Table.HeaderCell>
                            </>
                        }
                    </Table.Row>
                </Table.Header>
                {title == 'Co-op Table' &&
                    <Table.Body>
                        {pageData.map((p, index) =>
                            <EmploymentRow objectTitle={title} {...p} key={index} />
                        )}
                    </Table.Body>
                }
                {title == 'Employment Table' &&
                    <Table.Body>
                        {pageData.map((p, index) =>
                            <EmploymentRow objectTitle={title}  {...p} key={index} />
                        )}
                    </Table.Body>
                }
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan={columnCount}>
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
        </>
    )
}

export default EmploymentTable