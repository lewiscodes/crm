import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter, Link } from 'react-router'

import { withStyles } from '@material-ui/core/styles'
import AccountCircle from '@material-ui/icons/AccountCircle'
import AppBar from '@material-ui/core/AppBar'
import Badge from '@material-ui/core/Badge'
import Button from '@material-ui/core/Button'
import ContactsIcon from '@material-ui/icons/Contacts'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import EventIcon from '@material-ui/icons/Event'
import HomeIcon from '@material-ui/icons/Home'
import IconButton from '@material-ui/core/IconButton'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MailIcon from '@material-ui/icons/Mail'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ReportIcon from '@material-ui/icons/Assessment'
import SalesIcon from '@material-ui/icons/MonetizationOn'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { setLoggedIn } from '../actions/user'

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    minHeight: 64
  },
  menu: {
    paddingTop: 0
  }
})

class Navigation extends Component {
  constructor () {
    super()

    this.state = {
      accountMenuAnchorElement: null,
      navigationOpen: false,
      contactsMenuOpen: false
    }

    this.handleAccountMenuOpen = this.handleAccountMenuOpen.bind(this)
    this.handleAccountMenuClose = this.handleAccountMenuClose.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleNavigationToggle = this.handleNavigationToggle.bind(this)
    this.handleContactsMenuToggle = this.handleContactsMenuToggle.bind(this)
  }

  handleContactsMenuToggle () {
    this.setState({contactsMenuOpen: !this.state.contactsMenuOpen})
  }

  handleAccountMenuOpen (e) {
    this.setState({accountMenuAnchorElement: e.currentTarget})
  }

  handleAccountMenuClose () {
    this.setState({accountMenuAnchorElement: null})
  }

  handleLogout () {
    this.handleAccountMenuClose()
    this.props.setLoggedIn(false)
  }

  handleNavigationToggle () {
    this.setState({navigationOpen: !this.state.navigationOpen})
  }

  renderAccountMenu () {
    const isOpen = Boolean(this.state.accountMenuAnchorElement)
    return (
      <Menu
        anchorEl={this.state.accountMenuAnchorElement}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={isOpen}
        onClose={this.handleAccountMenuClose}
      >
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
      </Menu>
    )
  }

  renderAccountSection () {
    if (this.props.user.loggedIn) {
      return (
        <div>
          <IconButton color={'inherit'}>
            <Badge badgeContent={4} color={'secondary'}>
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton color={'inherit'}>
            <Badge badgeContent={4} color={'secondary'}>
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color={'inherit'} onClick={this.handleAccountMenuOpen}>
            <AccountCircle />
          </IconButton>
          {this.renderAccountMenu()}
        </div>
      )
    }

    return (
      <Button color={'inherit'} onClick={() => { this.props.setLoggedIn(true) }}>Login</Button>
    )
  }

  renderContactsMenu () {
    return null
  }

  renderNavigation () {
    const { classes } = this.props

    return (
      <Drawer
        variant={'permanent'}
        anchor={'left'}
      >
        <div className={classes.drawerHeader} />
        <MenuList className={classes.menu}>
          <Divider />
          <Link to={'/'}>
            <MenuItem>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='Dashboard' />
            </MenuItem>
          </Link>
          <Divider />
          <Link to={'/contact'}>
            <MenuItem onMouseEnter={this.handleContactsMenuToggle} onMouseLeave={this.handleContactsMenuToggle}>
              <ListItemIcon>
                <ContactsIcon />
              </ListItemIcon>
              <ListItemText primary='Contacts' />
            </MenuItem>
            {this.renderContactsMenu()}
          </Link>
          <Divider />
          <Link to={'/events'}>
            <MenuItem>
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
              <ListItemText primary='Events' />
            </MenuItem>
          </Link>
          <Divider />
          <Link to={'/sales'}>
            <MenuItem>
              <ListItemIcon>
                <SalesIcon />
              </ListItemIcon>
              <ListItemText primary='Sales' />
            </MenuItem>
          </Link>
          <Divider />
          <Link to={'/reports'}>
            <MenuItem>
              <ListItemIcon>
                <ReportIcon />
              </ListItemIcon>
              <ListItemText primary='Reports' />
            </MenuItem>
          </Link>
          <Divider />
        </MenuList>
      </Drawer>
    )
  }

  renderAppBar () {
    const { classes } = this.props

    return (
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton className={classes.menuButton} color={'inherit'}>
            <MenuIcon onClick={this.handleNavigationToggle} />
          </IconButton>
          <Typography className={classes.grow} variant={'title'} color={'inherit'}>
            {this.props.pageName}
          </Typography>
          {this.renderAccountSection()}
        </Toolbar>
      </AppBar>
    )
  }

  render () {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        {this.renderAppBar()}
        {this.renderNavigation()}
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ setLoggedIn }, dispatch)
};

function mapStateToProps (state) {
  return { user: state.user }
};

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation)))
