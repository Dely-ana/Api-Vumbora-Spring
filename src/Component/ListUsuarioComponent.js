import React, { Component } from 'react'
import UsuarioService from '..//Services/UsuarioService'

class ListUsuarioComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usuarios: []
        }
        this.addUsuario = this.addUsuario.bind(this);
        this.editUsuario = this.editUsuario.bind(this);
        this.deleteUsuario = this.deleteUsuario.bind(this);
    }

    deleteUsuario(id) {
        UsuarioService.deleteUsuario(id).then(res => {
            this.setState({ usuarios: this.state.usuarios.filter(usuario => usuario.id !== id) });
        });
    }
    viewUsuario(id) {
        this.props.history.push(`/view-usuario/${id}`);
    }
    editUsuario(id) {
        this.props.history.push(`/add-usuario/${id}`);
    }

    componentDidMount() {
        UsuarioService.getUsuarios().then((res) => {
            this.setState({ usuarios: res.data });
        });
    }

    addUsuario() {
        this.props.history.push('/add-usuario/_add');
    }

    render() {
        return (
            <div  className='container-List '>
                <h2 className="text-center">Lista de Usuarios</h2>
               
                <br></br>
                <div className="row-list">
                    <table className="table">

                        <thead>
                            <tr>
                                <th> Nome</th>
                                <th> Cpf </th>
                                <th> Email</th>
                                <th> País</th>
                                <th> Sexo</th>
                                <th> Telefone</th>
                                <th> Destino</th>
                                <th> Ações</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.usuarios.map(
                                    usuario =>
                                        <tr key={usuario.id}>
                                            <td> {usuario.nome}</td>
                                            <td> {usuario.cpf}</td>
                                            <td> {usuario.email}</td>
                                            <td> {usuario.pais}</td>
                                            <td> {usuario.sexo}</td>
                                            <td> {usuario.telefone}</td>
                                            <td> {usuario.destino}</td>

                                            <td>
                                                <button onClick={() => this.editUsuario(usuario.id)} className="btn btn-info">Alterar </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteUsuario(usuario.id)} className="btn btn-danger">Apagar </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewUsuario(usuario.id)} className="btn btn-info">Visualizar </button>
                                            </td>
                                        </tr>
                                        
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row-list">
                    <button className="btn btn-primary" onClick={this.addUsuario}> Inserir dados do Usuario</button>
                </div>
                </div>

            </div>
        )
    }
}

export default ListUsuarioComponent