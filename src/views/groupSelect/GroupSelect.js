import fioraImage from "../../static/img/fiora-bg.png"
import './GroupSelect.css';
import { useLocation } from "react-router-dom";
import React from 'react';

var search = ""

function clickHandler(e, gameType) {
  console.log(e, gameType)
  // this.setState({cardState: 1})
}

function nameInputHandler (e, nickName) {
  this.setState({ cardState: 1, nickName: nickName })
  console.log(nickName)
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SubGroupTest = (props) => {
    var query = useQuery();
    search = query.get("groupType")
    return (
      <p>{query.get("groupType")}</p>
    )
}

const Header = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

const Filters = (props) => {
  return (
    <div class="form-group text-start">
      <label for="filter-select" class="form-label">Filtro:</label>
      <select id="filter-select" class="form-select" aria-label="Selecionar tipo de jogo">
        <option selected value="casual">Casual</option>
        <option value="ranked">Ranked</option>
        <option value="ambos">Ambos</option>
      </select>
    </div>
  )
}

const Card = (props) => {
  return (
    <div class="card group-card">
      <img src={fioraImage} />
      <div class="group-description-wrapper">
        <div>
          <p>Qtd. Players</p>
          <p>3/5</p>
        </div>
        <div>
          <p>Tier</p>
          <p>2</p>
        </div>
        <div>
          <p>Horário</p>
          <p>Noite</p>
        </div>
      </div>
      <div>
        <button class="btn btn-primary btn-sm">Aplicar para o grupo</button>
      </div>
    </div>
  )
}

class GroupSelect extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="App bg">
        <div className="container-fluid opac">
          <div className="row">
            <div className="col-md-12 p-0">
              <Header/>
            </div>
          </div>
          <div className="row mt-5 text-light filters-wrapper pb-3 mx-3">
            <div className="col-md-1">
              <Filters/>
            </div>
            <div className="col-md-2 form-group text-start">
              <label for="search-game" class="form-label">Buscar jogo:</label>
              <input id="search-game" type="text" class="form-control" placeholder="Buscar jogo" aria-label="Username"/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 card-wrapper">
              <SubGroupTest/>
            </div>
          </div>
          <div class="row mx-2">
            <div class="col-md-2">
              <Card/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GroupSelect;
