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

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
    width: '90%',
    margin: 'auto'
  }
})

class NetworkContactTable extends Component {
  renderNetworkContactTableRows () {
    return this.props.networks.map((network, index) => {
      network = network[0]

      console.log('network', network)

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
