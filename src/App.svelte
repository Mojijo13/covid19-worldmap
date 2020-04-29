<script>
import { onMount } from "svelte"
import { features as geoJson } from './assets/ne_110m_admin_0_countries.json'

import Globe from './components/Globe.svelte'
import ButtonCaption from './components/ButtonCaption.svelte'
import Articles from './components/Articles.svelte'
import Logo from './components/Logo.svelte'
import Data from './components/Data.svelte'

let database = []

onMount(async() => {
	let countryData = []
	try {
		const response = await fetch('https://corona.lmao.ninja/v2/countries')
		const data =  await response.json()
		countryData = geoJson.map(element => {
			return { ...data.find(el => el.countryInfo.iso3 === element.properties.ADM0_A3), geometry: {...element.geometry} }
		})
	} catch(e) {
		console.log(e.message)
	}

	let worldData = []
	try {
		const response = await fetch('https://corona.lmao.ninja/v2/all')
		const data =  await response.json()
		worldData = { ...data, country: "Monde" }
	} catch(e) {
		console.log(e.message)
	}

	database = [ worldData, ...countryData ]
})

</script>

<main id="grid">

	<div id="heading">
		<Logo />
		<h1>Covid19 <span>Worldmap</span></h1>
	</div>

	<div id="panel">
		<Data database={ database } />
	</div>

	<div id="world-map">
		<div class="flex-container">
			<Globe database={ database } />
			<ButtonCaption />
		</div>
	</div>

	<div id="flux">
		<h3>Les dernières actus</h3>
		<Articles />
	</div>

</main>

<style>
#grid {
	display: grid;
	grid-template-columns: 5fr 14fr 5fr;
	grid-template-rows: 100px 1fr;
	grid-template-areas:
		"heading world-map auto"
		"panel world-map flux";
	height: 100vh;
}
#heading {
	grid-area: heading;
	display:flex;
	align-items: center;
	margin-left: 20px;
	margin-top: 20px;
}
#panel {
	grid-area: panel;
}
#world-map {
	grid-area: world-map;
}
#flux {
	grid-area: flux;
}
.flex-container {
	display: flex; 
	flex-direction: column;
	justify-content: space-evenly; 
	align-items: center;
	width: 100%;
	height: 100%;
}
@media screen and (max-width: 992px) {
	#grid {
		grid-template-columns: 6fr 12fr 6fr;
	}
}
@media screen and (max-width: 768px) {
	#grid {
		grid-template-columns: 1fr 2fr;
		grid-template-rows: 100px 450px auto;
		grid-gap: 15px;
		grid-template-areas:
			"heading heading"
			"world-map world-map"
			"panel flux";
	height: auto;
	}
	h3 {
		margin-left: 20px;
	}
}
@media screen and (max-width: 576px) {
	#grid {
		grid-template-columns: 1fr;
		grid-template-rows: 100px 450px auto auto;
		justify-content: space-between;
		grid-gap: 15px;
		grid-template-areas:
			"heading"
			"world-map"
			"panel"
			"flux";
	}
}
h1 {
	font-size: 22px;
	color: #B0C4D6;
}
h1 span {
	font-size: 22px;
	font-weight: 400
}
h3 {
  font-size: 16px;
  margin-bottom: 15px;
	color: #B0C4D6;
}
</style>