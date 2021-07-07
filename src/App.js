import './App.css';
import {useSelector, useDispatch} from "react-redux";

const SomeNestedChildComponent = () => {
  const counter = useSelector(({counterValue}) => counterValue);

  return(
      <div>
          <h1>{counter}</h1>
      </div>
  )
}

const SomeChildComponent = () => {
  return(
      <div>
          <SomeNestedChildComponent />
      </div>
  )
}

function App() {
    const dispatch = useDispatch();

  return (
    <div className="App">
        <SomeChildComponent />

        <div className='button'>
            <button onClick={() => {
                dispatch({type: 'INC'})
            }}>inc + 1</button>

            <button onClick={() => {
                dispatch({type: 'INC_TEN', payload: 10})
            }}>inc + 10</button>

            <button onClick={() => {
                dispatch({type: 'INC_HUNDRED', payload: 100})
            }}>inc + 100</button>

            <button onClick={() => {
                dispatch({type: 'RESET'})
            }}>0</button>

            <button onClick={() => {
                dispatch({type: 'DEC'})
            }}>dec - 1</button>

            <button onClick={() => {
                dispatch({type: 'DEC_TEN', payload: -10})
            }}>dec - 10</button>

            <button onClick={() => {
                dispatch({type: 'DEC_HUNDRED', payload: -100})
            }}>dec - 100</button>

        </div>
    </div>
  );
}

export default App;
