import Link from 'next/link'
import { useState } from 'react'
import Result from '../../components/result'

export default function FirstPost() {
  const [letter, setLetter] = useState('');
  const wordsToSearchFor = ['testas', 'suva', 'tol'];
  const results = [];

  for (var i = 0; i < 3; i++) {
    results.push(<Result key={i} number={i} />);
  };

  const makeAllWordRegExpVariants = word => {
    const words = [];
    const replacement = '[a-z]?';
    for (var i = 0; i < word.length; i++) {
      words.push(word.substr(0, i) + replacement + word.substr(i + 1));
    }
    return words;
  }

  const search = async event => {
    let tmpLetter = letter.toLowerCase();
    //tmpLetter = tmpLetter.replace(/[^a-z]/g, '');
    //event.preventDefault()
    results.splice(0, results.length);
    wordsToSearchFor.forEach(value => {
      if (tmpLetter.includes(value))
        alert(value)
    });
  }

  return (
    <>
      <div className="row">
        <div className="column left">
          <textarea onChange={(e) => setLetter(e.target.value)} />
        </div>
        <div className="column right">
          <button onClick={search}>Search</button>
          { results }
          <h1>First Post</h1>
          <h2>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </h2>
        </div>
      </div>
      <style jsx>{`
      * {
  box-sizing: border-box;
}

textarea {
  width: 100%;
  height: 100%; 
  box-sizing: border-box;
}

/* Create two unequal columns that floats next to each other */
.column {
  float: left;
  padding: 10px;
  height: 300px; /* Should be removed. Only for demonstration */
}

.left {
  width: 80%;
}

.right {
  width: 20%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
      `}</style>
    </>
  )
}