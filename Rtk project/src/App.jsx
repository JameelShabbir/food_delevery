import { useState } from 'react';
import './App.css';
import Effect from './components/Effect';
import Quiz from './components/Quiz';
import Message from './components/Message';
import Context from './components/Context';

function App() {
  const [count, setCount] = useState(0);

  const updateState = (num) => {
    setState(({ count, updateState }) => {
      return { count: num, updateState: updateState }
    });
  };
  const [state, setState] = useState({
    count: 0,
    updateState: updateState,
  });
  const [users, setUsers] = useState([
    { name: 'Imran Khan', year: 2021, country: 'Pakistan' }
  ]);
  const [finish, setFinish] = useState(false);
  const [result, setResult] = useState()
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [country, setCountry] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      year: Number(year),
      country: country,
    };
    setUsers([...users, newUser]);

    // Reset form fields after submission
    setName('');
    setYear('');
    setCountry('');
  };
  if (finish) {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className='text-warning'>Result</h1>
              <h2 className='text-progress'>You Got:  {result} %</h2>
              <button
                onClick={() => setFinish(false)}
                className='btn btn-success'
              >Play Again</button>
            </div>
          </div>
        </div>

      </>
    )
  }
  return (
    <>
      <Context.Provider value={state}>
        <Message />
      </Context.Provider>


      <Quiz
        onFinish={(finish) => setFinish(finish)}
        onResult={(result) => setResult(result)}
      />
      <form onSubmit={submitForm}>
        <h3>Add user</h3><br />
        <label htmlFor="name">Name </label>
        <input
          style={{ background: 'white' }}
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br /><br />

        <label htmlFor="year">Year</label>
        <input
          style={{ background: 'white' }}
          type="number"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        /><br /><br />

        <label htmlFor="country">Country</label>
        <input
          type="text"
          style={{ background: 'white' }}
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        /><br />

        <button type="submit" style={{ marginTop: '1rem' }}>Submit</button>
      </form>

      <h1>Welcome to the learning of React hooks</h1>
      <h2>{count}</h2>
      <div className="d-flex justify-content-center my-2">
        <button onClick={() => setCount((count) => count + 1)} className='mx-2'>+</button>
        <button onClick={() => setCount((count) => count - 1)}>-</button>
      </div>

      <div className='d-flex justify-content-center'>
        <table className='border w-100 bg-light'>
          <thead className='border bg-dark text-white'>
            <tr>
              <th>Name</th>
              <th>Year</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.year}</td>
                <td>{user.country}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      <p className="read-the-docs">
        <Effect />
      </p>
    </>
  );
}

export default App;
