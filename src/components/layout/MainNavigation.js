import { Link } from "react-router-dom"
// this css is being inject only for this component
import classes from './MainNavigation.module.css'
import {useContext} from 'react'
import FavoritesContext from "../store/favorites-context"

function MainNavigation() {
    
    const favoriteContext = useContext(FavoritesContext)
    const totalFavorites = favoriteContext.totalFavorites

    return (
        <header className={classes.header}>

            <div className={classes.logo}>
                React Meetups
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add New Meetups</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorites<span className={classes.badge}>{totalFavorites}</span> </Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation