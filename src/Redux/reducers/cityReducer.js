import {ADD_CITY} from './action/types';

const initialState = {
    cityName: '',
    cities: [],
}

const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY:
            return{
                ...state,
                cities : state.cities.concat({
                    key: Math.random(),
                    value: action.payload,
                })
            }
          
        default:
            return state;
    };
}

export default cityReducer;