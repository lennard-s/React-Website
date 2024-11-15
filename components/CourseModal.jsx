import React, { useState } from 'react'
import getData from '../utils/getData'
import { Button, Modal } from 'semantic-ui-react'

// this component builds a modal for each course listen under a given minor

// Component Crumbs: MinorGroup > MinorCard > MinorModal > [>> CourseModal <<]
// Semantic UI

function CourseModal({
    courseTitle
}) {
    const [open, setOpen] = React.useState(false)
    const [courseObj, setCourseObj] = useState([]);

    // get the relevant course object
    React.useEffect(() => {
        getData(`course/courseID=${courseTitle}`)
            .then((json) => {
                setCourseObj(json);
            })
    }, []);

    return (
        <Modal
            dimmer={'blurring'}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={
                <Button style={{ margin: '.25em' }}>
                    {courseTitle}
                </Button>
            }
        >
            <Modal.Header>{courseTitle}</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    {courseObj && (
                        <>
                            <h4>{courseObj.title}</h4>
                            <p>{courseObj.description}</p>
                        </>
                    )}
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

export default CourseModal