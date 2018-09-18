import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter, Link } from 'react-router'

import { withStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
    width: '90%',
    margin: 'auto'
  },
  filter: {
    marginBottom: theme.spacing.unit * 3
  }
})

class ContactsTable extends Component {
  constructor (props) {
    super(props)

    this.state = {
      filter: '',
      contacts: props.contacts
    }

    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleFilterChange (e) {
    this.setState({filter: e.target.value})
    this.setState({contacts: this.props.contacts.filter((contact) => {
      const name = `${contact[0].firstName} ${contact[0].lastName}`
      return name.toLowerCase().includes(e.target.value.toLowerCase())
    })})
  }

  renderCompanyContactTableRows () {
    return this.state.contacts.map((contact, index) => {
      contact = contact[0]

      const company = this.props.companies.filter(company => {
        return company[0].id === contact.CompayID
      })

      const network = this.props.networks.filter(network => {
        return network[0].id === company[0][0].networkID
      })

      return (
        <TableRow key={index}>
          <TableCell><Link to={`/crm/contact/${contact.id}`}>{`${contact.firstName} ${contact.lastName}`}</Link></TableCell>
          <TableCell><Link to={'/crm/company'}>{company[0][0].name}</Link></TableCell>
          <TableCell><Link to={'/crm/network'}>{network[0][0].name}</Link></TableCell>
          <TableCell>{contact.phone}</TableCell>
          <TableCell>{contact.mobile}</TableCell>
          <TableCell>{contact.email}</TableCell>
          <TableCell>{contact.Tier}</TableCell>
        </TableRow>
      )
    })
  }

  render () {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <TextField
          id={'filter'}
          className={classes.filter}
          placeholder={'Filter Companies'}
          value={this.state.filter}
          onChange={this.handleFilterChange}
          margin={'normal'}
        />
        <Paper className={classes.casesCard}>
          <Table padding={'checkbox'}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Network</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Mobile Number</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Tier</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.renderCompanyContactTableRows()}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ }, dispatch)
};

function mapStateToProps (state) {
  return { companies: state.companies, networks: state.networks, contacts: state.contacts }
};

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactsTable)))
