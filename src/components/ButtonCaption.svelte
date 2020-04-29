<script>
  import { currentCaption } from '../store/store.js'

</script>

<div class="radio-btn">
  <span>
    <input type="radio" id="cas" bind:group={$currentCaption} value={0}>
    <label for="cas">Cas</label>
  </span>
  <span>
    <input type="radio" id="deces" bind:group={$currentCaption} value={1}>
    <label for="deces">Décès</label>
  </span>
  <span>
    <input type="radio" id="tests" bind:group={$currentCaption} value={2}>
    <label for="tests">Tests</label>
  </span>
</div>

<style lang="scss">
.radio-btn {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
	background-color: #F3F6F9;
	border: 1px solid #fff;
	border-radius: 2px;
	box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1), 1px 1px 1px white, -1px -1px 1px rgba(0, 0, 0, 0.1) inset, 1px 1px 1px white inset;
}
input[type=radio] {
	display: none;
}
label {
	display: inline-block;
	width: 100px;
	height: 45px;
	cursor: pointer;
	font-weight: 200;
	line-height: 45px;
	text-align:center;
	color: #8094A6;
	transition: color .3s ease-in;
}
label[for=cas]:hover, input[id=cas]:checked + label[for=cas] {
color: #d50000;
}
label[for=deces]:hover, input[id=deces]:checked + label[for=deces] {
	color: #6200ea;
}
label[for=tests]:hover, input[id=tests]:checked + label[for=tests] {
	color: #2962ff;
}

@media screen and (max-width: 768px) {
	.radio-btn {
    position: static;
    transform: translateX(0%);
  }
}
</style>