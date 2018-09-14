import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit
  },
  textField: {
    width: '100%'
  },
  button: {
    display: 'block',
    margin: 'auto'
  }
})

class AddContactNote extends Component {
  constructor () {
    super()

    this.state = {
      value: ''
    }
  }

  handleValueChange (value) {
    this.setState({value})
  }

  render () {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <TextField
          className={classes.textField}
          id={'note'}
          placeholder={'Start typing to leave a note...'}
          value={this.state.value}
          onChange={(e) => { this.handleValueChange(e.target.value) }}
          margin={'normal'}
          multiline
        />
        <Button className={classes.button} variant={'outlined'} color={'primary'}>Save Note</Button>
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

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(AddContactNote)))
