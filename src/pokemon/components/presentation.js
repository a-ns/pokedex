import React from "react";
import { Table, Grid, Item } from "semantic-ui-react";
const Presentation = ({ pokemon }) => {
  const {
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
    <div style={{ width: "60%", margin: "0 auto" }}>
      {/* <Card>
              <Image src={sprites.front_default} size="small" />
              <Card.Content>
                {types.map(type => {
                  return <Label>{type.type.name}</Label>;
                })}
              </Card.Content>
            </Card> */}
      <Item.Group>
        <Item>
          <Item.Image size="tiny" src={sprites.front_default} />
          <Item.Content>
            <Item.Header as="a">{name}</Item.Header>
            <Item.Meta>Pokedex Number {id}</Item.Meta>
            <Item.Description>
              {flavor_text_entries[1].flavor_text}
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
    </div>
  );
};

const Pokemon = Presentation;
export default Pokemon;
