import React from 'react' ;


export default class InputCity extends React.Component {

    

    state={
        city : 'rabat'
    }

    handleChange = event => {
        this.setState({
            city : event.target.value
        })
    }
    
    render(){
        return(
            <div style={{textAlign : 'center' , marginTop : '20px'}}>
                <input type="text" 
                placeholder="Input City Name"
                value={this.state.city}
                onChange={this.handleChange} />
                <button onClick={()=>{this.props.getTemperature(this.state.city)}}>Voir météo</button>
            </div>
        );
    }
}