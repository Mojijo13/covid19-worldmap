<script>
import { fade } from 'svelte/transition';
import { currentCountry, numStr } from '../store/store.js';
import Select from 'svelte-select';

export let database 

let currentData
let selectedValue = "Monde"

$: selectedValue = $currentCountry
$: currentCountry.set(selectedValue.value)

$: currentData = database.find(el => el.country === selectedValue.value)

$: selectItems = [ ...database.map(el => el.country).filter(el => el != undefined) ]

</script>

<div class="container">
  <div class="themed">
    <Select items={ selectItems } isClearable={ false } bind:selectedValue></Select>
  </div>

  {#if currentData != undefined}
  <div class="container-data">
    <div class="block-data">
      <span>Cas aujourd'hui</span>
      <span class="digit-data">{ numStr(currentData.todayCases) }</span>
    </div>
    <div class="block-data">
      <span>Décès aujourd'hui</span>
      <span class="digit-data">{ numStr(currentData.todayDeaths) }</span>
    </div>
    <div class="block-data">
      <span>Cas</span>
      <span class="digit-data">{ numStr(currentData.cases) }</span>
    </div>
    <div class="block-data">
      <span>Décès</span>
      <span class="digit-data">{ numStr(currentData.deaths) }</span>
    </div>
    <div class="block-data">
      <span>Cas actifs</span>
      <span class="digit-data">{ numStr(currentData.active) }</span>
    </div>
    <div class="block-data">
      <span>Personnes guéries</span>
      <span class="digit-data">{ numStr(currentData.recovered) }</span>
    </div>
    <div class="block-data">
      <span>Tests effectués</span>
      <span class="digit-data">{ numStr(currentData.tests) }</span>
    </div>
  </div>
  {/if}
</div>

<style>
.container {
  padding-left: 20px;
}
.themed {
  --border: none;
  --borderRadius: 100px;
  --placeholderColor: #8094A6;
  --background: #FAFCFF;
  --itemActiveBackground: #8094A6;

  color: #102436;
  cursor: pointer;
  border-radius: 100px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);
}
.container-data {
  border-radius: 10px;
  background: #FAFCFF;
  margin-top: 15px;
  padding: 15px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);
}
.block-data{
  width: 100%;
  margin-top: 10px;
}
span {
  display: block;
  text-transform: uppercase;
  font-size: 10px;
  color: #8094A6
}
.digit-data{
  font-size: 22px;
  font-weight: 500;
  color: #102436
}
@media screen and (max-width: 768px) {
  .container {
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 576px) {
	.container {
    padding-right: 20px;
  }
}
</style>