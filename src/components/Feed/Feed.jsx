import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Sidebar } from '../index'

const Feed = () => {
  return (
    <React.Fragment>
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }} >
        <Box sx={{ height: { sx: "auto", md: "92vh"}, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2} }} >
          <Sidebar />
          <Typography className="copyright" value="body2" sx={{ mt: 1.5, color: "#fff" }}>
            Copyright &copy; {new Date().getFullYear()}
          </Typography>
        </Box>
      </Stack>
    </React.Fragment>
  )
}

export default Feed