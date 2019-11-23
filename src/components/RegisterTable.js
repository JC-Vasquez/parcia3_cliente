import React from "react";
import RegisterRow from "./RegisterRow";

class RegisterTable extends React.Component{
    render(){
        let rows = this.props.list.map(element=>{
            return <RegisterRow 
                key={element._id} 
                student={element}
                onDelete= {()=>{
                    this.props.onDelete(element);
                }}
                />
        });

        return(
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr className="table-primary">
                            <th scope="col">Nombre</th>
                            <th scope="col">sexo</th>
                            <th scope="col">edad</th>
                            <th scope="col">Nivel academico</th>
                            <th scope="col">Nacionalidad</th>
                            <th scope="col">celular</th>
                            <th scope="col">Eliminar</th>
                            <th scope="col">Modificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default RegisterTable;