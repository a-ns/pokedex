import React from "react";
import { Table, Item, Container, Button } from "semantic-ui-react";

export const Intro = props => {
  const { sprites, name, id, flavor_text_entries, types } = props;
  return (
    <Item.Group>
      <Item>
        <Item.Image size="tiny" src={sprites.front_default} />
        <Item.Content>
          <Item.Header style={{ display: "block" }} as="a">
            {name}{" "}
            {!props.uuid && (
              <Button
                style={{ float: "right" }}
                onClick={props.addPokemonToTeam}
                primary
              >
                Team Up!
              </Button>
            )}
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
    <div key={move.name} style={{ border: "2px solid black" }}>
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

const getTypeColor = type => {
  let backgroundColor;
  switch (type.type.name) {
    case "poison": {
      backgroundColor = "#6a1b9a";
      break;
    }
    case "fire": {
      backgroundColor = "#ffa726";
      break;
    }
    case "fighting": {
      backgroundColor = "#b71c1c";
      break;
    }
    case "water": {
      backgroundColor = "#1a237e";
      break;
    }
    case "grass": {
      backgroundColor = "#43a047";
      break;
    }
    case "ice": {
      backgroundColor = "#81d4fa";
      break;
    }
    case "ground": {
      backgroundColor = "#f9a825";
      break;
    }
    case "electric": {
      backgroundColor = "#ffff00";
      break;
    }
    case "flying": {
      backgroundColor = "#e0f7fa";
      break;
    }
    case "psychic": {
      backgroundColor = "#e91e63";
      break;
    }
    case "bug": {
      backgroundColor = "#76ff03";
      break;
    }
    case "rock": {
      backgroundColor = "#5d4037";
      break;
    }
    case "ghost": {
      backgroundColor = "#ba68c8";
      break;
    }
    case "dragon": {
      backgroundColor = "#311b92";
      break;
    }
    case "dark": {
      backgroundColor = "#424242";
      break;
    }
    case "steel": {
      backgroundColor = "#eeeeee";
      break;
    }
    case "fairy": {
      backgroundColor = "#f48fb1";
      break;
    }
    case "normal": {
      backgroundColor = "#efebe9";
      break;
    }
    default: {
      backgroundColor = "";
      break;
    }
  }
  return backgroundColor;
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
      <Container>
        {moves.map(move => <Move key={move.move.name} data={move} />)}
      </Container>
    </div>
  );
};

export default Presentation;
