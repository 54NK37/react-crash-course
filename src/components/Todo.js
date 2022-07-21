import { useState } from 'react'
import Backdrop from './Backdrop'
import Modal from './Modal'

// custom components should start with Capital letters to differentiate from existing tags
// props : key-value pair of passed string parameters to tag 
// it return JSX . Internally it is converted to plain js
function Todo(props) {

    // set modalIsOpen state to false
    // setModalIsOpen a function to change modalIsOpen
    const [modalIsOpen, setModalIsOpen] = useState(false)

    function deleteHandler() {
        setModalIsOpen(true)
    }

    function closeModalHandler()
    {
        setModalIsOpen(false)
    }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {/* nested JSX */}
            {modalIsOpen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> : null}
            {modalIsOpen ? <Backdrop customOnClick={closeModalHandler} /> : null}
        </div>
    )
}

export default Todo