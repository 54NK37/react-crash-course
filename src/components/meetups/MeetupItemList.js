import MeetupItem from './MeetupItem'
import classes from './MeetupItemList.module.css'
function MeetupItemList(props) {
    return (
        <ul className={classes.list}>
            {
                props.meetups.map((meetup) => {
                    return <MeetupItem meetup={meetup} />
                })
            }
        </ul>
    )
}

export default MeetupItemList