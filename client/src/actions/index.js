import {GET_DATA} from './types';
import axios from 'axios';


export const retrieveAllData = () => async(dispatch) =>{
    try {
        const res = await axios.get('/api/UserAnalytics');
        dispatch({
            type: GET_DATA,
            payload: res.data
        });

    } catch (error) {
        console.log(error);
    }
};