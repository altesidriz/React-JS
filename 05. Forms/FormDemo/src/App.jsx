// import UncontrolledForm from './components/UncontrolledForm'
// import ControlledFormRaw from './components/ControlledForm'
import ControlledForm from './components/ControlledForm'
import './App.css'
import { useRef } from 'react'

function App() {

  const formRef = useRef();

  return (
    <>
      {/*<UncontrolledForm /> */}

      <ControlledForm formRef={formRef} />

      <button
        type="button"
        onClick={() => formRef.current.requestSubmit()}
      >
        Submit
      </button>
    </>
  )
}

export default App
