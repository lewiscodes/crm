import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'

import { withStyles } from '@material-ui/core/styles'

import ContactItem from './contactItem'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    height: 'calc(100vh - 305px)',
    overflow: 'scroll'
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center'
  },
  dateHeader: {
    marginLeft: theme.spacing.unit * 2,
    fontStyle: 'italic'
  }
})

class ContactItems extends Component {
  render () {
    const { classes } = this.props

    return (
      <div className={classes.root}>

        <Typography className={classes.dateHeader} variant={'display1'} color={'primary'}>
          September 2018
        </Typography>
        <ContactItem type={'note'} title={'Received confirmation of Address form Client'} date={'5th September 2018'} />
        <ContactItem type={'call'} title={`Call to chase yesterday's email`} date={'1st September 2018'} />
        <Typography className={classes.dateHeader} variant={'display1'} color={'primary'}>
          August 2018
        </Typography>
        <ContactItem type={'email'} title={'Confirmation of Address'} date={'24th August 2018'} />
        <ContactItem type={'task'} title={'Contact the client to requeest extra proof of Address'} date={'24th August 2018'} />
        <ContactItem type={'activity'} title={'Email form the lender to request extra proof of Address'} date={'23rd AUgust 2018'} />

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

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactItems)))
