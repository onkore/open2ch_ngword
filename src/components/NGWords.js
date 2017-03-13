import React, { PropTypes } from 'react'
import ClearNGWord from '../containers/ClearNGWord'

export default class NGWords extends React.Component {
  static propTypes = {
    ngwords: PropTypes.arrayOf(
        PropTypes.shape({
          ngword: PropTypes.string.isRequired
        }).isRequired
      ).isRequired
  }

  render() {
    return (
      <div>
        <h1>NGワード一覧</h1>
        <ul>
          {this.props.ngwords.map((item) =>
            <ClearNGWord
              key={item.ngword}
              {...item}
            />
          )}
        </ul>
      </div>
    )
  }
}
