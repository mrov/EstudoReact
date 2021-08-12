import React from 'react';

class NameInput extends React.Component {
    constructor (props) {
        super(props)
        this.state = { nickname: "", disableButton: true }
    }

    nameChangeHandler (e) {
        e.preventDefault()
        if (e.target.value !== "") {
            this.setState({ nickname : e.target.value, disableButton: false })
            console.log(this.state.nickname)
        } else {
            this.setState({ nickname : e.target.value, disableButton: true })
        }
    }

    render () {
        return (
            <div className="card">
                <h2 className="text-light mb-5">Olá, Gamer!</h2>
                <div className="row h-100 d-flex align-items-center">
                    <div className="col-md-12">
                        <div className="form-group mb-5">
                            <label for="name-input" className="text-light">Insira seu nick:</label>
                            <input id="name-input" onChange={(e) => this.nameChangeHandler(e)} type="text"></input>
                        </div>
                        <div>
                            <button disabled={this.state.disableButton} className="btn btn-primary" onClick={(e) => this.props.onClick(this.state.nickname, e)}>Prosseguir</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NameInput;