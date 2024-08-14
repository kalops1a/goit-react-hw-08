import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://66ba5acafa763ff550fb9808.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/contacts`);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 429) {
        return thunkAPI.rejectWithValue('Too Many Requests. Please try again later.');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/contacts`, contact);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 429) {
        return thunkAPI.rejectWithValue('Too Many Requests. Please try again later.');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`${BASE_URL}/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      if (error.response && error.response.status === 429) {
        return thunkAPI.rejectWithValue('Too Many Requests. Please try again later.');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);