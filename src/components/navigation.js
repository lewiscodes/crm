import React, { Component } from 'react'
import cx from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter, Link } from 'react-router'

import { withStyles } from '@material-ui/core/styles'
import AccountCircle from '@material-ui/icons/AccountCircle'
import AppBar from '@material-ui/core/AppBar'
import Badge from '@material-ui/core/Badge'
import Button from '@material-ui/core/Button'
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
  // menu: {
  //   display: 'flex',
  //   paddingTop: 0,
  //   paddingBottom: 0
  // },
  // menuItem: {
  //   borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
  //   borderRight: '1px solid rgba(0, 0, 0, 0.12)'
  // },
  linkItem: {
    textDecoration: 'none',
    color: 'white'
  },
  nestedMenu: {
    paddingLeft: theme.spacing.unit * 2
  },
  menu: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    fontSize: '1rem',
    fontWeight: 400,
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif'
  },
  menuItem: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  },
  menuItemHover: {
    backgroundColor: 'rgba(0, 0, 0, 0.08)'
  },
  menuItemIcon: {
    marginRight: theme.spacing.unit * 2
  }
})

class Navigation extends Component {
  constructor (props) {
    super(props)

    this.state = {
      accountMenuAnchorElement: null,
      navigationOpen: false,
      contactsMenuAnchorElement: null,
      dashboardMenuItemHover: false,
      ContactsMenuItemHover: false,
      eventsMenuItemHover: false,
      salesMenuItemHover: false,
      reportsMenuItemHover: false
    }

    this.handleAccountMenuOpen = this.handleAccountMenuOpen.bind(this)
    this.handleAccountMenuClose = this.handleAccountMenuClose.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleNavigationToggle = this.handleNavigationToggle.bind(this)
    this.handleContactsMenuOpen = this.handleContactsMenuOpen.bind(this)
    this.handleContactsMenuClose = this.handleContactsMenuClose.bind(this)
    this.handleMenuItemHover = this.handleMenuItemHover.bind(this)
  }

  handleMenuItemHover (e, menuItem) {
    this.setState({[`${menuItem}MenuItemHover`]: !this.state[`${menuItem}MenuItemHover`]})
  }

  handleContactsMenuOpen (e) {
    this.setState({contactsMenuAnchorElement: e.currentTarget})
  }

