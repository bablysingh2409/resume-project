let horizontalList = document.querySelectorAll('.nav-menu a');

horizontalList.forEach((ele) => {
  ele.addEventListener('click', function (e) {
    e.preventDefault();
    let listText = e.target.innerText.trim().toLowerCase();
    let targetSection = document.getElementById(listText);
    if (targetSection === null) {
      return;
    }

    let interval = setInterval(function () {
      let coordinates = targetSection.getBoundingClientRect();
      console.log(coordinates);
      if (coordinates.top <= 0) {
        clearInterval(interval);
        return;
      }
      window.scrollBy(0, 50);
    }, 20);
  });
});
