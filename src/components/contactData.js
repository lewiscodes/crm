import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'

import { withStyles } from '@material-ui/core/styles'

import AddContactItem from './addContactItem'
import ContactItems from './contactItems'

const styles = theme => ({
  root: {
    width: '75%',
    height: 'calc(100vh - 76px)',
    overflow: 'scroll'
  }
})

class ContactData extends Component {
  render () {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <AddContactItem />
        <ContactItems />
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ }, dispatch)
};

function mapStateToProps (state) {
  return { }
};

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactData)))
