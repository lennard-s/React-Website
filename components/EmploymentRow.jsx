import React from 'react'
import { Table } from 'semantic-ui-react'

// this component populates the table rows for both the Co-op Table and Employment Table

// Component Crumbs: EmploymentTabs > EmploymentTable > [>> EmploymentRow <<]
// Semantic UI

export default function EmploymentRow({
    objectTitle, title, employer, degree, city, term, startDate
}) {
    return (
        <>
            {objectTitle == 'Co-op Table' &&
                <Table.Row>
                    <Table.Cell>{degree}</Table.Cell>
                    <Table.Cell>{employer}</Table.Cell>
                    <Table.Cell>{city}</Table.Cell>
                    <Table.Cell>{term}</Table.Cell>
                </Table.Row>
            }
            {objectTitle == 'Employment Table' &&
                <Table.Row>
                    <Table.Cell>{degree}</Table.Cell>
                    <Table.Cell>{employer}</Table.Cell>
                    <Table.Cell>{city}</Table.Cell>
                    <Table.Cell>{title}</Table.Cell>
                    <Table.Cell>{startDate}</Table.Cell>
                </Table.Row>
            }
        </>
    )
}