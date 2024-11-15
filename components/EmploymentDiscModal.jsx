import React from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'

// This component populates the descriptor modals for the employment page

// Component Crumbs: EmploymentTabs > [>> EmploymentDiscModal <<]
// Semantic UI

function EmploymentDiscModal({
    title, description
}) {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            dimmer={'blurring'}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button style={{ margin: '.25em' }}>
                {title === 'Employment' &&
                    <><Icon name='dollar sign' /><span>Employment</span></>
                }
                {title === 'Cooperative Education' &&
                    <><Icon name='handshake' /><span>Coop Education</span></>
                }
            </Button>}
        >
            <Modal.Header>{title}</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <div>{description}</div>
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

export default EmploymentDiscModal