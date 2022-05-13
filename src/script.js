document.addEventListener("mousemove", (e) => {
  const circle = document.getElementById("circle");
  const halfCircleSize = circle.offsetHeight / 2;
  const mouse_x = e.clientX;
  const mouse_y = e.clientY;
  
  circle.style.left = `${mouse_x - halfCircleSize}px`;
  circle.style.top = `${mouse_y - halfCircleSize}px`;
});

console.log("This pen uses z-index to create a wireframe illusion. The elements in order from back to front are: solid text, circle, outlined text. The circle has a solid background that matches the body background. When the circle passes between the solid and outlined text it covers the solid text which leaves only the outlined text visible.");
