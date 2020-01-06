import React from 'react';
import {
  Icon, Menu, Segment, Sidebar,
} from 'semantic-ui-react';
import MainMenu from '../Menu/Menu';
import UsersTable from '../UsersTable';

class AdminSidebar extends React.PureComponent {
  state = {
    visible: false,
  }

  handleAnimationChange = () => this.setState((prevState) => ({ visible: !prevState.visible }))

  render() {
    const {
      visible,
    } = this.state;

    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="push"
          icon="labeled"
          vertical
          visible={visible}
          width="thin"
        >
          <Menu.Item as="a" onClick={this.handleAnimationChange}>
            <Icon name="users" />
            Users List
          </Menu.Item>
          <Menu.Item as="a" disabled>
            Some route
          </Menu.Item>
          <Menu.Item as="a" disabled>
            Some route
          </Menu.Item>
          <Menu.Item as="a" disabled>
            Some route
          </Menu.Item>
          <Menu.Item as="a" disabled>
            Some route
          </Menu.Item>
          <Menu.Item as="a" disabled>
            Some route
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <div className="content">
            <MainMenu toggleSidebar={this.handleAnimationChange} sidebarIsVisible={visible} />
            <UsersTable />
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default AdminSidebar;
