import React from "react";
import { Table, Item, Container, Button } from "semantic-ui-react";
import getTypeColor from "../../common/getTypeColor";

export const Intro = props => {
  const { sprites, name, id, flavor_text_entries, types } = props;
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
                onClick={
                  props.uuid
                    ? props.removePokemonFromTeam
                    : props.addPokemonToTeam
                }
                primary
              >
                {props.uuid ? "Release" : "Team Up!"}
              </Button>
            }
          </Item.Header>
          <Item.Meta>Pokedex Number {id}</Item.Meta>
          <Item.Description>
            {flavor_text_entries[0].flavor_text}
          </Item.Description>

          <Type types={types} />
        </Item.Content>
      </Item>
    </Item.Group>
  );
};

const Move = props => {
  const { move, version_group_details } = props.data;
  return (
    <div>
      <p>{move.name}</p>
      <div>
        {/* {version_group_details.map((version, i) => (
          <div key={i}>
            <span>{version.move_learn_method.name}</span>,
            <span>{version.version_group.name}</span>
          </div>
        ))} */}
        {}
      </div>
    </div>
  );
};

const Type = ({ types }) => {
  return (
    <Item.Extra>
      {types.map((type, i) => {
        return (
          <span
            style={{
              padding: "2px",
              borderRadius: "2px",
              backgroundColor: getTypeColor(type),
              color: "black"
            }}
            key={i}
          >
            {type.type.name}
          </span>
        );
      })}
    </Item.Extra>
  );
};

const Presentation = ({ pokemon, addPokemonToTeam }) => {
  let {
    abilities,
    id,
    name,
    stats,
    sprites,
    types,
    moves,
    flavor_text_entries
  } = pokemon.data;

  return (
    <div className="fadeIn">
      <Intro
        id={id}
        name={name}
        sprites={sprites}
        types={types}
        flavor_text_entries={flavor_text_entries}
        addPokemonToTeam={addPokemonToTeam}
      />
      <Table celled>
        <Table.Header>
          <Table.Row>
            {stats.map((stat, i) => {
              return (
                <Table.HeaderCell key={i}>{stat.stat.name}</Table.HeaderCell>
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
      <Table.Body>
        {moves.map(move => (
          <Table.Row>
            <Table.Cell>
              <Move key={move.move.name} data={move} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </div>
  );
};

export default Presentation;
