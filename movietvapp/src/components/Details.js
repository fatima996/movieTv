import React,{Component} from 'react'
import { Button } from 'semantic-ui-react';
import { withRouter  } from 'react-router-dom'

class Details extends Component {  
      goBack = (props) => {
        this.props.history.goBack();
      }
      render()
      {
          return(
              <div>
        <div className="backButton">
        <Button  onClick={this.goBack.bind(this)}>Back</Button>
        </div>
        
        </div>
          )
      }
   
}
export default Details;