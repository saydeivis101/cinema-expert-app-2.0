const persistentState = (newState)=>{
  window.localStorage.setItem('favorites', JSON.stringify(newState))
}

export const favoritesReducer = (state, action) => {
  
  const {payload: actionPayload , type: actionType} = action;

  if(actionType ==='TOOGLE_FAVORITE'){
    const itemInFavorites = state?.findIndex((item)=>(
      item.id === actionPayload.id
    ))

    if(itemInFavorites >= 0) {
      const newState = state.filter((item)=>(
        item.id != actionPayload.id
      ))
      persistentState(newState);
      return newState;
    }

    const newState = [
      ...state,
      {
        ...actionPayload,
      }
    ]
    persistentState(newState);
    return newState;
  }

  if(actionType ==='REMOVE_FROM_FAVORITES'){
    const newState = state.filter((item)=>(
      item.id != actionPayload.id
    ))
    persistentState(newState);
    return newState;
  }

  if(actionType ==='CLEAR_FAVORITES'){
    const newState = [];
    persistentState(newState);
    return newState;
  }

}
