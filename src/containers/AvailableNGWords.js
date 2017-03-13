import { connect } from 'react-redux'
import NGWords from '../components/NGWords'
import { removeNgWord } from '../actions'

const mapStateToProps = (state) => {
  return {
    ngwords: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (ngword) => dispatch(removeNgWord(ngword))
  }
}

const AvailableNGWords = connect(
  mapStateToProps,
  mapDispatchToProps
)(NGWords)

export default AvailableNGWords
