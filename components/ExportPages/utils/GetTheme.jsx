'use client'
import { useState } from 'react'
import { useLocalStorage } from '../../Hooks/useLocalStorage'

const GetTheme = () => {
    const {getItem} = useLocalStorage('theme')
  return (
    <div>GetTheme</div>
  )
}

export default GetTheme