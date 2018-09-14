import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit
  },
  comingSoon: {
    padding: theme.spacing.unit * 4
  }
})

class AddContactEmail extends Component {
  render () {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Paper>
          <Typography className={classes.comingSoon} align={'center'} variant={'headline'} color={'inherit'}>
            Coming Soon
          </Typography>
        </Paper>
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

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(AddContactEmail)))
