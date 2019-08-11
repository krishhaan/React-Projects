import {connect} from 'react-redux';
import filterPanel from '../components/panels/filterPanel'
import {loginAction} from '../actions/filterAction.js'
import {useSelector} from 'react-redux';


const mapStateToProps=(state)=>({
    filterValues:state.form,
})

const mapDispatchToAction =(dispatch,ownProps) =>({
    login:(state)=>{
       //const state=useSelector(state=>state);
       dispatch(loginAction)
        dispatch({type:"ERROR"})
    },
    validate:()=>{
        dispatch({type:"ERROR"})
    }   
})

const filterContainer=connect(mapStateToProps,
    mapDispatchToAction)(filterPanel)

export default filterContainer