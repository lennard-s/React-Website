import React from 'react'
import { Table } from 'semantic-ui-react'

// this component populates the cells in the Cretificate table

// Component Crumbs: DegreeTabs > DegreeTable > [>> CertificateRow <<] 
// Semantic UI

export default function CertificateRow({
    degreeName, availableCertificates
}) {
    return (
        <>
            {degreeName === "graduate advanced certificates" &&
                <Table.Row>
                    <Table.Cell>{availableCertificates.map((p, index) =>
                        <li key={index}>{p}</li>
                    )}
                    </Table.Cell>
                </Table.Row>
            }
        </>
    )
}