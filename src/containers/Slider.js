import {connect} from 'react-redux';

import SliderComponent2 from '../components/Slider.js';

const mapStateToProps = state => {
    return {
        profile : state.profile
    };
}


const SliderComponent = connect(
    mapStateToProps,
  )(SliderComponent2);
  
  export default SliderComponent;
  