import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Loader } from 'semantic-ui-react';
import AdminSidebar from '../Sidebar/Sidebar';
import AddUserModal from '../AddUserModal';
import LoginForm from '../LoginForm/LoginForm'

class App extends React.PureComponent {
  render() {
    const {
      isLoading = false,
      authed = false,
      handleAuth
    } = this.props;

    if (!authed) {
      return <LoginForm handleAuth={handleAuth}/>
    }

    return (
      <div className="root-container">
        <AdminSidebar handleAuth={handleAuth}/>
        <AddUserModal />
        {isLoading
          ? (
            <Dimmer active>
              <Loader size="massive">Loading</Loader>
            </Dimmer>
          )
          : null}
      </div>
    );
  }
}

export default App;


App.propTypes = {
  isLoading: PropTypes.bool,
};

App.defaultProps = {
  isLoading: false,
};
