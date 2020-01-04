import React from 'react'
import AdminSidebar from '../Sidebar/Sidebar'
import { Dimmer, Loader } from 'semantic-ui-react'

class App extends React.PureComponent {
  render () {
    const {
      isLoading = false
    } = this.props

    return (
      <div className="root-container">
        <AdminSidebar />
        {isLoading?
          <Dimmer active>
            <Loader size='massive'>Loading</Loader>
          </Dimmer>
        : null}
      </div>
    )
  }
}

export default App
