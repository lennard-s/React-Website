import React from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'
import CourseModal from './CourseModal'

// each modal is passed in the relevant information via the prop 'data'
// the 'Courses' modal will be filled with further modals to view each class' information

// Component Crumbs: MinorGroup > MinorCard > [>> MinorModal <<] > CourseModal 
// Semantic UI

function MinorModal({
    data, title
}) {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            dimmer={'blurring'}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={
                <Button style={{ margin: '.25em' }}>
                    {title === 'Courses' &&
                        <Icon name='info circle' />
                    }
                    {title === 'About' &&
                        <Icon name='pencil' />
                    }
                    {title === 'Note' &&
                        <Icon name='sticky note' />
                    }
                    {title}
                </Button>
            }
        >
            <Modal.Header>{title}</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    {title === 'Courses' &&
                        data.map((p, index) =>
                            <CourseModal courseTitle={p} key={index} />
                        )
                    }
                    {title != 'Courses' &&
                        <div>{data}</div>
                    }
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Close
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default MinorModal