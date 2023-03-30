import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFvorite: (id) => { },
    removeFavorite: (id) => { },
});

function FavoritesContextProvider({ children }) {
    const [favoriteMealIds, setFavoriteMealsIds] = useState([]);


    function addFavorite(id) {
        setFavoriteMealsIds((currentFavId) => [...currentFavId, id])
    }

    function removeFavorite(id) {
        setFavoriteMealsIds((currentFavId) => currentFavId.filter((mealId) => mealId !== id));
    }
    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;