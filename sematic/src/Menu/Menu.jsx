import React from 'react';
import { Menu } from 'semantic-ui-react';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import PropTypes from 'prop-types';

export default class MainMenu extends React.PureComponent {
  handleMenuClick = () => this.props.toggleSidebar()

  render() {
    const { sidebarIsVisible = false, handleAuth } = this.props;

    return (
      <Menu secondary>
        <Menu.Item
          name="Toggle sidebar"
          onClick={this.handleMenuClick}
        >
          <Icon color="blue" name={sidebarIsVisible ? 'toggle left' : 'toggle right'} />
        </Menu.Item>

        <div className="title">
          Contact list
        </div>

        <Menu.Menu position="right">
          <Menu.Item>
            <Button primary onClick={handleAuth}>Log out</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

MainMenu.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  sidebarIsVisible: PropTypes.bool,
};
