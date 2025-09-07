function lightFlickerEffect(element, options = {}) {
  const {
    flickerTimes = 4,
    minDelay = 120,
    maxDelay = 300,
    finalOpacity = 1,
    finalBrightness = 1
  } = options;

  let flickers = 0;

  function flicker() {
    const isOn = Math.random() > 0.5;

    element.style.opacity = isOn ? finalOpacity : 0;
    element.style.filter = `brightness(${isOn ? finalBrightness : 0.1})`;

    flickers++;

    if (flickers < flickerTimes * 2) {
      const nextDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      setTimeout(flicker, nextDelay);
    } else {
      element.style.opacity = finalOpacity;
      element.style.filter = `brightness(${finalBrightness})`;
    }
  }

  flicker();
}

window.addEventListener("load", () => {
  setTimeout(() => {
    const light1 = document.getElementById('light1'); // left
    const light2 = document.getElementById('light2'); // center
    const light3 = document.getElementById('light3'); // right

    if (light1 && light2 && light3) {
      // LEFT — lots of flickering
      lightFlickerEffect(light1, {
        flickerTimes: 6
      });

      // RIGHT — small flicker
      setTimeout(() => {
        lightFlickerEffect(light3, {
          flickerTimes: 2
        });
      }, 1300);

      // CENTER — dramatic final light
      setTimeout(() => {
        lightFlickerEffect(light2, {
          flickerTimes: 4
        });
      }, 2700);
    }
  }, 6100);
});
