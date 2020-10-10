import React from 'react';
import PropTypes from 'prop-types';
import { Table, Checkbox, Button, Icon } from 'semantic-ui-react';
import Input from 'semantic-ui-react/dist/commonjs/elements/Input';

const columns = [
  { name: 'Name', dataField: 'name' },
  { name: 'User name', dataField: 'username' },
  { name: 'Email', dataField: 'email' },
  { name: 'City', dataField: 'address.city' },
  { name: 'Phone', dataField: 'phone' },
  { name: 'Company', dataField: 'company.name' },
  { name: '', dataField: '' },
];

class UsersTable extends React.PureComponent {
  state = {
    users: [],
    filteredUsers: [],
    checkedUsers: [],
    showFilteredUsers: false,
  }

  componentDidMount() {
    this.props.getUsers();
  }

  filterUsers(filterBy = '') {
    return (event) => {
      const {
        target: {
          value = '',
        },
      } = event;

      const searchingValue = value.toUpperCase();

      const {
        users = [],
      } = this.props;

      const filteredUsers = users.filter((user) => {
        if (user[filterBy]) {
          return user[filterBy].toUpperCase().includes(searchingValue);
        }

        return false;
      });

      this.setState({
        filteredUsers,
        showFilteredUsers: value !== '',
      });
    };
  }

  handleCheck({ checked }, user) {
    const {
      checkedUsers = []
    } = this.state;

    if (checked) {
      checkedUsers.push(user);
    } else {
      checkedUsers.splice(checkedUsers.indexOf(user), 1);
    }

    this.setState({
      checkedUsers: [...checkedUsers]
    })
  }

  handleDelete = async () => {
    const {
      checkedUsers = []
    } = this.state;
    const {
      deleteUsers,
      getUsers
    } = this.props;

    const res = await deleteUsers(checkedUsers.map(({ id }) => id));

    this.setState({
      checkedUsers: []
    });

    getUsers();
  }

  render() {
    const {
      users = [],
      handleModal,
      error = false,
    } = this.props;

    const {
      showFilteredUsers = false,
      checkedUsers = [],
      filteredUsers = [],
    } = this.state;

    const data = showFilteredUsers ? filteredUsers : users;

    if (error) return 'No data!';

    return (
      <Table striped>
        <Table.Header>
          <Table.Row>
            {
              columns.map((column) => (
                <Table.HeaderCell>
                  {column.name === 'Name'
                    ? (
                      <Input
                        placeholder='Search by name ...'
                        icon="search"
                        fluid
                        onChange={this.filterUsers('name')}
                      />
                    )
                    : column.name}
                </Table.HeaderCell>
              ))
            }
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            data.map((user) => {
              const {
                name = '',
                username = '',
                email = '',
                address: {
                  city = '',
                },
                phone = '',
                company: {
                  name: companyName = '',
                },
              } = user;

              return (
                <Table.Row>
                  <Table.Cell>{name}</Table.Cell>
                  <Table.Cell>{username}</Table.Cell>
                  <Table.Cell>{email}</Table.Cell>
                  <Table.Cell>{city}</Table.Cell>
                  <Table.Cell>{phone}</Table.Cell>
                  <Table.Cell>{companyName}</Table.Cell>
                  <Table.Cell>
                    <Checkbox onChange={(event, checked) => this.handleCheck(checked, user)} />
                  </Table.Cell>
                </Table.Row>
              );
            })
          }
        </Table.Body>

        {
          !data.length &&
          <Table.Row>
            <h2>No data</h2>
          </Table.Row>
        }

        <Table.Footer fullWidth>
          <Table.HeaderCell colSpan='1'>
            <Button
              floated='right'
              icon
              onClick={handleModal}
              labelPosition='left'
              color='green'
              size='small'
            >
              <Icon name='user' /> Add User
          </Button>
          </Table.HeaderCell>
          <Table.HeaderCell colSpan='6'>
            <Button
              floated='right'
              icon
              color='red'
              onClick={this.handleDelete}
              disabled={!checkedUsers.length}
              labelPosition='left'
              size='medium'
            >
              <Icon name='delete' />Delete checked {checkedUsers.length > 1 ? 'users' : 'user'}
            </Button>
          </Table.HeaderCell>

        </Table.Footer>
      </Table>
    );
  }
}

UsersTable.propTypes = {
  getUsers: PropTypes.func.isRequired,
  error: PropTypes.bool,
};

export default UsersTable;
