import React from 'react';

export default class Result extends React.Component {
  selectWord = () => {
    var letterTextElement = document.getElementById('letterText');
    // Place a cursor to specific place
    letterTextElement.setSelectionRange(this.props.index, this.props.index);
    // Below two linses forces browser to scroll text area to a place where cursor is
    letterTextElement.blur();
    letterTextElement.focus();
    // This line selects text
    letterTextElement.setSelectionRange(this.props.index, this.props.index + this.props.word.length);
  }

  render() {
    return (
      <>
        <div className="result" tabindex={this.props.index} onClick={this.selectWord}>{this.props.word}</div>
        <style jsx>{`
        .result {
          height: 25px;
          margin-bottom: 5px;
          background: lightgrey; 
          cursor: pointer;
        }
      
      .result:hover, .result:focus{
          background: green;    
      }
        `}</style>
      </>
    )
  }
}