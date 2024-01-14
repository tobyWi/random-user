'use client'

import { Grid } from '@mui/material'

import { useState } from 'react'

import User from 'components/User'
import { StyledFetchButton } from 'components/Button'
import { ErrorModal } from 'components/ErrorModal'

export type UserProps = {
  dob: { age: number }
  email: string
  gender: 'female' | 'male'
  location: { city: string; country: string }
  login: { username: string }
  name: { title: 'Mr' | 'Mrs' | 'Miss' | 'Ms'; first: string; last: string }
  phone: string
  picture: { large: string }
  registered: { age: string }
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
        throw new Error("Api response wasn't ok, please try again later")

      const { results } = await response.json()

      const [data] = results
      console.log(data)
      setUserData({
        loading: false,
        error: null,
        user: {
          ...data,
        },
      })
    } catch (err) {
      console.error(err)
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
      <ErrorModal
        openModal={openModal}
        handleClose={closeHandler}
        message={userData.error}
      />
    </>
  )
}
