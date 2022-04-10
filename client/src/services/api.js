import axios from 'axios';

const URL = 'http://localhost:8000' 

export const addUser = async ( data ) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log('error while calling addUser', error);
  }
}

export const getUsers = async () => {
  try {
    let response = await axios.get(`${URL}/users`);
    return response.data;
  } catch (error) {
    console.log('error while calling getUsers', error);
  }
}

export const setConversation = async ( data ) => {
  try {
     await axios.post(`${URL}/conversation/add`, data);
  } catch (error) {
    console.log('error while calling setConversation', error);
  }
}