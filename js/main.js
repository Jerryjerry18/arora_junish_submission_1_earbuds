(() => {
  //console.log("IIFE Fired");
  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {
      title: "Sweat resistance sensor",
      text: "Sweat resistance sensor Help you to keep moving while gyimg or doing any sort of physical activity without interuptting your music essence ",
      image: "images/Style_frames",
    }
  ];

  //functions
  function modelLoaded() {
    //console.log(hotspots);
    hotspots.forEach(hotspot => {
      hotspot.style.display = "block";
    });
  }


  // function loadInfo(){
  //   infoBoxes.forEach((infoBox, index) => {
  //   let selected = document.querySelector(`#hotspot-${index+1}`);
  //   //document.createElement('h2');
  //   //.textContent =infoBox.title;
  //   //document.createElement('p')
  //   //.textContent =infoBox.text;
  //   console.log(selected);
  //   console.log(infoBox.title);
  //   console.log(infoBox.text);

  //   //selected.appendChild();
  //   //selected.appendChild()

  //   }) using in class lecture code is done below
  // }


  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      const selected = document.querySelector(`#hotspot-${index + 1}`);
      const h2 = document.createElement('h2');
      h2.textContent = infoBox.title;
      const p = document.createElement('p');
      p.textContent = infoBox.text;
      selected.appendChild(h2);
      selected.appendChild(p);
    });
  }


  loadInfo();

  function showInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event Listener
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });
})();

// In this version, the event listeners use regular functions instead of arrow functions, so the "this" keyword inside the event listeners will refer to the DOM element that triggered the event.