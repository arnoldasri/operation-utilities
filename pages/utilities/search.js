import React from 'react';
import Analyzer from '../../components/analyzer'

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { letterText: '' };

    this.getLetterText = this.getLetterText.bind(this);
  }

  onLetterTextChange = event => this.setState({ letterText: event.target.value });

  getLetterText() {
    return this.state.letterText;
  }

  render() {
    return (<>
      <div className="row">
        <div className="column left">
          <textarea id="letterText" onChange={this.onLetterTextChange} />
        </div>
        <div className="column right">
          <Analyzer getLetterText={this.getLetterText} />
        </div>
      </div>
      <style jsx>{`
        * {
    box-sizing: border-box;
  }
  
  textarea {
    width: 100%;
    height: 95vh;
    box-sizing: border-box;
  }
  
  /* Create two unequal columns that floats next to each other */
  .column {
    float: left;
  }
  
  .left {
    width: 80%;
  }
  
  .right {
    width: 20%;
    padding-left: 5px;
  }
  
  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
        `}</style>
    </>);
  }
}