import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { saveToken, getToken, removeToken } from './tokenUtils'; 

const BASE_URL = 'https://connections-api.goit.global';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/signup`, credentials);
      const { token } = response.data;
      saveToken(token); 
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/login`, credentials);
      const { token } = response.data;
      saveToken(token); 
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const token = getToken();
      if (!token) {
        throw new Error('No token found');
      }
      await axios.post(`${BASE_URL}/users/logout`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      removeToken(); 
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue }) => {
    try {
      const token = getToken();
      if (!token) {
        throw new Error('No token found');
      }
      const response = await axios.get(`${BASE_URL}/users/current`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      console.log('Sending contact:', contact); 
      const response = await axios.post(`${BASE_URL}/contacts`, contact, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      });
      return response.data; 
    } catch (error) {
      console.error('Error adding contact:', error); 
      return rejectWithValue(error.message);
    }
  }
);