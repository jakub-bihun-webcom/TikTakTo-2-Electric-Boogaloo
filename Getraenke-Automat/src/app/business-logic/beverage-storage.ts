import { Beverage } from '../beverage';
import { Compartment } from './compartment';

export const cola: Beverage = {
  name: 'Cola'
}
export const fanta: Beverage = {
  name: 'Fanta'
}
export const sprite: Beverage = {
  name: 'Sprite'
}
export const wasser: Beverage = {
  name: 'Wasser'
}
export const bier: Beverage = {
  name: 'Bier'
}
export const compartment1: Compartment = {
  price: 2,
  beverages: [cola, cola, cola]
}

export const compartment2: Compartment = {
  price: 2.5,
  beverages: [fanta, fanta, fanta, fanta]
}

export const compartment3: Compartment = {
  price: 1.5,
  beverages: [sprite, sprite, sprite]
}

export const compartment4: Compartment = {
  price: 1,
  beverages: []
}
export const compartment5: Compartment = {
  price: 1,
  beverages: []
}
