import React from "react";

class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nombre:"",
            sexo: "",
            edad: "",
            academico: "",
            nacionalidad: "",
            celular: "",
            isDisable: true,
        }
    }

    handleChange = (e)=>{
        let name = e.target.name;
        let value = e.target.type = e.target.value;

        let returnValue = {
            [name]: value,
        }
        
        returnValue.isDisable = true;

        this.setState(returnValue);
    }

    render(){
        return(
            <div className="jumbotron">
                <h1>
                    Registro de Personas.
                </h1>

                <div className="form-group">
                    <label className="col-sm-2 col-form-label">Nombre: </label><br/>
                    <input className="form-control" 
                        type="text" 
                        name="nombre" 
                        value={this.state.nombre}
                        onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 col-form-label">Sexo: </label><br/>
                    <input className="form-control" 
                        type="text" 
                        name="sexo" 
                        value={this.state.sexo}
                        onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 col-form-label">Edad: </label><br/>
                    <input className="form-control" 
                        type="text" 
                        name="edad" 
                        value={this.state.edad}
                        onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 col-form-label">Nivel academico: </label><br/>
                    <input className="form-control" 
                        type="text" 
                        name="academico" 
                        value={this.academico}
                        onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 col-form-label">Nacionalidad: </label><br/>
                    <input className="form-control" 
                        type="text" 
                        name="nacionalidad" 
                        value={this.state.nacionalidad}
                        onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 col-form-label">Celular: </label><br/>
                    <input className="form-control" 
                        type="text" 
                        name="celular" 
                        value={this.state.celular}
                        onChange={this.handleChange}/>
                </div>
                

                <div className="form-group">
                    <button 
                        type="button" 
                        className="btn btn-info" 
                        id="submit_btn"
                        onClick={()=>{
                            this.props.onSubmit({
                                nombre: this.state.nombre,
                                sexo: this.state.sexo,
                                edad: this.state.edad,
                                academico: this.state.academico,
                                nacionalidad: this.state.nacionalidad,
                                celular: this.state.celular,
                            });
                        }} 
                        disabled = {this.state.isDisable}>Ingresar</button>
                </div>
            </div>
        );
    }
}

export default RegisterForm;