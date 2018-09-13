import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'

import { withStyles } from '@material-ui/core/styles'

import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import IconButton from '@material-ui/core/IconButton'
import Purple from '@material-ui/core/colors/purple'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
    width: '25%',
    maxWidth: '300px',
    borderRight: '1px solid rgba(0, 0, 0, 0.08)',
    height: 'calc(100vh - 76px)',
    overflow: 'scroll'
  },
  card: {
    margin: theme.spacing.unit
  },
  collapsingCard: {
    cursor: 'pointer'
  },
  avatar: {
    backgroundColor: Purple[500]
  }
})

class ContactInfo extends Component {
  constructor () {
    super()

    this.state = {
      aboutCardOpen: false,
      subscriptionsCardOpen: false,
      formCardOpen: false,
      leadsCardOpen: false,
      casesCardOpen: false,
      ticketsCardOpen: false,
      companyCardOpen: false,
      networkCardOpen: false,
      attachmentsCardOpen: false,
      emailsCardOpen: false
    }

    this.handleCardToggle = this.handleCardToggle.bind(this)
  }

  handleCardToggle (cardType) {
    this.setState({[`${cardType}CardOpen`]: !this.state[`${cardType}CardOpen`]})
  }

  renderBasicInfoCard () {
    const { classes } = this.props

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar className={classes.avatar}>LT</Avatar>}
          title={'Lewis Turner'}
          subheader={'Lewis Codes Ltd'}
        />
      </Card>
    )
  }

  renderAboutCard () {
    const { classes } = this.props

    return (
      <Card className={classes.card}>
        <CardHeader
          title={'About'}
          className={classes.collapsingCard}
          onClick={() => { this.handleCardToggle('about') }}
          action={
            <IconButton>
              {this.state.aboutCardOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          }
        />
        <Collapse in={this.state.aboutCardOpen} timeout='auto' unmountOnExit>
          <Divider />
          <CardContent>
            {this.renderAboutCardContent()}
          </CardContent>
        </Collapse>
      </Card>
    )
  }

  renderAboutCardContent () {
    return null
  }

  renderSubscriptionsCard () {
    const { classes } = this.props

    return (
      <Card className={classes.card}>
        <CardHeader
          title={'Subscriptions'}
          className={classes.collapsingCard}
          onClick={() => { this.handleCardToggle('subscriptions') }}
          action={
            <IconButton>
              {this.state.subscriptionsCardOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          }
        />
        <Collapse in={this.state.subscriptionsCardOpen} timeout='auto' unmountOnExit>
          <Divider />
          <CardContent>
            <div>Subscriptions</div>
          </CardContent>
        </Collapse>
      </Card>
    )
  }

  renderFormCard () {
    const { classes } = this.props

    return (
      <Card className={classes.card}>
        <CardHeader
          title={'Form'}
          className={classes.collapsingCard}
          onClick={() => { this.handleCardToggle('form') }}
          action={
            <IconButton>
              {this.state.formCardOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          }
        />
        <Collapse in={this.state.formCardOpen} timeout='auto' unmountOnExit>
          <Divider />
          <CardContent>
            <div>Form</div>
          </CardContent>
        </Collapse>
      </Card>
    )
  }

  renderLeadsCard () {
    const { classes } = this.props

    return (
      <Card className={classes.card}>
        <CardHeader
          title={'Leads'}
          className={classes.collapsingCard}
          onClick={() => { this.handleCardToggle('leads') }}
          action={
            <IconButton>
              {this.state.leadsCardOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          }
        />
        <Collapse in={this.state.leadsCardOpen} timeout='auto' unmountOnExit>
          <Divider />
          <CardContent>
            <div>Leads</div>
          </CardContent>
        </Collapse>
      </Card>
    )
  }

  renderCasesCard () {
    const { classes } = this.props

    return (
      <Card className={classes.card}>
        <CardHeader
          title={'Cases'}
          className={classes.collapsingCard}
          onClick={() => { this.handleCardToggle('cases') }}
          action={
            <IconButton>
              {this.state.casesCardOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          }
        />
        <Collapse in={this.state.casesCardOpen} timeout='auto' unmountOnExit>
          <Divider />
          <CardContent>
            <div>Cases</div>
          </CardContent>
        </Collapse>
      </Card>
    )
  }

  renderTicketsCard () {
    const { classes } = this.props

    return (
      <Card className={classes.card}>
        <CardHeader
          title={'Tickets'}
          className={classes.collapsingCard}
          onClick={() => { this.handleCardToggle('tickets') }}
          action={
            <IconButton>
              {this.state.ticketsCardOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          }
        />
        <Collapse in={this.state.ticketsCardOpen} timeout='auto' unmountOnExit>
          <Divider />
          <CardContent>
            <div>Tickets</div>
          </CardContent>
        </Collapse>
      </Card>
    )
  }

  renderCompanyCard () {
    const { classes } = this.props

    return (
      <Card className={classes.card}>
        <CardHeader
          title={'Company'}
          className={classes.collapsingCard}
          onClick={() => { this.handleCardToggle('company') }}
          action={
            <IconButton>
              {this.state.companyCardOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          }
        />
        <Collapse in={this.state.companyCardOpen} timeout='auto' unmountOnExit>
          <Divider />
          <CardContent>
            <div>Company</div>
          </CardContent>
        </Collapse>
      </Card>
    )
  }

  renderNetworkCard () {
    const { classes } = this.props

    return (
      <Card className={classes.card}>
        <CardHeader
          title={'Network'}
          className={classes.collapsingCard}
          onClick={() => { this.handleCardToggle('network') }}
          action={
            <IconButton>
              {this.state.networkCardOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          }
        />
        <Collapse in={this.state.networkCardOpen} timeout='auto' unmountOnExit>
          <Divider />
          <CardContent>
            <div>Network</div>
          </CardContent>
        </Collapse>
      </Card>
    )
  }

  renderAttachmentsCard () {
    const { classes } = this.props

    return (
      <Card className={classes.card}>
        <CardHeader
          title={'Attachments'}
          className={classes.collapsingCard}
          onClick={() => { this.handleCardToggle('attachments') }}
          action={
            <IconButton>
              {this.state.attachmentsCardOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          }
        />
        <Collapse in={this.state.attachmentsCardOpen} timeout='auto' unmountOnExit>
          <Divider />
          <CardContent>
            <div>Attachments</div>
          </CardContent>
        </Collapse>
      </Card>
    )
  }

  renderEmailsCard () {
    const { classes } = this.props

    return (
      <Card className={classes.card}>
        <CardHeader
          title={'Emails'}
          className={classes.collapsingCard}
          onClick={() => { this.handleCardToggle('emails') }}
          action={
            <IconButton>
              {this.state.emailsCardOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          }
        />
        <Collapse in={this.state.emailsCardOpen} timeout='auto' unmountOnExit>
          <Divider />
          <CardContent>
            <div>Emails</div>
          </CardContent>
        </Collapse>
      </Card>
    )
  }

  render () {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        {this.renderBasicInfoCard()}
        {this.renderAboutCard()}
        {this.renderSubscriptionsCard()}
        {this.renderFormCard()}
        {this.renderLeadsCard()}
        {this.renderCasesCard()}
        {this.renderTicketsCard()}
        {this.renderCompanyCard()}
        {this.renderNetworkCard()}
        {this.renderAttachmentsCard()}
        {this.renderEmailsCard()}
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

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactInfo)))
