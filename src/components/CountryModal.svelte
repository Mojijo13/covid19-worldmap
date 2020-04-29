<script>
  import { fade } from 'svelte/transition';
  import { numStr } from '../store/store.js';

  export let country
  export let posX
  export let posY
</script>

<div 
  transition:fade="{{duration: 400}}"
  class="ctr-modal"
  style="left:{posX + 15}px; top:{posY + 15}px"
>
  <div class="heading">
    {#if country.country != undefined}
    <img width="25px" src={country.countryInfo.flag} alt="Flag of {country.countryInfo.country}" />
    {/if}
    <h5>{country.country}</h5>
  </div>
  <div class="content">
    <p><strong>{numStr(country.casesPerOneMillion)} </strong>cas pour un million</p>
    <p><strong>{numStr(country.deathsPerOneMillion)} </strong>morts pour un million</p>
    <p><strong>{numStr(country.testsPerOneMillion)} </strong>tests pour un million</p>
  </div>
</div>

<style>
  .ctr-modal{
    position: absolute;
    border: 1px solid #D3D6D9;
    border-radius: 2px;
    padding:15px 15px;
    width: 170px;
    background: #fff;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
    z-index: 1000;
  }
  .heading {
    display: flex;
    align-items: center;
  }
  img {
    border: 1px solid #D9D9D9;
  }
  h5 {
    display: inline; 
    margin: 0; 
    margin-left: 10px;
  }
  .content {
    margin-top: 10px;
  }
  p {
    margin-top: 5px;
  }
</style>