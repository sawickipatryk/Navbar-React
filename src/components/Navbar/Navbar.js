import React from 'react'
import PropTypes from 'prop-types'

import theme from '../../theme'

import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  Typography,
  Button
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import AdbIcon from '@mui/icons-material/Adb'

const pages = [
  {
    id: 0,
    name: 'BLOG',
    href: '/'
  },
  {
    id: 1,
    name: 'ABOUT ME',
    href: '/about'
  }
]

export const Navbar = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <Box
      sx={{
        ...sx
      }}
      {...otherProps}
    >
      <AppBar
        sx={{
          backgroundColor: theme.palette.background.navBarBackgroundColor
        }}
      >
        <Container
          maxWidth={'lg'}
        >
          <Toolbar>
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%'
              }}
            >
              <Box>
                <IconButton
                  onClick={handleOpenNavMenu}
                  fontSize={'large'}
                  sx={{
                    padding: 0
                  }}
                >
                  <MenuIcon
                    fontSize={'large'}
                    sx={{
                      color: theme.palette.primary.main
                    }}
                  />
                </IconButton>
                <Menu
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiMenu-paper': {
                      width: '100%',
                      color: theme.palette.primary.main,
                      backgroundColor: theme.palette.background.navBarBackgroundColor
                    }
                  }}
                >
                  {
                      pages.map((page) => {
                        return (
                          <MenuItem
                            key={page.id}
                            component={'a'}
                            href={page.href}
                            sx={{
                              padding: '12px 16px'
                            }}
                            onClick={handleCloseNavMenu}
                          >
                            <Typography
                              sx={{
                                fontWeight: theme.typography.fontWeightMedium
                              }}
                            >
                              {page.name}
                            </Typography>
                          </MenuItem>
                        )
                      })
                    }
                </Menu>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <AdbIcon
                  fontSize={'large'}
                  sx={{
                    color: theme.palette.primary.main
                  }}
                />
                <Typography
                  variant={'h4'}
                  noWrap
                  component={'a'}
                  href={'/'}
                  sx={{
                    color: theme.palette.primary.main,
                    textDecoration: 'none',
                    fontWeight: theme.typography.fontWeightBold
                  }}
                >
                  LOGO
                </Typography>
              </Box>
              <Box>
                <Button
                  href={'/login'}
                  sx={{
                    flexGrow: 0,
                    display: 'block',
                    '&:hover': {
                      color: '#fff'
                    }
                  }}
                >
                  Login
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <AdbIcon
                  fontSize={'large'}
                  sx={{
                    color: theme.palette.primary.main
                  }}
                />
                <Typography
                  variant={'h4'}
                  noWrap
                  component={'a'}
                  href={'/'}
                  sx={{
                    color: theme.palette.primary.main,
                    textDecoration: 'none',
                    fontWeight: theme.typography.fontWeightBold
                  }}
                >
                  LOGO
                </Typography>
              </Box>
              <Box>
                {
                    pages.map((page) => {
                      return (
                        <Button
                          key={page.id}
                          href={page.href}
                          sx={{
                            p: 3,
                            '&:hover': {
                              color: '#fff'
                            }
                          }}
                        >
                          {page.name}
                        </Button>
                      )
                    })
                  }
                <Button
                  href={'/login'}
                  sx={{
                    p: 3,
                    '&:hover': {
                      color: '#fff'
                    }
                  }}
                >
                  Login
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

Navbar.propTypes = {
  sx: PropTypes.object
}

export default Navbar
