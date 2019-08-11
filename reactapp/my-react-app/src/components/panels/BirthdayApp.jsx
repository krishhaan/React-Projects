import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import DetailsContainer from '../../containers/DetailsContainer'
import FilterContainer from '../../containers/FilterContainer'
import SummaryContainer from '../../containers/SummaryContainer'
import Background from '../../images/login.jpg';

class BirthdayApp extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div className='filterContainer' style={{backgroundImage: `url(${Background})`}}>
                    <FilterContainer></FilterContainer>
                </div>
             {  /* <div>
                    <FilterContainer></FilterContainer>
                    <DetailsContainer></DetailsContainer>
                    <SummaryContainer></SummaryContainer>
             </div> */}
            </div>
        );
    }
}

export default BirthdayApp;