import React, { Component } from 'react';
import './App.css';
import GenerateSimpsons from './components/GenerateSimpsons';
import DisplaySimpsons from './components/DisplaySimpsons';

  class App extends Component {
    state = {
      simpsons: {}
    }

  getSimpsons = () => {
        fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
          .then(res => res.json())
          .then(poulet => {
            this.setState({
              simpsons: poulet[0]
            })
          })
      }

  componentDidMount = () => {
    this.getSimpsons()
  }

  render() {
        return (
          <div className="App">
            <header className="App-header">
              <p>
                Simpsons
          </p>
            </header>
            <GenerateSimpsons selectSimpsons={this.getSimpsons} />
            <DisplaySimpsons simpsons={this.state.simpsons} />
          </div>
        )
      }
    }

    export default App;
