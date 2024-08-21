import React, { Component } from 'react';
import { robots } from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: robots,
            searchfield: '',
            isPending: false,
        };

        // Bind the method to the class
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onSearchChange(event) {
        const searchfield = event.target.value.toLowerCase();
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield);
        });

        // Update the state with the filtered robots
        this.setState({ searchfield, filteredRobots });
    }

    render() {
        const { robots, searchfield, filteredRobots } = this.state;
        const robotsToDisplay = searchfield ? filteredRobots : robots;

        return (
            <div className='tc'>
                <h1 className='f1'>RobotFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={robotsToDisplay} />
            </div>
        );
    }
}

export default App;