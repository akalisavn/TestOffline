import { FETCHING_ASSETS, FETCHING_ASSETS_FAILURE, FETCHING_ASSETS_SUCCESS} from '../constants';

const initialState = {
    assets: [],
    isFetching: false,
    error: false
}

export default function assetReducer(state = initialState, action) {
    switch(action.type) {
        case FETCHING_ASSETS:
            return {
                ...state,
                isFetching: true,
                assets: []
            }
        case FETCHING_ASSETS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                assets: action.data
            }
        case FETCHING_ASSETS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default: 
            return state;
    }
}