import React from "react";

class RegisterRow extends React.Component{
    render(){
        let usuario = this.props.usuario;

        return(
            <tr className="table-active">
                <td scope="row">{usuario.nombre}</td>
                <td scope="row">{usuario.sexo}</td>
                <td scope="row">{usuario.edad}</td>
                <td scope="row">{usuario.academico}</td>
                <td scope="row">{usuario.nacionalidad}</td>
                <td scope="row">{usuario.celular}</td>
                <td scope="row">{usuario.nombre}</td>                <td>
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={()=>{
                            this.props.onDelete();
                        }}>
                            Drop
                        </button>
                </td>

                
            </tr>
        );
    }
}

export default RegisterRow;