import React from 'react'
import { Table } from 'semantic-ui-react'
import Input from 'semantic-ui-react/dist/commonjs/elements/Input'

const columns = [
  {name: 'Name', dataField: 'name'},
  {name: 'User name', dataField: 'username'},
  {name: 'Email', dataField: 'email'},
  {name: 'City', dataField: 'address.city'},
  {name: 'Phone', dataField: 'phone'},
  {name: 'Company', dataField: 'company.name'},
]

class UsersTable extends React.PureComponent {
  state = {
    users: [],
    filteredUsers: [],
    showFilteredUsers: false
  }

  componentDidMount () {
    this.props.getUsers()
  }

  filterUsers (filterBy = '') {
    return (event) => {
      let {
        target: {
          value = ''
        }
      } = event

      const searchingValue = value.toUpperCase()

      const {
        users = []
      } = this.props

      const filteredUsers = users.filter(user => {
        if (user[filterBy]) {
          return user[filterBy].toUpperCase().includes(searchingValue)
        }

        return false
      })

      this.setState({
        filteredUsers,
        showFilteredUsers: value !== ''
      })
    }
  }

  render () {
    const {
      users = [],
      error = false
    } = this.props

    const {
      showFilteredUsers = false,
      filteredUsers = []
    } = this.state

    const data = showFilteredUsers ? filteredUsers : users

    if (error) return 'No data!'

    return (
      <Table striped>
        <Table.Header>
          <Table.Row>
            {
              columns.map((column) =>
                <Table.HeaderCell>
                  {column.name === 'Name' ?
                    <Input placeholder={column.name} icon='search' transparent fluid
                           onChange={this.filterUsers('name')}/> :
                    column.name}
                </Table.HeaderCell>
              )
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
                  city = ''
                },
                phone = '',
                company: {
                  name: companyName = ''
                }
              } = user

              return (
                <Table.Row>
                  <Table.Cell>{name}</Table.Cell>
                  <Table.Cell>{username}</Table.Cell>
                  <Table.Cell>{email}</Table.Cell>
                  <Table.Cell>{city}</Table.Cell>
                  <Table.Cell>{phone}</Table.Cell>
                  <Table.Cell>{companyName}</Table.Cell>
                </Table.Row>
              )
            })
          }
        </Table.Body>
      </Table>
    )
  }
}

UsersTable.propTypes = {
  //getUsers: PropTypes.func.isRequired
}

export default UsersTable
