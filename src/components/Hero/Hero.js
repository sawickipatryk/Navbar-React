import React from 'react'
import PropTypes from 'prop-types'
import theme from '../../theme'

import {
  Box,
  Container,
  Typography
} from '@mui/material'

import OurPosts from '../OurPosts'

import bgcHero from './bcgHero.jpg'

export const Hero = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx
      }}
      {...otherProps}
    >
      <Box
        sx={{
          position: 'relative',
          backgroundImage: `url(${bgcHero})`,
          width: '100%',
          height: '80vh',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
      >
        <Container
          maxWidth={'lg'}
        >
          <Box
            sx={{
              maxWidth: '600px'
            }}
          >
            <Typography
              fontWeight={theme.typography.fontWeightBold}
              variant={'h1'}
              sx={{
                padding: '0px 10px',
                backgroundColor: 'white',
                border: '2px solid black',
                display: 'inline-block'
              }}
            >
              Creative Photography Ideas
            </Typography>
            <Typography
              fontWeight={theme.typography.fontWeightBold}
              variant={'h1'}
              sx={{
                padding: '0px 10px',
                backgroundColor: 'white',
                border: '2px solid black',
                display: 'inline-block'
              }}
            >
              From Smart
            </Typography>
            <br/>
            <Typography
              fontWeight={theme.typography.fontWeightBold}
              variant={'h1'}
              sx={{
                padding: '0px 10px',
                backgroundColor: 'white',
                border: '2px solid black',
                display: 'inline-block'
              }}
            >
              Devices
            </Typography>
          </Box>
        </Container>
      </Box>
      <OurPosts/>
    </Box>
  )
}

Hero.propTypes = {
  sx: PropTypes.object
}

export default Hero
