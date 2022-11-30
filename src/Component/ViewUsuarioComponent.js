import React, { Component } from 'react'
import UsuarioService from '../Services/UsuarioService'

class ViewUsuarioComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            usuario: {}
        }
    }

    componentDidMount() {
        UsuarioService.getUsuarioById(this.state.id).then(res => {
            this.setState({ usuario: res.data });
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container-view">
                    <h3 className="text-center"> Dados do Usuario</h3>
                    <div className="card-view">

                    

                        <div className="row">
                               <div> 
                                 <label className='lbl'> Nome: </label>
                                {this.state.usuario.nome}
                                </div>
                        </div>

                        <div className="row">
                        <div>
                            <label className='lbl'> Cpf: </label>
                             {this.state.usuario.cpf}
                             </div>
                        </div>

                        <div className="row">
                        <div>
                            <label className='lbl'> Email: </label>
                              {this.state.usuario.email}
                             </div>
                        </div>

                        <div className="row">
                        <div>
                            <label className='lbl'>País: </label>
                             {this.state.usuario.pais}
                             </div>
                        </div>

                        <div className="row">
                        <div>
                            <label className='lbl'> Sexo: </label>
                            {this.state.usuario.sexo}
                            </div>
                        </div>

                        <div className="row">
                        <div>
                            <label className='lbl'>Telefone: </label>
                             {this.state.usuario.telefone}
                            </div>
                        </div>

                        <div className="row">
                        <div>
                            <label className='lbl'> Destino: </label>
                              {this.state.usuario.destino}

                              {/* <button onClick={() => this.editUsuario(usuario.id)} className="btn btn-info">Alterar </button> */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewUsuarioComponent