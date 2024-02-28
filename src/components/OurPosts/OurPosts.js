import React from 'react'
import PropTypes from 'prop-types'

import ourPost1 from './ourPost1.jpg'
import ourPost2 from './ourPost2.jpg'
import ourPost3 from './ourPost3.jpg'

import theme from '../../theme'

import {
  Box,
  Container,
  Grid,
  Typography
} from '@mui/material'

export const OurPosts = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx,
        marginTop: '-90px'
      }}
      {...otherProps}
    >
      <Container
        maxWidth={'lg'}
      >
        <Grid
          container
          spacing={2}
          sx={{
            marginBottom: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Grid
            item
          >
            <Box
              sx={{
                position: 'relative',
                backgroundImage: `url(${ourPost1})`,
                height: '280px',
                backgroundPosition: 'center',
                minWidth: '355px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '10px',
                minHeight: '370px',
                cursor: 'pointer'
              }}
            >
              <Box
                color={'white'}
              >
                <Typography
                  fontWeight={theme.typography.fontWeightBold}
                  variant={'h6'}
                  sx={{
                    maxWidth: '350px'
                  }}
                >
                  Creative Photography Ideas From Smart Devices
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Typography
                    variant={'caption'}
                  >
                    Jhon Adams
                  </Typography>
                  <Typography
                    variant={'caption'}
                  >
                    10.01.2024
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
          >
            <Box
              sx={{
                position: 'relative',
                backgroundImage: `url(${ourPost2})`,
                height: '280px',
                backgroundPosition: 'center',
                minWidth: '355px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '10px',
                minHeight: '370px',
                cursor: 'pointer'
              }}
            >
              <Box
                color={'white'}
              >
                <Typography
                  fontWeight={theme.typography.fontWeightBold}
                  variant={'h6'}
                  sx={{
                    maxWidth: '350px'
                  }}
                >
                  Creative Photography Ideas From Smart Devices
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Typography
                    variant={'caption'}
                  >
                    Jhon Adams
                  </Typography>
                  <Typography
                    variant={'caption'}
                  >
                    10.01.2024
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
          >
            <Box
              sx={{
                position: 'relative',
                backgroundImage: `url(${ourPost3})`,
                height: '280px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                minWidth: '355px',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '10px',
                minHeight: '370px',
                cursor: 'pointer'
              }}
            >
              <Box
                color={'white'}
              >
                <Typography
                  variant={'h6'}
                  fontWeight={theme.typography.fontWeightBold}
                  sx={{
                    maxWidth: '350px'
                  }}
                >
                  Creative Photography Ideas From Smart Devices
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Typography
                    variant={'caption'}
                  >
                    Jhon Adams
                  </Typography>
                  <Typography
                    variant={'caption'}
                  >
                    10.01.2024
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

OurPosts.propTypes = {
  sx: PropTypes.object
}

export default OurPosts
