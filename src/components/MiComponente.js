import React, {Component} from 'react'

//  Stylesheets
import '../assets/css/miComponente.css'

class MiComponente extends Component {
    constructor(props) {
        super(props)

        this.persona1 = {
            nombre: 'Gonzalo',
            apellido1: 'Fuente',
            apellido2: 'Vicente',
            estudios: ['ESO', 'Bachillerato', 'DAW']
        }

        this.persona2 = {
            nombre: 'Ismael',
            apellido1: 'Magdaleno',
            apellido2: 'Campos',
            estudios: ['Bachillerao', 'ESO', 'DAM']
        }

        this.state = {
            title: 'Bienvenido!',
            persona: this.persona1
        }

        this.changeThings = this.changeThings.bind(this)
    }

    changeThings() {
        this.setState({
            title: 'QUE HAS TOCADO?!',
            persona: this.persona2
        })
    }

    render() { 
        return (
            <React.Fragment>
                <h1>{this.state.title}</h1>
                <h1><strong>Desarrollador:</strong> {this.state.persona.nombre + ', ' + this.state.persona.apellido1 + ' ' + this.state.persona.apellido2}</h1>
                <h2>Estudios:</h2>
                <ol className="studies-list">
                    {
                        this.state.persona.estudios.map((estudio, i)=> {
                            return (
                                <li key={i}>{estudio}</li>
                            )
                        })
                    }
                </ol>
                <hr/>
                <h1>{todayDiv()}</h1>
                <hr/>
                <button onClick={this.changeThings} className="custom-buttom">Hace cosas!</button>
            </React.Fragment>
        );
    }
}

function todayDiv() {
    let date = new Date();
    let today = formatDate(date.getDay().toString()) + "/" + formatDate(date.getMonth().toString()) + "/" + formatDate(date.getFullYear().toString())
  
    var fecha = (
      <div>
        <h1>{today}</h1>
      </div>
    );
  
    return fecha;
}
  
function formatDate(date) {
    if (date.length === 1) {
      date = 0 + date
    }
  
    return date
}

export default MiComponente;