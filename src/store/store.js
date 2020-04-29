import { writable } from 'svelte/store'

export const currentCountry = writable("Monde")
export const currentCaption = writable(0)

export const numStr = (a, b = ' ') => {
  a = '' + a
  let c = '', 
      d = 0 

  while(a.match(/^0[0-9]/)) {
    a = a.substring(1)
  }

  for(let i = a.length-1; i >= 0; i--) {
    c = (d != 0 && d % 3 == 0) ? a[i] + b + c : a[i] + c
    d++
  }
  return c
}