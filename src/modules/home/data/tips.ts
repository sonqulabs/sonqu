import { Tips } from '../interfaces/tips'

export function GetTips(): Tips[] {
  return [
    {
      title: '¿Cómo se prende el carbón?',
      description:
        'Forma una casita con el carbón. Corta un trozo de papel de la bolsa del carbón y forma un churrito. Ponlo en el centro de la casita de carbón y prende el papel.Recuerda que tienes que dejar un hueco en la casita de carbón para no ahogar el fuego.',
      img: '/carbon-tip.jpg'
    },
    {
      title: '¿Pelar huevos duros fácilmente?',
      description:
        'Si quieres pelar fácilmente los huevos duros solo tienes que añadir un buen chorro de vinagre al agua de cocción, de esta manera, el ácido ablandará la cáscara y hará que los huevos se pelen con mayor facilidad.',
      img: '/huevos-tip.jpg'
    }
  ]
}
