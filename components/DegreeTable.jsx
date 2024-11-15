import React from "react";
import { Table } from 'semantic-ui-react'
import DegreeRow from "./DegreeRow";
import CertificateRow from "./CertificateRow";

// this component generates a table for either undergrad. or grad. degrees

// Component Crumbs: DegreeTabs > [>> DegreeTable <<] > DegreeRow / CertificateRow 
// Semantic UI

const DegreeTable = ({ title, degreeGroupObject }) => {
    return (
        <>
            <h2>{title}</h2>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Degree Name</Table.HeaderCell>
                        <Table.HeaderCell>Concentrations</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {degreeGroupObject.map((p, index) =>
                        <DegreeRow {...p} key={`degree-${index}`} />
                    )}
                </Table.Body>
            </Table>
            {/* If there are certificates */}
            {title === "Graduate" &&
                <>
                    <hr />
                    <h4>Certificates</h4>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Available Certificates</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {degreeGroupObject.map((p, index) =>
                                <CertificateRow {...p} key={`certificate-${index}`} />
                            )}
                        </Table.Body>
                    </Table>
                </>
            }
        </>
    )
}

export default DegreeTable