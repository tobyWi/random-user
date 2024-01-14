'use client'

import { Grid } from '@mui/material'

import { useState } from 'react'

import User from 'components/User'
import { StyledFetchButton } from 'components/Button'
import { ErrorModal } from 'components/ErrorModal'

export type UserProps = {
  firstName: string
  lastName: string
  title: string
  userName: string
  email: string
  phone: string
  gender: string
  picture: { large: string }
  age: number
  city: string
  country: string
  yearsRegistered: number
}
interface UserData {
  loading: boolean
  error: string | null
  user: UserProps | null
}

export default function Home() {
  const [openModal, setOpenModal] = useState(false)
  const [userData, setUserData] = useState<UserData>({
    loading: false,
    error: null,
    user: null,
  })

  const { loading, error, user } = userData

  const fetchUserHandler = () => {
    setUserData({ ...userData, loading: true })
    setTimeout(() => {
      fetchRandomUser()
    }, 2000)
  }

  const closeHandler = () => {
    setOpenModal(false)
  }

  const fetchRandomUser = async () => {
    try {
      setUserData({ ...userData, loading: true, error: null })

      const response = await fetch('https://randomuser.me/api/')

      if (!response.ok)
        throw new Error("Api couldn't fetch user data, please try again!")

      const { results } = await response.json()

      const [data] = results
      const {
        name,
        email,
        phone,
        gender,
        picture,
        login,
        dob,
        location,
        registered,
      } = data

      setUserData({
        loading: false,
        error: null,
        user: {
          firstName: name.first,
          lastName: name.last,
          title: name.title,
          userName: login.username,
          age: dob.age,
          city: location.city,
          country: location.country,
          yearsRegistered: registered.age,
          email,
          phone,
          gender,
          picture,
        },
      })
    } catch (err) {
      console.error('Error occured when trying to fetching user data: ', err)
      setUserData({
        ...userData,
        loading: false,
        error: 'Error occured when trying to fetching user data',
      })
      setOpenModal(true)
    }
  }

  return (
    <>
      <Grid container p={8} alignItems="center" flexDirection="column">
        <h1>USER RANDOMIZER</h1>
        <User loading={loading} user={user} error={error} />
        <StyledFetchButton
          loading={loading}
          handleFetchUser={fetchUserHandler}
        />
      </Grid>
      <ErrorModal openModal={openModal} handleClose={closeHandler} />
    </>
  )
}
