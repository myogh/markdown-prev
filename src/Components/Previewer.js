import React from 'react';
import '../App.css';
import marked from 'marked'

function Previewer(props){
    return(
        <div id="previewer">
            <header id="prev-header">Markdown Previewer</header>
            <div id="prev-content" dangerouslySetInnerHTML={{__html: marked(props.inputText)}}></div>
        </div>
    )
}

export default Previewer
