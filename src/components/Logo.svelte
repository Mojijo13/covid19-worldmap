<svg viewBox="0 0 100 100" >
  <path class="back" d="M50 5 a45 45 0 0 0 0 90">
    <animate  attributeName="d" from="M50 5 a0 45 0 0 0 0 90" to="M50 5 a45 45 0 0 0 0 90" dur="0.8s" repeatCount="indefinite"></animate>
  </path>
  <path class="back" d="M50 5 a45 45 0 0 1 0 90">
    <animate  attributeName="d" from="M50 5 a45 45 0 0 1 0 90" to="M50 5 a0 45 0 0 1 0 90" dur="0.8s" repeatCount="indefinite"></animate>
  </path>
  <path class="back" d="M7 35 a45 15 0 0 0 86 0">
    <animate id="a" attributeName="d" from="M7 35 a45 15 0 0 0 86 0" to="M7 35 a45 0 0 0 0 86 0" dur="0.6s" begin="0s; b.end"></animate>
    <animate id="b" attributeName="d" from="M7 35 a45 0 0 0 0 86 0" to="M7 35 a45 15 0 0 0 86 0" dur="0.6s" begin="a.end"></animate>
  </path>
  <path d="M7 35 a45 15 0 0 1 86 0">
    <animate id="a" attributeName="d" from="M7 35 a45 15 0 0 1 86 0" to="M7 35 a45 0 0 0 1 86 0" dur="0.6s" begin="0s; b.end"></animate>
    <animate id="b" attributeName="d" from="M7 35 a45 0 0 0 1 86 0" to="M7 35 a45 15 0 0 1 86 0" dur="0.6s" begin="a.end"></animate>
  </path>
  <path class="back" d="M7 65 a45 15 0 0 1 86 0">
    <animate id="a" attributeName="d" from="M7 65 a45 0 0 0 1 86 0" to="M7 65 a45 15 0 0 1 86 0" dur="0.6s" begin="0s; b.end"></animate>
    <animate  id="b" attributeName="d" from="M7 65 a45 15 0 0 1 86 0" to="M7 65 a45 0 0 0 1 86 0" dur="0.6s" begin="a.end"></animate>
  </path>
  <path d="M7 65 a45 15 0 0 0 86 0">
    <animate id="a" attributeName="d" from="M7 65 a45 0 0 0 0 86 0" to="M7 65 a45 15 0 0 0 86 0" dur="0.6s" begin="0s; b.end"></animate>
    <animate id="b" attributeName="d" from="M7 65 a45 15 0 0 0 86 0" to="M7 65 a45 0 0 0 0 86 0" dur="0.6s" begin="a.end"></animate>
  </path>
  <path d="M50 5 a45 45 0 0 0 0 90">
    <animate  attributeName="d" from="M50 5 a45 45 0 0 0 0 90" to="M50 5 a0 45 0 0 0 0 90" dur="0.8s" repeatCount="indefinite"></animate>
  </path>
  <path d="M50 5 a45 45 0 0 1 0 90">
    <animate  attributeName="d" from="M50 5 a0 45 0 0 1 0 90" to="M50 5 a45 45 0 0 1 0 90" dur="0.8s" repeatCount="indefinite"></animate>
  </path>
  <circle cx="50" cy="50" r="45"></circle>
</svg>

<style>
  svg{
    width: 35px;
    height: 35px;
    stroke: #B0C4D6;
    fill: none;
    stroke-width: 8px;
    transform-origin: 50% 50%;
    transform: rotate(30deg);
    margin-right: 10px;
  }
  .back {
    stroke: #E0E8EF !important;
  }
</style>