import classes from './NewMeetupForm.module.css'
import Card from '../ui/Card'
import { useRef } from 'react'

function NewMeetupForm(props)
{
    // for reading input . If you want to change then use useState
    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const addressInputRef = useRef()
    const descriptionInputRef = useRef()

    function onSubmitHandler(event)
    {
        // by default form submission sends http request to server,we want to this later behind the scences to avoid reloading
        event.preventDefault()

        const enteredTitle = titleInputRef.current.value
        const enteredImage = imageInputRef.current.value
        const enteredAddress = addressInputRef.current.value
        const enteredDescription = descriptionInputRef.current.value

        const meetupData ={
            title : enteredTitle,
            image : enteredImage,
            address : enteredAddress,
            description : enteredDescription
            
        }

        props.onAddMeetup(meetupData)
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={onSubmitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup TItle</label>
                    <input type='text' required id='title' ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id='image' ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='address' ref={addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea type='text' required rows='5' id='description' ref={descriptionInputRef} />
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm