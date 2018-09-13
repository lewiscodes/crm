import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter, Link } from 'react-router'

import { withStyles } from '@material-ui/core/styles'
import AccountCircle from '@material-ui/icons/AccountCircle'
import AppBar from '@material-ui/core/AppBar'
import Badge from '@material-ui/core/Badge'
import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse'
import CompanyIcon from '@material-ui/icons/Business'
import ContactsIcon from '@material-ui/icons/Contacts'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import EventIcon from '@material-ui/icons/Event'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import HomeIcon from '@material-ui/icons/Home'
import IconButton from '@material-ui/core/IconButton'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MailIcon from '@material-ui/icons/Mail'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import NetworkIcon from '@material-ui/icons/BusinessCenter'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Paper from '@material-ui/core/Paper'
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
    paddingTop: 0,
    paddingBottom: 0
  },
  linkItem: {
    textDecoration: 'none'
  },
  nestedMenu: {
    paddingLeft: theme.spacing.unit * 2
  }
})

class Navigation extends Component {
  constructor (props) {
    super(props)

    this.state = {
      accountMenuAnchorElement: null,
      navigationOpen: false,
      contactsMenuOpen: this.props.contactMenuOpenOnLoad
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
            <Badge badgeContent={11} color={'secondary'}>
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
    const { classes } = this.props

    if (this.state.contactsMenuOpen) {
      return (
        <Collapse in={this.state.contactsMenuOpen} timeout='auto' unmountOnExit>
          <Divider />
          <div className={classes.nestedMenu}>
            <Link to={'/contact'} className={classes.linkItem}>
              <MenuItem>
                <ListItemIcon>
                  <ContactsIcon />
                </ListItemIcon>
                <ListItemText primary='Contact' />
              </MenuItem>
            </Link>
            <Divider />
            <Link to={'/company'} className={classes.linkItem}>
              <MenuItem>
                <ListItemIcon>
                  <CompanyIcon />
                </ListItemIcon>
                <ListItemText primary='Company' />
              </MenuItem>
            </Link>
            <Divider />
            <Link to={'/network'} className={classes.linkItem}>
              <MenuItem>
                <ListItemIcon>
                  <NetworkIcon />
                </ListItemIcon>
                <ListItemText primary='Network' />
              </MenuItem>
            </Link>
          </div>
        </Collapse>
      )
    }

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
        <Paper>
          <MenuList className={classes.menu}>
            <Divider />
            <Link to={'/'} className={classes.linkItem}>
              <MenuItem>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary='Dashboard' />
              </MenuItem>
            </Link>
            <Divider />
            <MenuItem onClick={this.handleContactsMenuToggle} disableRipple>
              <ListItemIcon>
                <ContactsIcon />
              </ListItemIcon>
              <ListItemText primary='Contacts' />
              {this.state.contactsMenuOpen ? <ExpandLess onClick={this.handleClick} /> : <ExpandMore onClick={this.handleClick} />}
            </MenuItem>
            {this.renderContactsMenu()}
            <Divider />
            <Link to={'/events'} className={classes.linkItem}>
              <MenuItem>
                <ListItemIcon>
                  <EventIcon />
                </ListItemIcon>
                <ListItemText primary='Events' />
              </MenuItem>
            </Link>
            <Divider />
            <Link to={'/sales'} className={classes.linkItem}>
              <MenuItem>
                <ListItemIcon>
                  <SalesIcon />
                </ListItemIcon>
                <ListItemText primary='Sales' />
              </MenuItem>
            </Link>
            <Divider />
            <Link to={'/reports'} className={classes.linkItem}>
              <MenuItem>
                <ListItemIcon>
                  <ReportIcon />
                </ListItemIcon>
                <ListItemText primary='Reports' />
              </MenuItem>
            </Link>
            <Divider />
          </MenuList>
        </Paper>
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
