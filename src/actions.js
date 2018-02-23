import { FETCHING_PEOPLE, FETCHING_PEOPLE_FAILURE, FETCHING_PEOPLE_SUCCESS} from './constants';


export function fetchAssetsFromMaximo() {
    return (dispatch) => {
        dispatch(getPeope());

        const queryUri = "https://swapi.co/api/people/";
;

        fetch(queryUri)
            .then( res => res.json())
            .then( json => dispatch(getPeopleSuccess(json.results)))
            .catch( err => dispatch(getPeopleFailure(err)));
    }
}

function getPeople() {
    return {
        type: FETCHING_PEOPLE
    }
}

function getPeopleSuccess(data) {
    return {
        type: FETCHING_PEOPLE_SUCCESS,
        data
    }
}

function getPeopleFailure() {
    return {
        type: FETCHING_PEOPLE_FAILURE
    }
}
