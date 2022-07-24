import React from 'react';
import moment from 'moment';
import userData from './index.jsx';

export const formatDate = date => moment(date).format("DD MMM YYYY");
const Profile = (userData) => {
  return(
    <>
    <div className="profile__name">{userData.firstName} {userData.lastName}</div>
    <div className="profile__birth">Was born {formatDate(userData.birthDate)} in {userData.birthPlace}</div>
    </>
  );
};

export default Profile;

