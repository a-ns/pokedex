import React from "react";
import { Table, Form, Input, Item, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { Type } from "../../pokemon/components/presentation";
import { updatePokemonOnTeam } from "../actions";
class PokemonTeamCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleStatChange = this.handleStatChange.bind(this);
  }

  handleStatChange(e, i) {
    e.preventDefault();
    console.log(e);
    let stats = [...this.props.stats];
    console.log(stats);
    stats[i].current_stat = e.target.value;
    const pokemon = {
      ...this.props,
      stats
    };
    this.props.updatePokemon(pokemon);
  }
  render() {
    const { sprites, name, id, flavor_text_entries, types, stats } = this.props;
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
                  onClick={this.props.removePokemonFromTeam}
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
                      return (
                        <Table.Cell key={i}>
                          <Form>
                            <Form.Field>
                              <Input
                                placeholder={stat.base_stat}
                                value={stat.current_stat}
                                onChange={e => this.handleStatChange(e, i)}
                              />
                            </Form.Field>
                          </Form>
                        </Table.Cell>
                      );
                    })}
                  </Table.Row>
                </Table.Body>
              </Table>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updatePokemon: pokemon => dispatch(updatePokemonOnTeam(pokemon))
  };
};
export default connect(null, mapDispatchToProps)(PokemonTeamCard);
