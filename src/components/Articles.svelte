<script>
import { onMount } from "svelte"
import { scale } from 'svelte/transition';
import Moment from 'moment'
import 'moment/locale/fr';

let articles = []

onMount(async() => {
  try {
    const url = 'http://newsapi.org/v2/top-headlines?' + 'country=fr&' + 'apiKey=3630625b62f5421c8be89cf447cae18b&' + 'pageSize=3&page=1';
    const response = await fetch(url)
    const data = await response.json()
    articles = data.articles
  } catch(e) {
    console.log(e.message)
  } 
})

Moment.locale('fr')

const formatData = date => {
  return Moment(date)
  .fromNow()
}

</script>

<div class="container">
  {#each articles as item, i}
  <article class="block-out" transition:scale="{{delay:i*100}}">
    <a href={item.url} target="blank">
      <div class="a-content">
        <span>{item.source.name}</span>
        <h6>{item.title}</h6>
        <span>{ formatData(item.publishedAt) }</span>
      </div>
      <figure>
        <img src={item.urlToImage} alt="article image"/>
      </figure>
    </a>
  </article>
  {/each}
</div>

<style>
.container {
  padding-right: 20px;
}
article {
  margin-top: 10px;
  background-color: #FFF;
  border-radius: 2px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);

}
article a {
  display: grid;
  grid-template-columns:  1fr 70px;
  grid-gap: 10px;
  grid-template-areas: "a-content a-img";
  cursor: pointer;
  padding: 10px;
}
figure {
  grid-area: "a-img";
  width: 70px;
  height: 70px;
}
figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 5px;
}
h6 {
  color: #102436;
}
.a-content {
  grid-area: "a-content";
}
.a-content span {
  display: block;
  color: #8094A6;
}
.a-content span:nth-child(1) {
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 10px;
}
.a-content span:last-child {
  margin-top: 10px;
}
@media screen and (max-width: 768px) {
  article:last-child {
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 576px) {
	.container {
    padding-left: 20px;
  }
}
</style>