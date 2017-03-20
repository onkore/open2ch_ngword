import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import AvailableNGWords from '../containers/AvailableNGWords'
import ClearNGWords from '../containers/ClearNGWords'

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <AvailableNGWords />
        <ClearNGWords />
      </MuiThemeProvider>
    )
  }
}
