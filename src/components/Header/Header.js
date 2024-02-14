import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

import bg from './bg.jpg'

export const Header = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx,
        backgroundImage: `url(${bg})`,
        width: '100%',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
      {...otherProps}
    >

    </Box>
  )
}

Header.propTypes = {
  sx: PropTypes.object
}

export default Header
