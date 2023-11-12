import React from 'react'

export const useLocalStorage = ( key ) => {
  // SET ITEM ON THE LOCALSTORAGE
  const setItem = (value) =>{
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(error)
    }
  }

  // GET ITEM FROM LOCALSTORAGE
  const getItem = () =>{
    try {
      let item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.log(error)
    }
  }

  // GET ITEM FROM LOCALSTORAGE
  const getItemValue = () =>{
    try {
      let item = window.localStorage.getItem(key)
      return item ? item  : null;
    } catch (error) {
      console.log(error)
    }
  }

  // GET ITEM FROM LOCALSTORAGE
  const removeItem = () =>{
    try {
      window.localStorage.removeItem(key)
    } catch (error) {
      console.log(error)
    }
  }
  return{
    setItem,
    getItem,
    getItemValue,
    removeItem
  }
}
