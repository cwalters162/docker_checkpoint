const {useEffect, useState} = require('react');

function App() {
  const [fetchResults, setFetchResults] = useState([])

  useEffect( () => {
      fetch('http://172.17.0.3:3001')
      .then(response => response.json())
      .then(data => setFetchResults(data));
    }, []
  )
    if (fetchResults === []) {
      return (<div>
        <p>loading</p>
      </div> )
    } else {
        return (
          <div>
            {fetchResults.map((result, index) => {
              return <p key={index}>{`${result.text}`}</p>
            })}
          </div>
        )
      }
}

export default App;
