import React from "react";

import Team from "./Team";

import { connect } from "react-redux";

import List from "@material-ui/core/List";

import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  noResult: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: theme.spacing.unit,
    margin: theme.spacing.unit,
  },
});

class TeamList extends React.Component {
  render() {
    const { classes } = this.props;

    console.log("this.props", this.props);

    if (this.props.teams.length > 0) {
      return (
        <List>
          {this.props.teams.map((item) => (
            <Team
              key={item.id}
              index={item.id}
              deletePlayer={this.props.deletePlayer}
              updatePlayer={this.props.updatePlayer}
              name={item.name}
            />
          ))}
        </List>
      );
    } else {
      return <div className={classes.noResult}>No Teams available</div>;
    }
  }
}

export default withStyles(styles)(connect()(TeamList));
