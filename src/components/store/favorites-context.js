import {createContext,useState} from 'react'

const FavoritesContext = createContext({
    favorites :[],
    totalFavorites :0,
    addFavorites : (favoriteMeetup)=>{},
    removeFavorite : (meetupId)=>{},
    itemIsFavorite : (meetupId)=>{}
})

export function FavoritesContextProvider(props)
{
    // whenever setuserFavorites is used indirectly context will be changed
    const  [userFavorites,setuserFavorites] = useState([])

    function addFavoriteHandler(favoriteMeetup){
        // use this way if depending on prevValues
        setuserFavorites((prevUserFavorites)=>{
            return prevUserFavorites.concat(favoriteMeetup)
        })
    }
    function removeFavoriteHandler(meetupId){
        setuserFavorites((prevUserFavorites)=>{
            return prevUserFavorites.filter(data=>data.id !== meetupId)
        })
    }
    function itemIsFavoriteHandler(meetupId){
        return userFavorites.some(data=>data.id === meetupId) 
    }


    // whenever context is changed,all components listening to it will be updated
    const context = {
        favorites :userFavorites,
        totalFavorites :userFavorites.length,
        addFavorites : addFavoriteHandler,
        removeFavorite : removeFavoriteHandler,
        itemIsFavorite : itemIsFavoriteHandler
    }

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )

}

export default FavoritesContext