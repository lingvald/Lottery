import React, { Component } from 'react';
import { Lottery } from './features/Lottery';

class App extends Component {
	render() {
    return (
		<div className="app">
			<Lottery />
		</div>
	);
  }
}

export default App;