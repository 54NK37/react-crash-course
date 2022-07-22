import MeetupItemList from "../components/meetups/MeetupItemList";
import { useState, useEffect } from 'react'

// const DUMMY_DATA = [
//     {
//         id: 'm1',
//         title: 'This is a first meetup',
//         image:
//             'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Meetupstreet 5, 12345 Meetup City',
//         description:
//             'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//         id: 'm2',
//         title: 'This is a second meetup',
//         image:
//             'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Meetupstreet 5, 12345 Meetup City',
//         description:
//             'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
// ];


function AllMeetupsPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    // [] means it would execute for first time 
    // with this the code would executed based on change in external dependencies []
    useEffect(() => {
        setIsLoading(true)
        fetch('https://react-crash-course-bb91f-default-rtdb.firebaseio.com/meetups.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {

                const meetups = []
                for(let key in data)
                {
                    const meetup = {id : key,...data[key]}
                    meetups.push(meetup)
                }

                console.log(meetups)
                setLoadedMeetups(meetups)
                setIsLoading(false)
            })

    }, [])


    if (isLoading) {
        return (
            <section>
                Loading...
            </section>
        )
    }

    return (
        <div>
            <h1>All Meetups Page</h1>
            <MeetupItemList meetups={loadedMeetups} />
        </div>
    )
}

export default AllMeetupsPage