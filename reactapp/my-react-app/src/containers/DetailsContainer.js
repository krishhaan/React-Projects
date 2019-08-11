import {connect} from 'react-redux';
import detailsPanel from '../components/panels/detailsPanel';

const mapStateToProps=(state)=>({

})

const mapDispatchToAction=(dispatch,data)=>({

})

const detailsContainer=connect(
    mapStateToProps,
    mapDispatchToAction
)(detailsPanel)

export default detailsContainer;