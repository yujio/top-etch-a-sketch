let size = 16;
createSketchboard(16);

function createSketchboard(size) {
  var sketchboard = document.getElementById('sketch-board');

  sketchboard.style.gridTemplateColumns = "repeat(" + size + ", auto)";

  sizeSquared = size * size;
  for (let i = 1; i <= sizeSquared; i++) {
    var sketchboardGridItem = document.createElement('div');
    sketchboardGridItem.id = 'grid-item-' + i;
    sketchboardGridItem.className = 'grid-item';
    sketchboard.appendChild(sketchboardGridItem);
  }

  var hovered = document.getElementsByClassName('grid-item');

  for (let i = 0; i <= sizeSquared - 1; i++) {
    hovered[i].addEventListener("mouseover", function(event) {
      hovered[i].classList.add('hovered');
    })
  }
}



document.getElementById('reset-button').addEventListener('click', function() {
  var sketchboard = document.getElementById('sketch-board');
  sketchboard.innerHTML = '';

  size = prompt('Enter a size between 1 and 64:');
  createSketchboard(size);
})
