import axios from 'axios';
const BASE_URL = 'http://localhost:8080/api';

const isConnected = false;

export const calculatePercentage = (firstName, secondName) => {
  if (isConnected)
    return axios
      .get(`${BASE_URL}/calculate`, firstName, secondName)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  return mockResponse;
};

export const mockResponse = (response) => {
  return '100%';
};

export const calculate = (data) => {
  const { firstName, secondName, keyword } = data;
  let contactedString =
    firstName.toUpperCase() + keyword.toUpperCase() + secondName.toUpperCase();
  let map = new Map();
  console.log(contactedString);
  while (contactedString.length > 0) {
    let c = contactedString.charAt(0);
    let val = map.get(c);
    if (val) {
      map.set(c, ++val);
    } else {
      map.set(c, 1);
    }
    contactedString = contactedString.slice(1);
  }

  console.log(map.values());
  let list = [...map.values()];
  let results = [];
  let len = list.length;
  while (len > 0) {
    if (list.length === 0) {
      if (results.length === 1) {
        break;
      }
      list = results;
      results = [];
    }
    len = list.length;
    let start = 0;
    let end = len - 1;
    if (end === 0) {
      results = results.concat(list[0]);
      list = list.slice(1);
    } else {
      let startVal = list[start];
      let endVal = list[end];
      results = results.concat(startVal + endVal);
      list = list.slice(0, list.length - 1);
      list = list.slice(1);
    }
  }

  console.log(results);
  return results[0] + '%';
};
