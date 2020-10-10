import React, { Component } from 'react'
import { Form, Button, Modal } from 'semantic-ui-react'

const initialState = {
    name: '',
    username: '',
    email: '',
    address_city: '',
    phone: '',
    company_name: ''
}

class AddUserModal extends Component {
    state = initialState;

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleAddUser = () => {
        const {
            address_city,
            company_name
        } = this.state;
        const {
            addNewUser,
            getUsers
        } = this.props;

        addNewUser({
            ...this.state,
            address: {
                city: address_city
            },
            company: {
                name: company_name
            }
        })

        this.setState(initialState, () => getUsers())

    }

    render() {
        const {
            handleModal,
            visible
        } = this.props;

        const {
            name,
            username,
            email,
            address_city,
            phone,
            company_name,
        } = this.state;

        return (
            <Modal
                centered={false}
                open={visible}
                onClose={() => handleModal()}
                onOpen={() => handleModal()}
            >
                <Modal.Header>Create User</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Input onChange={this.handleChange} value={name} fluid label='Name' name='name' placeholder='Name' />
                        <Form.Input onChange={this.handleChange} value={username} fluid label='User Name' name='username' placeholder='User Name' />
                        <Form.Input onChange={this.handleChange} value={email} fluid label='Email' name='email' placeholder='Email' />
                        <Form.Input onChange={this.handleChange} value={address_city} fluid label='City' name='address_city' placeholder='City' />
                        <Form.Input onChange={this.handleChange} value={phone} fluid label='Phone' name='phone' placeholder='Phone' />
                        <Form.Input onChange={this.handleChange} value={company_name} fluid label='Company' name='company_name' placeholder='Company' />
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button primary onClick={this.handleAddUser}>Submit</Button>
                    <Button onClick={() => handleModal()}>Cancel</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default AddUserModal
