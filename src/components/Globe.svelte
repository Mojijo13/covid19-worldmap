<script>
import { currentCaption, currentCountry } from '../store/store.js';
import { pannable } from '../pannable.js';
import { geoOrthographic, geoPath } from 'd3-geo';
import { scaleLinear } from 'd3-scale';
import { extent } from "d3-array";
import { timer } from 'd3-timer';

import CountryModal from './CountryModal.svelte';

// Variables
export let database

let currentCountryHover = ""
let displayModal = false
let mouseX = 0
let mouseY = 0

// D3 setting
const d3 = { geoOrthographic, geoPath, scaleLinear, extent, timer }
const width = 100
const height = 100
const viewBox = `0 0 ${width} ${height}`  
const palettes = [
  { data: "casesPerOneMillion", colors: [ '#ffbcaf', '#d50000' ] },
  { data: "deathsPerOneMillion", colors: [ '#e7b9ff', '#6200ea' ] },
  { data: "testsPerOneMillion", colors: [ '#b6e3ff', '#2962ff' ] }
]
let colorScale = () => {}

const projection =  d3.geoOrthographic()
  .scale(width/2)
  .translate([height/2, width/2])
  .clipAngle(90)
  .precision(.1)
  .rotate([0, -10])

let path = d3.geoPath().projection(projection)

$:{ 
  const valuesExtent = extent(database, db => db[ palettes[ $currentCaption ].data ])
  colorScale = d3.scaleLinear()
    .domain([valuesExtent[0], valuesExtent[1]/2])
    .range(palettes[ $currentCaption ].colors)
}

class worldRotation {
  constructor () {
    this.wr
    this.inRotation = false
  }

  static start (delay = 0) {
    this.wr = d3.timer(() => {
      const rotate = projection.rotate()
      projection.rotate([rotate[0] + 1 * 0.15, rotate[1]]);
      path = d3.geoPath().projection(projection)
    }, delay)
    this.inRotation = true
  }

  static stop () {
    this.wr.stop()
    this.inRotation = false
  }
}

worldRotation.start()

// Handler 
const handleDrag = event => {
  const rotate = projection.rotate()
  projection.rotate([rotate[0] + event.detail.dx * 0.2, rotate[1] - event.detail.dy * 0.2]);
  path = d3.geoPath().projection(projection)
}

const handleClickPath = country => {
  if(country != undefined) currentCountry.set(country)
}

const handleHover = (event, country) => {
  if(country.country != undefined) {
    mouseX = event.pageX
    mouseY = event.pageY
    currentCountryHover = country
    displayModal = true;
  }
}

const handleMove = () => {
  mouseX = event.pageX
  mouseY = event.pageY
}

</script>

{#if displayModal}
<CountryModal country={currentCountryHover} posX={mouseX} posY={mouseY} />
{/if}

<svg 
  id="globe" 
  viewBox={ viewBox }
  use:pannable 
  on:panstart={ () => worldRotation.stop() } 
  on:panmove={ handleDrag }
  on:panend={ () => worldRotation.start() } 
>

  <circle
    cx={ width/2 }
    cy={ height/2 }
    r={ projection.scale() }
    style="fill: #F3F6F9"
    on:click={ () => currentCountry.set("Monde") }
  ></circle>
  {#each database as country}
  <path
    id={ country.countryInfo ? country.countryInfo.iso3 : "UND" }
    fill={ country[ palettes[ $currentCaption ].data ] ? colorScale( country[ palettes[ $currentCaption ].data ] ) : '#FFF' }
    d={ path(country.geometry) }
    on:click={ handleClickPath(country.country) }
    on:mouseover={ event => handleHover(event, country) }
    on:mousemove={ handleMove }
    on:mouseout={ () => displayModal = false }
  ></path>
  {/each}
</svg>

<style>
svg {
  height: 70%;
  cursor: pointer;
}
path {
  stroke: #F3F6F9;
  stroke-width: 0.05px;
  transition: opacity .2s ease-in
}
@media screen and (max-width: 768px) {
	svg {
    height: 75%;
  }
}
@media screen and (max-width: 576px) {
	svg {
    height: auto;
    width: 90%;
  }
}
</style>