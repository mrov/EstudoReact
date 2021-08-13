import React from 'react';
import lolicon from '../static/img/lolicon.jpg'
import csgoicon from '../static/img/csgoicon.jpg'
import amgUsicon from '../static/img/amongusicon.png'
import { Link } from "react-router-dom";

class GameTypeSelect extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className="card">
                <h2 className="text-light mb-5">Agora {this.props.nickName}, escolha seu tipo de jogo.</h2>
                <div className="row game-type-wrapper">
                    <div className="col-md-5 ranked-games-type" onClick={(e) => this.props.onClick("ranked", e)}>
                <Link to={{pathname: "/groupSelect", search: "?groupType=ranked"}}>
                        <p>Jogos competitivos</p>
                        <div className="icon-row">
                        <img src={lolicon}></img>
                        <img src={csgoicon}></img>
                        <img src={lolicon}></img>
                        <img src={csgoicon}></img>
                        </div>
                </Link>
                    </div>
                    <div className="col-md-5 ms-2 casual-games-type" onClick={(e) => this.props.onClick("casual", e)}>
                <Link to={{pathname: "/groupSelect", search: "?groupType=ranked"}}>
                        <p>Jogos Casuais</p>
                        <div className="icon-row">
                        <img src={amgUsicon}></img>
                        <img src={amgUsicon}></img>
                        <img src={amgUsicon}></img>
                        <img src={amgUsicon}></img>
                        </div>
                </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameTypeSelect;