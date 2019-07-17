import React, {Component} from 'react';
import RemindeeInput from './RemindeeInput';
import RemindeeList from './RemindeeList';

class App extends Component {
    render() {
        return (<div>
            <h1>Hello from App</h1>
            <RemindeeInput/>
            <RemindeeList/>
        </div>);
    }
}

export default App;
