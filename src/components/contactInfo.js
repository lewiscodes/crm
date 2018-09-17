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
    height: 'calc(100vh - 128px)',
    overflow: 'scroll',
    paddingTop: 0
  },
  firstCard: {
    margin: theme.spacing.unit,
    marginTop: 0
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
      <Card className={classes.firstCard}>
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
            {this.renderTicketsContent()}
          </CardContent>
        </Collapse>
      </Card>
    )
  }

  renderTicketsContent () {
    const { classes } = this.props

    return (
      <Paper className={classes.casesCard}>
        <Table padding={'checkbox'}>
          <TableHead>
            <TableRow>
              <TableCell>Client</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Mr J Milner</TableCell>
              <TableCell>Client is away on Holiday for 2 weeks.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mr C Benteke</TableCell>
              <TableCell>Lender has asked for extra proof of income.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
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
            {this.renderCompanyContent()}
          </CardContent>
        </Collapse>
      </Card>
    )
  }

  renderCompanyContent () {
    const { classes } = this.props

    return (
      <div className={classes.aboutCard}>
        <TextField
          id={'companyName'}
          label={'Company Name'}
          value={'Lewis Codes Ltd'}
          InputProps={{classes: {input: classes.textField}}}
          margin={'normal'}
          disabled
        />
        <TextField
          id={'address'}
          label={'Address'}
          value={'10 Downing Street, London.'}
          InputProps={{classes: {input: classes.textField}}}
          margin={'normal'}
          disabled
        />
        <TextField
          id={'website'}
          label={'Website'}
          value={'www.lewiscodes.com'}
          InputProps={{classes: {input: classes.textField}}}
          margin={'normal'}
          disabled
        />
        <TextField
          id={'fcaNumber'}
          label={'FCA #'}
          value={'123456'}
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
            {this.renderNetworkContent()}
          </CardContent>
        </Collapse>
      </Card>
    )
  }

  renderNetworkContent () {
    const { classes } = this.props

    return (
      <div className={classes.aboutCard}>
        <TextField
          id={'networkName'}
          label={'Network Name'}
          value={'Personal Touch Financial Services'}
          InputProps={{classes: {input: classes.textField}}}
          margin={'normal'}
          disabled
        />
        <TextField
          id={'networkContact'}
          label={'Network Contact'}
          value={''}
          InputProps={{classes: {input: classes.textField}}}
          margin={'normal'}
          disabled
        />
        <TextField
          id={'dealNotes'}
          label={'Deal Notes'}
          value={''}
          InputProps={{classes: {input: classes.textField}}}
          margin={'normal'}
          multiline
          disabled
        />
      </div>
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
            {this.renderAttachmentContent()}
          </CardContent>
        </Collapse>
      </Card>
    )
  }

  renderAttachmentContent () {
    const { classes } = this.props

    return (
      <div className={classes.subscriptionCard}>
        <Button variant={'outlined'} color={'primary'}>Add Attachment</Button>
      </div>
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
            {this.renderEmailsContent()}
          </CardContent>
        </Collapse>
      </Card>
    )
  }

  renderEmailsContent () {
    const { classes } = this.props

    return (
      <Paper className={classes.casesCard}>
        <Table padding={'checkbox'}>
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>Sent</TableCell>
              <TableCell>Opened</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>01.09.2018</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>20.08.2018</TableCell>
              <TableCell>22.08.2018</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>02.08.2018</TableCell>
              <TableCell>05.08.2018</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>23.06.2018</TableCell>
              <TableCell>23.06.2018</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
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
