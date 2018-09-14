import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'
import cx from 'classnames'

import { withStyles } from '@material-ui/core/styles'

import AddIcon from '@material-ui/icons/AddCircleOutline'
import Avatar from '@material-ui/core/Avatar'
import CalendarIcon from '@material-ui/icons/CalendarToday'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import EmailIcon from '@material-ui/icons/AlternateEmail'
import NoteIcon from '@material-ui/icons/NoteAdd'
import PhoneIcon from '@material-ui/icons/Phone'

const styles = theme => ({
  root: {
    margin: 'auto',
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5
  },
  note: {
    maxWidth: 500
  },
  email: {
    maxWidth: 500
  },
  call: {
    maxWidth: 400
  },
  activity: {
    maxWidth: 500
  },
  task: {
    maxWidth: 500
  }
})

class ContactItem extends Component {
  getAvatarIcon () {
    switch (this.props.type) {
      case 'note':
        return <NoteIcon />
      case 'email':
        return <EmailIcon />
      case 'call':
        return <PhoneIcon />
      case 'activity':
        return <AddIcon />
      case 'task':
        return <CalendarIcon />
      default:
        return null
    }
  }

  getCardClass () {
    const { classes } = this.props

    return classes[this.props.type]
  }

  render () {
    const { classes } = this.props

    return (
      <Card className={cx(classes.root, this.getCardClass())}>
        <CardHeader
          avatar={<Avatar className={classes.userAvatar}>{this.getAvatarIcon()}</Avatar>}
          title={this.props.title}
          subheader={this.props.date}
        />
        <CardContent>
          hello
        </CardContent>
      </Card>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ }, dispatch)
};

function mapStateToProps (state) {
  return { }
};

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactItem)))
