// src/utils/localStorage.js
export const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  
  export const loadFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key)) || [];
  };
  