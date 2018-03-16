export const selectUser = (user) => {
    console.log('You clicked on ', user.first);
    return {
        type: "USER_SELECTED",
        payload: user
    }
}; // this is an action creator

