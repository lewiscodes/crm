import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'

import { withStyles } from '@material-ui/core/styles'

import Amber from '@material-ui/core/colors/amber'
import Avatar from '@material-ui/core/Avatar'
import BlueGrey from '@material-ui/core/colors/blueGrey'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Collapse from '@material-ui/core/Collapse'
import Cyan from '@material-ui/core/colors/cyan'
import Divider from '@material-ui/core/Divider'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import LightGreen from '@material-ui/core/colors/lightGreen'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import Pink from '@material-ui/core/colors/pink'
import Purple from '@material-ui/core/colors/purple'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'

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
  userAvatar: {
    backgroundColor: Purple[500]
  },
  aboutCard: {
    display: 'flex',
    flexDirection: 'column'
  },
  subscriptionCard: {
    display: 'flex',
    justifyContent: 'center'
  },
  formCard: {
    display: 'flex'
  },
  casesCard: {
    overflow: 'scroll'
  },
  textField: {
    fontSize: 11
  },
  commercialAvatar: {
    marginLeft: theme.spacing.unit / 2,
    marginRight: theme.spacing.unit / 2,
    backgroundColor: Amber[700]
  },
  btlAvatar: {
    marginLeft: theme.spacing.unit / 2,
    marginRight: theme.spacing.unit / 2,
    backgroundColor: BlueGrey[400]
  },
  developmentAvatar: {
    marginLeft: theme.spacing.unit / 2,
    marginRight: theme.spacing.unit / 2,
    backgroundColor: Pink[500]
  },
  mortgageAvatar: {
    marginLeft: theme.spacing.unit / 2,
    marginRight: theme.spacing.unit / 2,
    backgroundColor: Purple[900]
  },
  secondChargeAvatar: {
    marginLeft: theme.spacing.unit / 2,
    marginRight: theme.spacing.unit / 2,
    backgroundColor: LightGreen['A200']
  },
  bridgingAvatar: {
    marginLeft: theme.spacing.unit / 2,
    marginRight: theme.spacing.unit / 2,
    backgroundColor: Cyan[800]
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
          avatar={<Avatar className={classes.userAvatar}>LT</Avatar>}
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
    const { classes } = this.props

    return (
      <div className={classes.aboutCard}>
        <TextField
          id={'firstName'}
          label={'First Name'}
          value={'Lewis'}
          InputProps={{classes: {input: classes.textField}}}
          margin={'normal'}
          disabled
        />
        <TextField
          id={'lastName'}
          label={'Last Name'}
          value={'Turner'}
          InputProps={{classes: {input: classes.textField}}}
          margin={'normal'}
          disabled
        />
        <TextField
          id={'company'}
          label={'Company'}
          value={'Lewis Codes Ltd'}
          InputProps={{classes: {input: classes.textField}}}
          margin={'normal'}
          disabled
        />
        <TextField
          id={'email'}
          label={'Email Address'}
          value={'lewis@lewiscodes.com'}
          InputProps={{classes: {input: classes.textField}}}
          margin={'normal'}
          disabled
        />
        <TextField
          id={'altEmail'}
          label={'Alternative Email'}
          value={'l.turner@crystalsf.com'}
          InputProps={{classes: {input: classes.textField}}}
          margin={'normal'}
          disabled
        />
        <TextField
          id={'phone'}
          label={'Phone Number'}
          value={'01922112233'}
          InputProps={{classes: {input: classes.textField}}}
          margin={'normal'}
          disabled
        />
        <TextField
          id={'mobile'}
          label={'Mobile Number'}
          value={'07866460214'}
          InputProps={{classes: {input: classes.textField}}}
          margin={'normal'}
          disabled
        />
        <TextField
          id={'bdm'}
          label={'BDM'}
          value={'Kris Corns'}
          InputProps={{classes: {input: classes.textField}}}
          margin={'normal'}
          disabled
        />
        <TextField
          id={'tier'}
          label={'Tier'}
          value={'Silver'}
          InputProps={{classes: {input: classes.textField}}}
          margin={'normal'}
          disabled
        />
        <TextField
          id={'regStat'}
          label={'Reg Stat'}
          value={''}
          InputProps={{classes: {input: classes.textField}}}
          margin={'normal'}
          disabled
        />
        <TextField
          id={'network'}
          label={'network'}
          value={'PTFS'}
          InputProps={{classes: {input: classes.textField}}}
          margin={'normal'}
          disabled
        />
        <TextField
          id={'linkedIn'}
          label={'Linked In'}
          value={'https://www.linkedin.com/in/lewis-turner-26796213b'}
          InputProps={{classes: {input: classes.textField}}}
          margin={'normal'}
          disabled
        />
      </div>
    )
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
            {this.renderSubscriptionsContent()}
          </CardContent>
        </Collapse>
      </Card>
    )
  }

  renderSubscriptionsContent () {
    const { classes } = this.props

    return (
      <div className={classes.subscriptionCard}>
        <Button variant={'outlined'} color={'primary'}>Add Subscription</Button>
      </div>
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
            {this.renderFormContent()}
          </CardContent>
        </Collapse>
      </Card>
    )
  }

  renderFormContent () {
    const { classes } = this.props

    return (
      <div className={classes.formCard}>
        <Tooltip title={'Mr P Merson, £500,000, 20.08.2018'}>
          <Avatar className={classes.commercialAvatar}>C</Avatar>
        </Tooltip>
        <Tooltip title={'Mr D Dublin, £58,000, 01.08.2018'}>
          <Avatar className={classes.developmentAvatar}>D</Avatar>
        </Tooltip>
        <Tooltip title={'Mr J P Angel, £225,000, 13.07.2018'}>
          <Avatar className={classes.mortgageAvatar}>M</Avatar>
        </Tooltip>
        <Tooltip title={'Mr G Barry, £75,000, 12.07.2018'}>
          <Avatar className={classes.secondChargeAvatar}>S</Avatar>
        </Tooltip>
        <Tooltip title={'Mr J Carew, £23,000, 29.06.2018'}>
          <Avatar className={classes.bridgingAvatar}>B</Avatar>
        </Tooltip>
      </div>
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
            {this.renderLeadsContent()}
          </CardContent>
        </Collapse>
      </Card>
    )
  }

  renderLeadsContent () {
    const { classes } = this.props
    return (
      <div className={classes.subscriptionCard}>
        <Button variant={'outlined'} color={'primary'}>Add Lead</Button>
      </div>
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
            {this.renderCasesContent()}
          </CardContent>
        </Collapse>
      </Card>
    )
  }

  renderCasesContent () {
    const { classes } = this.props

    return (
      <Paper className={classes.casesCard}>
        <Table padding={'checkbox'}>
          <TableHead>
            <TableRow>
              <TableCell>Client</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Mr A Young</TableCell>
              <TableCell>Commercial</TableCell>
              <TableCell>£125,000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mr D Yorke</TableCell>
              <TableCell>Bridging</TableCell>
              <TableCell>£15,000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mr A Wright</TableCell>
              <TableCell>BTL</TableCell>
              <TableCell>£155,000</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
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
            ticket
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
