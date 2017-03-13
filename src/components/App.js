import React from 'react'

import AvailableNGWords from '../containers/AvailableNGWords'
import ClearNGWords from '../containers/ClearNGWords'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <AvailableNGWords />
        <ClearNGWords />
      </div>
    )
  }
}
