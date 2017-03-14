import { connect } from 'react-redux'
import NGWord from '../components/NGWord'
import { removeNgWord } from '../actions'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      if (confirm(`${ownProps.ngword} をNGワードから削除します`)) {
        dispatch(removeNgWord(ownProps.ngword))
      }
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(NGWord)
