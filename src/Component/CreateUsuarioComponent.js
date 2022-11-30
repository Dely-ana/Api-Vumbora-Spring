import React, { Component } from 'react'
import UsuarioService from '../Services/UsuarioService';
import '../Css/App.css';


class CreateUsuarioComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nome: '',
            cpf: '',
            email: '',
            pais: '',
            sexo: '',
            telefone: '',
            destino: ''
        }
        this.changenomeHandler = this.changenomeHandler.bind(this);
        this.changecpfHandler = this.changecpfHandler.bind(this);
        this.changeemailHandler = this.changeemailHandler.bind(this);
        this.changepaisHandler = this.changepaisHandler.bind(this);
        this.changesexoHandler = this.changesexoHandler.bind(this);
        this.changetelefoneHandler = this.changetelefoneHandler.bind(this);
        this.changedestinoHandler = this.changedestinoHandler.bind(this);
        this.saveOrUpdateUsuario = this.saveOrUpdateUsuario.bind(this);


    }

    componentDidMount() {

        if (this.state.id === '_add') {
            return
        } else {
            UsuarioService.getUsuarioById(this.state.id).then((res) => {
                let usuario = res.data;
                this.setState({
                    nome: usuario.nome, cpf: usuario.cpf, email: usuario.email,
                    pais: usuario.pais, sexo: usuario.sexo, telefone: usuario.telefone, destino: usuario.destino
                });
            });
        }
    }
    saveOrUpdateUsuario = (e) => {
        e.preventDefault();
        let usuario = { nome: this.state.nome, cpf: this.state.cpf, email: this.state.email, pais: this.state.pais, sexo: this.state.sexo, telefone: this.state.telefone, destino: this.state.destino };
        console.log('usuario => ' + JSON.stringify(usuario));

        if (this.state.id === '_add') {
            UsuarioService.createUsuario(usuario).then(res => {
                this.props.history.push('/usuarios');
            });
        } else {
            UsuarioService.updateUsuario(usuario, this.state.id).then(res => {
                this.props.history.push('/usuarios');
            });
        }
    }

    changenomeHandler = (event) => {
        this.setState({ nome: event.target.value });
    }

    changecpfHandler = (event) => {
        this.setState({ cpf: event.target.value });
    }

    changeemailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    changepaisHandler = (event) => {
        this.setState({ pais: event.target.value });
    }

    changesexoHandler = (event) => {
        this.setState({ sexo: event.target.value });
    }


    changetelefoneHandler = (event) => {
        this.setState({ telefone: event.target.value });
    }


    changedestinoHandler = (event) => {
        this.setState({ destino: event.target.value });
    }


    cancel() {
        this.props.history.push('/usuarios');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Inserir Usuario</h3>
        } else {
            return <h3 className="text-center">Atualize seu cadastro</h3>
        }
    }
    render() {
        return (
            <div >
                <br></br>
                <div className='container-create'>
                    <div className="cont">
                        <div className="table">
                            {
                                this.getTitle()
                            }
                            <div className="card-create ">
                                <form>
                                    <div className="form-group">
                                        <label> Nome: </label>
                                        <input placeholder="nome" name="nome" className="form-control"
                                            value={this.state.nome} onChange={this.changenomeHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Cpf: </label>
                                        <input placeholder="cpf" name="cpf" className="form-control"
                                            value={this.state.cpf} onChange={this.changecpfHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email: </label>
                                        <input placeholder="email" name="email" className="form-control"
                                            value={this.state.email} onChange={this.changeemailHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label>País: </label>
                                        <input placeholder="pais" name="pais" className="form-control"
                                            value={this.state.pais} onChange={this.changepaisHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Sexo: </label>
                                        <input placeholder="sexo" name="sexo" className="form-control"
                                            value={this.state.sexo} onChange={this.changesexoHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label>Telefone: </label>
                                        <input placeholder="telefone" name="telefone" className="form-control"
                                            value={this.state.telefone} onChange={this.changetelefoneHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Destino: </label>
                                        <input placeholder="destino" name="destino" className="form-control"
                                            value={this.state.destino} onChange={this.changedestinoHandler} />
                                    </div>
                                    
                                    <button className="btnC btn-primary"  style={{ background: " #b4d8ec" }} onClick={this.saveOrUpdateUsuario}> Salvar </button>
                                    <button className="btnC btn-danger" style={{ background: "red" }} onClick={this.cancel.bind(this)}> Cancelar </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateUsuarioComponent