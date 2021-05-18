import React from 'react';
import Result from './result';

export default class Analyzer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };

    this.onAnalyzeClick = this.onAnalyzeClick.bind(this);
    this.render = this.render.bind(this);
  }

  onAnalyzeClick() {
    const wordsToSearchFor = ['testas', 'suva', 'tol'];
    let results = [];
    let key = 0;
    const letterText = this.props.getLetterText();

    function getWordsOf(searchStr, str) {
      var searchStrLen = searchStr.length;
      if (searchStrLen == 0) {
        return [];
      }
      var startIndex = 0, index;

      while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        results.push(<Result key={key} number={key} word={searchStr} index={index} />);
        startIndex = index + searchStrLen;
        key++;
      }
    }

    for (var i = 0; i < wordsToSearchFor.length; i++) {
      getWordsOf(wordsToSearchFor[i], letterText);
    }

    this.setState({ results: results });
  }

  render() {
    console.log('rerenderanalyzer');
    return (<div>
      <button onClick={this.onAnalyzeClick}>Analyze</button>
      { this.state.results }
      <style jsx>{`
        button {
          margin-bottom: 15px;
        }
        `}</style>
    </div>);
  }
}