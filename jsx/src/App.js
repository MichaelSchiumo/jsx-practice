import React from 'react';
import './App.css';

// import wholefoods from './wholefoods.svg';
import WholeFoods from './WholeFoods2.svg';

class App extends React.Component {
  render() {
    return (
      <div>
        <img src={WholeFoods} alt='WholeFoods2' />
        <div>SVG not working?</div>
      </div>
    );
  }
}

export default App;
