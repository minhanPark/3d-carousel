var carousel = document.querySelector(".carousel");
var cells = carousel.querySelectorAll(".carousel__cell");
var cellCount; // cellCount set from cells-range input value
var selectedIndex = 0;
var cellWidth = carousel.offsetWidth;
var cellHeight = carousel.offsetHeight;
var isHorizontal = true;
var rotateFn = isHorizontal ? "rotateY" : "rotateX";
var radius, theta;
// console.log( cellWidth, cellHeight );

function rotateCarousel() {
  var angle = theta * selectedIndex * -1;
  carousel.style.transform =
    "translateZ(" + -radius + "px) " + rotateFn + "(" + angle + "deg)";
}

var prevButton = document.querySelector(".previous-button");
prevButton.addEventListener("click", function () {
  selectedIndex--;
  rotateCarousel();
});

var nextButton = document.querySelector(".next-button");
nextButton.addEventListener("click", function () {
  selectedIndex++;
  rotateCarousel();
});

var cellsRange = document.querySelector(".cells-range");
cellsRange.addEventListener("change", changeCarousel);
cellsRange.addEventListener("input", changeCarousel);

function changeCarousel() {
  cellCount = cellsRange.value;
  theta = 360 / cellCount;
  var cellSize = isHorizontal ? cellWidth : cellHeight;
  // 2 * Math.PI는 360도 이다.
  // 여기에 각 항에 cellCount을 나눈다
  // (2 * Math.PI) / cellCount = 360 / cellCount
  // 여기에 우리는 직각을 통해 탄젠트를 사용할 것이므로 나오는 값을 반으로 나눠야 한다.
  // 그래서 다시 2를 또 나눈다
  // ((2 * Math.PI) % cellCount) % 2  = (360 / cellCount) % 2
  // 위의 식을 줄인게 Math.tan( Math.PI / cellCount)

  radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount));

  for (var i = 0; i < cells.length; i++) {
    var cell = cells[i];
    if (i < cellCount) {
      // visible cell
      cell.style.opacity = 1;
      var cellAngle = theta * i;
      cell.style.transform =
        rotateFn + "(" + cellAngle + "deg) translateZ(" + radius + "px)";
    } else {
      // hidden cell
      cell.style.opacity = 0;
      cell.style.transform = "none";
    }
  }

  rotateCarousel();
}

var orientationRadios = document.querySelectorAll('input[name="orientation"]');
(function () {
  for (var i = 0; i < orientationRadios.length; i++) {
    var radio = orientationRadios[i];
    radio.addEventListener("change", onOrientationChange);
  }
})();

function onOrientationChange() {
  var checkedRadio = document.querySelector(
    'input[name="orientation"]:checked'
  );
  isHorizontal = checkedRadio.value == "horizontal";
  rotateFn = isHorizontal ? "rotateY" : "rotateX";
  changeCarousel();
}

// set initials
onOrientationChange();
