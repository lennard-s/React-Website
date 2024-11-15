import React from 'react'
import { Table } from 'semantic-ui-react'

// this component populates the cells in the Degree tables

// Component Crumbs: DegreeTabs > DegreeTable > [>> DegreeRow <<]
// Semantic UI

export default function DegreeRow({
    degreeName, title, description, concentrations
}) {
    return (
        <>
            {degreeName != "graduate advanced certificates" &&
                <Table.Row>
                    <Table.Cell>{title}</Table.Cell>
                    <Table.Cell>{degreeName}</Table.Cell>
                    <Table.Cell>{concentrations}</Table.Cell>
                    <Table.Cell>{description}</Table.Cell>
                </Table.Row>
            }
        </>
    )
}