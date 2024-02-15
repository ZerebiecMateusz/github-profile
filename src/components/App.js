import { Component } from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SliderComponent from '../containers/Slider.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk'
import rootReducer from '../reducers'
import Profile from '../containers/Profile.js';


let store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'home'
    }
  }

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary-dark">
          <Container>
            <Navbar.Brand className="bg-body-tertiary-dark" href="#home">My Github Profile</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                  
              </Nav>
              <Nav>
                <Nav.Link className='bg-body-tertiary-dark' href="#deets" onClick={() => this.setState({currentTab: 'slider'})}>Slider</Nav.Link>
                <Nav.Link className='bg-body-tertiary-dark' eventKey={2} href="#memes" onClick={() => this.setState({currentTab: 'profile'})}>Profile
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          {this.state.currentTab==='slider' ? <Provider store={store}><SliderComponent/></Provider> : false}
          {this.state.currentTab==='profile' ? <Provider store={store}><Profile/></Provider> : false}
        </div>
      </div>
        )

  }
    
}

export default App;
