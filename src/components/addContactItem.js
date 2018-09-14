import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'

import AddContactCall from './addContactCall'
import AddContactEmail from './addContactEmail'
import AddContactLogActivity from './addContactLogActivity'
import AddContactNote from './addContactNote'
import AddContactTask from './addContactTask'
import AddIcon from '@material-ui/icons/AddCircleOutline'
import CalendarIcon from '@material-ui/icons/CalendarToday'
import EmailIcon from '@material-ui/icons/AlternateEmail'
import NoteIcon from '@material-ui/icons/NoteAdd'
import Paper from '@material-ui/core/Paper'
import PhoneIcon from '@material-ui/icons/Phone'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
    margin: theme.spacing.unit * 2
  }
})

class AddContactItem extends Component {
  constructor () {
    super()

    this.state = {
      selectedTabIndex: 0
    }

    this.handleTabChange = this.handleTabChange.bind(this)
  }

  handleTabChange (e, index) {
    this.setState({selectedTabIndex: index})
  }

  render () {
    const { classes } = this.props

    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.selectedTabIndex}
          onChange={this.handleTabChange}
          indicatorColor={'primary'}
          textColor={'primary'}
          fullWidth
        >
          <Tab label={'New note'} icon={<NoteIcon />} />
          <Tab label={'Email'} icon={<EmailIcon />} />
          <Tab label={'Call'} icon={<PhoneIcon />} />
          <Tab label={'Log activity'} icon={<AddIcon />} />
          <Tab label={'Create task'} icon={<CalendarIcon />} />
        </Tabs>
        {this.state.selectedTabIndex === 0 ? <AddContactNote /> : null}
        {this.state.selectedTabIndex === 1 ? <AddContactEmail /> : null}
        {this.state.selectedTabIndex === 2 ? <AddContactCall /> : null}
        {this.state.selectedTabIndex === 3 ? <AddContactLogActivity /> : null}
        {this.state.selectedTabIndex === 4 ? <AddContactTask /> : null}
      </Paper>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ }, dispatch)
};

function mapStateToProps (state) {
  return { }
};

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(AddContactItem)))
