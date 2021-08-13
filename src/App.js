import logo from './static/img/logo.svg';
import lolicon from './static/img/lolicon.jpg'
import csgoicon from './static/img/csgoicon.jpg'
import amgUsicon from './static/img/amongusicon.png'
import GameTypeSelect from './components/GameTypeSelect'
import NameInput from './components/NameInput'
import './App.css';
import React from 'react';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {cardState: 0, nickName: ""};
  }

  clickHandler(e, gameType) {
    console.log(e, gameType)
    // this.setState({cardState: 1})
  }

  nameInputHandler (e, nickName) {
    this.setState({ cardState: 1, nickName: nickName })
    console.log(nickName)
  }

  render () {
    return (
      <div className="App bg">
        <div className="container-fluid opac">
          <div className="row h-100vh">
            <div className="col-md-12 card-wrapper">
              { this.state.cardState === 0 && <NameInput onClick={(nickName, e) => this.nameInputHandler(e, nickName)}/> }
              { this.state.cardState === 1 && <GameTypeSelect nickName={this.state.nickName} onClick={(gameType, e) => this.clickHandler(e, gameType)}/> }
            </div>
          </div>
        </div>
      </div>
    )
  }

  teste () {
    console.log(this.state)
    return "Moabe"
  }
}

// function teste () {
//   return "Coabe"
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload. {teste()}
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