  handleContactsMenuClose () {
    this.setState({contactsMenuAnchorElement: null})
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

    return (
      <Menu
        id={'simple-menu'}
        anchorEl={this.state.contactsMenuAnchorElement}
        open={Boolean(this.state.contactsMenuAnchorElement)}
        onClose={this.handleContactsMenuClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <Link to={'/crm/contact'} className={classes.linkItem}>
          <MenuItem>
            <ListItemIcon>
              <ContactsIcon />
            </ListItemIcon>
            <ListItemText primary='Contact' />
          </MenuItem>
        </Link>
        <Divider />
        <Link to={'/crm/company'} className={classes.linkItem}>
          <MenuItem>
            <ListItemIcon>
              <CompanyIcon />
            </ListItemIcon>
            <ListItemText primary='Company' />
          </MenuItem>
        </Link>
        <Divider />
        <Link to={'/crm/network'} className={classes.linkItem}>
          <MenuItem>
            <ListItemIcon>
              <NetworkIcon />
            </ListItemIcon>
            <ListItemText primary='Network' />
          </MenuItem>
        </Link>
      </Menu>
    )
  }

  renderNav () {
    const { classes } = this.props

    return (
      <div className={classes.grow}>
        <ul className={classes.menu}>
          <Link to={'/crm/'} className={classes.linkItem}>
            <li
              className={cx(classes.menuItem, (this.state.dashboardMenuItemHover ? classes.menuItemHover : null))}
              onMouseEnter={(e) => this.handleMenuItemHover(e, 'dashboard')}
              onMouseLeave={(e) => this.handleMenuItemHover(e, 'dashboard')}
            >
              <HomeIcon className={classes.menuItemIcon} />
              Dashboard
            </li>
          </Link>
          <li
            className={cx(classes.menuItem, (this.state.contactsMenuItemHover ? classes.menuItemHover : null))}
            onMouseEnter={(e) => this.handleMenuItemHover(e, 'contacts')}
            onMouseLeave={(e) => this.handleMenuItemHover(e, 'contacts')}
            onClick={this.state.contactsMenuAnchorElement ? this.handleContactsMenuClose : this.handleContactsMenuOpen}
          >
            <ContactsIcon className={classes.menuItemIcon} />
            Contacts
            {this.renderContactsMenu()}
          </li>
          <Link to={'/crm/events'} className={classes.linkItem}>
            <li
              className={cx(classes.menuItem, (this.state.eventsMenuItemHover ? classes.menuItemHover : null))}
              onMouseEnter={(e) => this.handleMenuItemHover(e, 'events')}
              onMouseLeave={(e) => this.handleMenuItemHover(e, 'events')}
            >
              <EventIcon className={classes.menuItemIcon} />
              Events
            </li>
          </Link>
          <Link to={'/crm/sales'} className={classes.linkItem}>
            <li
              className={cx(classes.menuItem, (this.state.salesMenuItemHover ? classes.menuItemHover : null))}
              onMouseEnter={(e) => this.handleMenuItemHover(e, 'sales')}
              onMouseLeave={(e) => this.handleMenuItemHover(e, 'sales')}
            >
              <SalesIcon className={classes.menuItemIcon} />
              Sales
            </li>
          </Link>
          <Link to={'/crm/reports'} className={classes.linkItem}>
            <li
              className={cx(classes.menuItem, (this.state.reportsMenuItemHover ? classes.menuItemHover : null))}
              onMouseEnter={(e) => this.handleMenuItemHover(e, 'reports')}
              onMouseLeave={(e) => this.handleMenuItemHover(e, 'reports')}
            >
              <ReportIcon className={classes.menuItemIcon} />
              Reports
            </li>
          </Link>
        </ul>
      </div>
    )
  }

  renderNavigation () {
    const { classes } = this.props

    return (
      <Drawer
        variant={'permanent'}
        anchor={'top'}
      >
        <div className={classes.drawerHeader} />
        <Paper>
          <MenuList className={classes.menu}>
            <Divider />
            <Link to={'/crm/'} className={classes.linkItem}>
              <MenuItem className={classes.menuItem}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary='Dashboard' />
              </MenuItem>
            </Link>
            <Divider />
            <MenuItem onClick={this.state.contactsMenuAnchorElement ? this.handleContactsMenuClose : this.handleContactsMenuOpen} disableRipple className={classes.menuItem}>
              <ListItemIcon>
                <ContactsIcon />
              </ListItemIcon>
              <ListItemText primary='Contacts' />
              {this.state.contactsMenuAnchorElement ? <ExpandLess onClick={this.handleClick} /> : <ExpandMore onClick={this.handleClick} />}
              {this.renderContactsMenu()}
            </MenuItem>
            <Divider />
            <Link to={'/crm/events'} className={classes.linkItem}>
              <MenuItem className={classes.menuItem}>
                <ListItemIcon>
                  <EventIcon />
                </ListItemIcon>
                <ListItemText primary='Events' />
              </MenuItem>
            </Link>
            <Divider />
            <Link to={'/crm/sales'} className={classes.linkItem}>
              <MenuItem className={classes.menuItem}>
                <ListItemIcon>
                  <SalesIcon />
                </ListItemIcon>
                <ListItemText primary='Sales' />
              </MenuItem>
            </Link>
            <Divider />
            <Link to={'/crm/reports'} className={classes.linkItem}>
              <MenuItem className={classes.menuItem}>
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
          {this.renderNav()}
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
        {/* {this.renderNavigation()} */}
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
