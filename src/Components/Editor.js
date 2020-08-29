import React from 'react';
import '../App.css';
// import Previewer from './Previewer.js'
import {SampleText} from './SampleText.js'
import marked from 'marked'

class Editor extends React.Component {
    constructor(){
        super()

        this.state = {
            input: "",
            maximize: false
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        this.setState({
            input: SampleText
        })
    }

    handleChange(event){
        this.setState({
            input: event.target.value
        })
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
        let editorStyle
        let prevStyle
        if(this.state.maximize === true){
            editorStyle = {
                display: 'none'
            }
            prevStyle = {
                width: '85%',
                margin: 'auto'
            }
        } else {
            editorStyle = {
                display: 'flex'
            }
            prevStyle = {
                width: '55%'
            }
        }
        return(
            <div id="mark-prev">
                <div id="editor" style={editorStyle}>
                    <header id="editor-header">Editor</header>
                    <textarea 
                    name="editor" 
                    id="editor-textbox" 
                    cols="50" 
                    rows="30"
                    onChange = {this.handleChange}
                    value = {this.state.input}
                    ></textarea>
                </div>

                <div id="previewer" style={prevStyle}>
                <div id='prev-bar'>
                    <header id="prev-header">Markdown Previewer</header>
                    <button onClick={this.handleClick}><i  id="maxi-icon" className="far fa-window-maximize"></i></button>
                </div>
                <div id="prev-content" dangerouslySetInnerHTML={{__html: marked(this.state.input)}}></div>
            </div> 
            </div>
        )
    }
}

export default Editor