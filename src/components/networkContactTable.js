import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'

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

class NetworkContactTable extends Component {
  constructor (props) {
    super(props)

    this.state = {
      filter: '',
      networks: props.networks
    }

    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleFilterChange (e) {
    this.setState({filter: e.target.value})
    this.setState({networks: this.props.networks.filter((network) => {
      return network[0].name.toLowerCase().includes(e.target.value.toLowerCase())
    })})
  }

  renderNetworkContactTableRows () {
    return this.state.networks.map((network, index) => {
      network = network[0]

      return (
        <TableRow key={index}>
          <TableCell>{network.name}</TableCell>
          <TableCell>{network.address}</TableCell>
          <TableCell>{network.contactName}</TableCell>
          <TableCell>{network.dealNotes}</TableCell>
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
          placeholder={'Filter Networks'}
          value={this.state.filter}
          onChange={this.handleFilterChange}
          margin={'normal'}
        />
        <Paper className={classes.casesCard}>
          <Table padding={'checkbox'}>
            <TableHead>
              <TableRow>
                <TableCell>Network</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Notes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.renderNetworkContactTableRows()}
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
  return { networks: state.networks }
};

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(NetworkContactTable)))
