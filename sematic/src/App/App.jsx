import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Loader } from 'semantic-ui-react';
import AdminSidebar from '../Sidebar/Sidebar';

class App extends React.PureComponent {
  render() {
    const {
      isLoading = false,
    } = this.props;

    return (
      <div className="root-container">
        <AdminSidebar />
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
