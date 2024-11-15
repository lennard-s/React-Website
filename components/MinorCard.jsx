import React from 'react'
import { Card } from 'semantic-ui-react'
import MinorModal from './MinorModal'

// this component populates each Minor Card with the appropriate information, including Modals to view additional info

// Component Crumbs: MinorGroup > [>> MinorCard <<] > MinorModal > CourseModal
// Semantic UI

const MinorCard = ({
    name, title, description, courses, note
}) => (
    <Card style={{ minHeight: '212px' }}>
        <Card.Content>
            <Card.Header>
                {name &&
                    name
                }
            </Card.Header>
            <Card.Meta>
                <hr />
            </Card.Meta>
            <Card.Description>
                {title &&
                    title
                }
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <MinorModal data={courses} title={'Courses'} />
            </a>
            <a>
                <MinorModal data={description} title={'About'} />
            </a>
            {note &&
                <a>
                    <MinorModal data={note} title={'Note'} />
                </a>
            }
        </Card.Content>
    </Card>
)

export default MinorCard