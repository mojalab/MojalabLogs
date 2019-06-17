export const getDisplayAuthor = (prefix) => {
  switch (prefix) {
    case "moja":
      return "もじゃ"
    case "carton":
      return "カートン"
    case "gasu":
      return "ガースー"
    case "sharibou":
      return "しゃり坊"
    default:
      return "メンバー"
  }
}

export const getDisplayTitle = (prefix) => {
  switch (prefix) {
    case "moja":
      return "Moja's"
    case "carton":
      return "Carton's"
    case "gasu":
      return "Gasu's"
    case "sharibou":
      return "Sharibou's"
    default:
      return "Mojalab"
  }
}
