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

class CompanyContactTable extends Component {
  constructor (props) {
    super(props)

    this.state = {
      filter: '',
      companies: props.companies
    }

    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleFilterChange (e) {
    this.setState({filter: e.target.value})
    this.setState({companies: this.props.companies.filter((company) => {
      return company[0].name.toLowerCase().includes(e.target.value.toLowerCase())
    })})
  }

  renderCompanyContactTableRows () {
    return this.state.companies.map((company, index) => {
      company = company[0]

      const network = this.props.networks.filter(network => {
        return network[0].id === company.networkID
      })

      return (
        <TableRow key={index}>
          <TableCell>{company.name}</TableCell>
          <TableCell>{company.address}</TableCell>
          <TableCell><Link to={'/crm/network'}>{network[0][0].name}</Link></TableCell>
          <TableCell>{company.telephone}</TableCell>
          <TableCell>{company.website}</TableCell>
          <TableCell>{company.fcaNumber}</TableCell>
          <TableCell>{company.linkedIn}</TableCell>
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
                <TableCell>Company</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Network</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Website</TableCell>
                <TableCell>FCA #</TableCell>
                <TableCell>LinkedIn</TableCell>
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
  return { companies: state.companies, networks: state.networks }
};

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(CompanyContactTable)))
