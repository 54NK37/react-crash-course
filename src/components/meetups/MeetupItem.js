import Card from '../ui/Card'
import classes from './MeetupItem.module.css'
import {useContext} from 'react'
import FavoritesContext from '../store/favorites-context'

function MeetupItem(props) {
    const favoritesCtx = useContext(FavoritesContext)
    let meetup = props.meetup

    const isItemFavorite = favoritesCtx.itemIsFavorite(meetup.id)

    function toggleFavoriteStatusHandler()
    {
        if(isItemFavorite)
        {
            favoritesCtx.removeFavorite(meetup.id)
        }
        else{
            favoritesCtx.addFavorites({...meetup})
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={meetup.image} alt={meetup.title} />
                </div>
                <div className={classes.content}>
                    <h3>{meetup.title}</h3>
                    <address>{meetup.address}</address>
                    <p>{meetup.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>{!isItemFavorite ? 'To Favorites' : 'Remove from Favorites'}</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem