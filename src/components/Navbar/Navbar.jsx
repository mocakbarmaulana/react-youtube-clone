import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../../utils/constant'
import { SearchBar } from '../index'

const Navbar = () => {
  return (
    <React.Fragment>
      <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", backgroundColor: "#000", top: 0, justifyContent: "space-between" }} >
        <Link to="/">
          <img src={logo} alt="logo" height={45} />
        </Link>
        <SearchBar />
      </Stack>
    </React.Fragment>
  )
}

export default Navbar