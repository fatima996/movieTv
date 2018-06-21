import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {Button} from 'semantic-ui-react'


class Form extends Component {
   
    
    render() {
    return(
    <div className="form"> 
         <Button.Group size='large' >
    <Button><NavLink to={'/'}>Movies</NavLink></Button>
    <Button.Or />
    <Button><NavLink to={'/tv'}>Tv Shows</NavLink></Button>
  </Button.Group>
  
<br/>
     
    </div>
);
}}

export default Form;