import React, {Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll'
import './App.css';



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '',
        
        }
        console.log('constructor');
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> {return response.json();})
        .then(useres => {this.setState({robots: useres})});
        console.log('componentdidmount')
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    
    }

    render() {
        const {robots, searchfield } = this.state;
        const filtereddRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        console.log('render')
        return !robots.length ? <h1>Loading</h1>  : (
                
                <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filtereddRobot}/>
                </Scroll>
                </div>
                );
        }




    }
export default App;