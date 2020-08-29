import React from 'react';
import '../App.css';
import Previewer from './Previewer.js'
import {SampleText} from './SampleText.js'

class Editor extends React.Component {
    constructor(){
        super()

        this.state = {
            input: ""
        }
        
        this.handleChange = this.handleChange.bind(this)
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

    render(){
        return(
            <div id="mark-prev">
                <div id="editor">
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
                <Previewer inputText = {this.state.input} />
            </div>
        )
    }
}

export default Editor