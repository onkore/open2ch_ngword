import React, { PropTypes } from 'react'
import { clearNgWords } from '../actions'

export default class ClearNGWords extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <button onClick={this.props.onClick.bind(this)}>NGワードをクリアする</button>
    )
  }
}
