
import { useNavigate } from 'react-router-dom';
import NewMeetupForm from './../components/meetups/NewMeetupForm';
function NewMeetupPage() {
    const navigate = useNavigate()
    function addMeetupHandler(meetupData) {
        fetch('https://react-crash-course-bb91f-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(() => {
                navigate('/',{replace:true})
            })

    }
    return (
        <div>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </div>
    );
}

export default NewMeetupPage