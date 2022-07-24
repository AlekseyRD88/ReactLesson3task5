import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile.jsx';

export const userData = {
  firstName: 'James',
  lastName: 'Bond',
  birthDate: '1991-01-17T11:11:11.819Z',
  birthPlace: 'London',
};

const profileElement = document.querySelector('.profile');
ReactDOM.render(<Profile {...userData}/>, profileElement);