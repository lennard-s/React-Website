import React from 'react'
import { Table } from 'semantic-ui-react'

// this component populates the cells in the Courses table

// Component Crumbs: CoursesTable > [>> CourseRow <<]
// Semantic UI

export default function CourseRow({
    courseID, title, description
}) {
    return (
        <>
            <Table.Row>
                <Table.Cell>{courseID}</Table.Cell>
                <Table.Cell>{title}</Table.Cell>
                <Table.Cell>{description}</Table.Cell>
            </Table.Row>
        </>
    )
}