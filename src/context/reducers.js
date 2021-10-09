export default (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      const { job } = action.payload;
      return { ...state, favoriteJobs:[...state.favoriteJobs, job] };

    case 'REMOVE_FAVORITE':
        return {
            favoriteJobs: [
            ...state.favoriteJobs.filter(job => job !== action.payload.job),
          ],
        };
    default:
      return state ;
  }
}
