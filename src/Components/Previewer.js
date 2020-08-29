// this component was designed separately for the markdown previewer
// But due to the addition of preview maximizing feature, this component was 
// directly implemented in the Editor.js 

import React from 'react'
import '../App.css'
import marked from 'marked'

class Previewer extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            maximize: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState => {
            return {
                maximize: !prevState.maximize
            }
        })
        console.log(this.state.maximize)
    }

    render(){
        return(
            <div id="previewer">
                <div id='prev-bar'>
                    <header id="prev-header">Markdown Previewer</header>
                    <button onClick={this.handleClick}><i  id="maxi-icon" className="far fa-window-maximize"></i></button>
                </div>
                <div id="prev-content" dangerouslySetInnerHTML={{__html: marked(this.props.inputText)}}></div>
            </div> 
        )
    }
}
export default Previewer