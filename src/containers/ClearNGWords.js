import { connect } from 'react-redux'
import ClearNGWords from '../components/ClearNGWords'
import { clearNgWords } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(clearNgWords())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ClearNGWords)
