
// Action Types
const FETCH_LISTINGS_REQUEST = 'app/MyNewPage/FETCH_REQUEST';
const FETCH_LISTINGS_SUCCESS = 'app/MyNewPage/FETCH_SUCCESS';
const FETCH_LISTINGS_ERROR = 'app/MyNewPage/FETCH_ERROR';
const CLEAR_LISTINGS = 'app/MyNewPage/CLEAR';

// Initial State
const initialState = {
  listings: [],
  pagination: null,
  loading: false,
  error: null,
  searchParams: {},
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LISTINGS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_LISTINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        listings: action.payload.data,
        pagination: action.payload.meta,
      };
    case FETCH_LISTINGS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_LISTINGS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}


export const fetchListingsSuccess = (payload) => ({ type: FETCH_LISTINGS_SUCCESS, payload });




// Action Creators
export const fetchListings = (searchParams) => async (dispatch, getState, sdk) => {
  dispatch(() => ({ type: FETCH_LISTINGS_REQUEST }));

  try {
y    const response = await sdk.ownListings.query({
    ...searchParams,
  });

    console.log('response', response)
    dispatch(fetchListingsSuccess(response.data));

    return response;
  } catch (error) {
    dispatch({
      type: FETCH_LISTINGS_ERROR,
      payload: error.message,
    });
    throw error;
  }
};

// Selectors
export const myNewPageListingsSelector = (state) => state.MyNewPage.listings;
