import React, { PropTypes } from 'react'

export default class NGWord extends React.Component {
  static propTypes = {
    ngword: PropTypes.string.isRequired
  }

  render() {
    return (
      <li>{this.props.ngword}</li>
    )
  }
}
