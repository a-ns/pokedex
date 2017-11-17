import React from "react";
import { connect } from "react-redux";
import withMargin from "../../common/withMargin";
import { removePokemonFromTeam, updatePokemonOnTeam } from "../actions";
import { Intro } from "../../pokemon/components/presentation";
import "./team.css";
import { Item, Button, Table } from "semantic-ui-react";
import { Type } from "../../pokemon/components/presentation";
const PokemonTeamCard = props => {
  const { sprites, name, id, flavor_text_entries, types, stats } = props;
  return (
    <Item.Group>
      <Item>
        <Item.Image size="tiny" src={sprites.front_default} />

        <Item.Content>
          <Item.Header style={{ display: "block" }} as="a">
            {name}{" "}
            {
              <Button
                style={{ float: "right" }}
                onClick={props.removePokemonFromTeam}
                primary
              >
                Release
              </Button>
            }
          </Item.Header>
          <Item.Meta>
            <Type types={types} />
          </Item.Meta>
          <Item.Extra>
            <Table celled size={"small"}>
              <Table.Header>
                <Table.Row>
                  {stats.map((stat, i) => {
                    return (
                      <Table.HeaderCell key={i}>
                        {stat.stat.name}
                      </Table.HeaderCell>
                    );
                  })}
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  {stats.map((stat, i) => {
                    return <Table.Cell key={i}> {stat.base_stat}</Table.Cell>;
                  })}
                </Table.Row>
              </Table.Body>
            </Table>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};
class Team extends React.Component {
  isTeamEmpty(team) {
    if (!team) return true;
    if (team.length === 0) return true;
    return false;
  }
  render() {
    if (this.isTeamEmpty(this.props.team)) {
      return (
        <div>
          To add pokemon to your team, search for the pokemon you want to add
          then click the 'Team Up!' button [WIP]
        </div>
      );
    }
    return (
      <div className="team-container">
        {this.props.team.map(pokemon => {
          return (
            <div key={pokemon.uuid} className="pokemon-teammate fadeIn">
              <PokemonTeamCard
                {...pokemon}
                removePokemonFromTeam={() => this.props.removeFromTeam(pokemon)}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    team: state.team
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeFromTeam: pokemon => dispatch(removePokemonFromTeam(pokemon)),
    updatePokemonOnTeam: pokemon => dispatch(updatePokemonOnTeam(pokemon))
  };
};
export default withMargin(connect(mapStateToProps, mapDispatchToProps)(Team));
