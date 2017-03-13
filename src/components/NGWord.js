import React, { PropTypes } from 'react'

export default class NGWord extends React.Component {
  static propTypes = {
    ngword: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <li onClick={this.props.onClick.bind(this)}>{this.props.ngword}</li>
    )
  }
}
