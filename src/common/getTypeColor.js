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

export default getTypeColor;
