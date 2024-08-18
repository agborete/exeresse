const scale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, 500]);

const interpolator = scale.interpolator();

console.log(interpolator(0.5)); // Returns the interpolated value at t = 0.5
