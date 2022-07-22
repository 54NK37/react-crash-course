import { useContext } from 'react';
import MeetupItemList from '../components/meetups/MeetupItemList';
import FavoritesContext from '../components/store/favorites-context';

function FavoritesPage()
{
    const favoriteCtx = useContext(FavoritesContext)
    const favorites = favoriteCtx.favorites

    let content;

    if(favoriteCtx.totalFavorites)
    {
        content = <MeetupItemList meetups={favorites}/>
    }
    else{

        content = <p>You got not Favorites yet!</p>
    }

    return (
        <div>
            <h1>My Favorites</h1>
            {content}
        </div>
    )
}

export default FavoritesPage