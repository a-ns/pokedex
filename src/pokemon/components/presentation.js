import React from "react";
import { Table, Item, Container } from "semantic-ui-react";
const Presentation = ({ pokemon }) => {
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
  flavor_text_entries = flavor_text_entries.filter(
    entry => entry.language.name === "en"
  );
  return (
    <div className="fadeIn">
      <Item.Group>
        <Item>
          <Item.Image size="tiny" src={sprites.front_default} />
          <Item.Content>
            <Item.Header as="a">{name}</Item.Header>
            <Item.Meta>Pokedex Number {id}</Item.Meta>
            <Item.Description>
              {flavor_text_entries[0].flavor_text}
            </Item.Description>
            <Item.Extra>
              {types.map((type, i) => <span key={i}>{type.type.name}</span>)}
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
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
      <Container>
        {moves.map(move => <div key={move.move.name}>{move.move.name}</div>)}
      </Container>
    </div>
  );
};

export default Presentation;
