import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, Header, Icon, Table } from 'semantic-ui-react';

// This component is where the modals are created for each individual person.
// Starts as a button on the person's card, then expands when clicked.

// Component Crumbs: PeopleTabs > PeopleGroup > [>> PeopleModal <<]
// Semantic UI & mui

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    borderRadius: '16px',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function PeopleModal({
    email, imagePath, facebook, name,
    interestArea, office, phone, tagline,
    website, username, twitter, title
}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button onClick={handleOpen}>{name}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h3" component="h2">
                        {name}
                    </Typography>
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                        {tagline}
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Typography id="modal-modal-title" variant="h5" component="h2" align='center'>
                        <img src={imagePath} alt={name} />
                    </Typography>

                    {/* using divider component from Semantic to organize person's info*/}
                    <div>
                        <Divider horizontal>
                            <Header as='h4'>
                                <Icon name='info circle' />
                                About
                            </Header>
                        </Divider>

                        <Table definition>
                            <Table.Body>
                                {office &&
                                    <Table.Row>
                                        <Table.Cell width={2}>Office</Table.Cell>
                                        <Table.Cell>{office}</Table.Cell>
                                    </Table.Row>
                                }
                                {interestArea &&
                                    <Table.Row>
                                        <Table.Cell width={2}>Interests</Table.Cell>
                                        <Table.Cell>{interestArea}</Table.Cell>
                                    </Table.Row>
                                }
                                {username &&
                                    <Table.Row>
                                        <Table.Cell width={2}>Username</Table.Cell>
                                        <Table.Cell>{username}</Table.Cell>
                                    </Table.Row>
                                }
                            </Table.Body>
                        </Table>

                        <Divider horizontal>
                            <Header as='h4'>
                                <Icon name='address book' />
                                Connect
                            </Header>
                        </Divider>

                        <Table definition>
                            <Table.Body>
                                {email &&
                                    <Table.Row>
                                        <Table.Cell width={2}>email</Table.Cell>
                                        <Table.Cell>{email}</Table.Cell>
                                    </Table.Row>
                                }
                                {website &&
                                    <Table.Row>
                                        <Table.Cell width={2}>Website</Table.Cell>
                                        <Table.Cell><a href={website} target='_blank'>{website}</a></Table.Cell>
                                    </Table.Row>
                                }
                                {phone &&
                                    <Table.Row>
                                        <Table.Cell width={2}>phone</Table.Cell>
                                        <Table.Cell>{phone}</Table.Cell>
                                    </Table.Row>
                                }
                                {twitter &&
                                    <Table.Row>
                                        <Table.Cell width={2}>twitter</Table.Cell>
                                        <Table.Cell>{twitter}</Table.Cell>
                                    </Table.Row>
                                }
                                {facebook &&
                                    <Table.Row>
                                        <Table.Cell width={2}>facebook</Table.Cell>
                                        <Table.Cell>{facebook}</Table.Cell>
                                    </Table.Row>
                                }
                            </Table.Body>
                        </Table>
                    </div>
                </Box>
            </Modal>
        </>
    );
}