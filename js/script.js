const elems = document.querySelectorAll('.tilt');

// v2
const universalTilt = UniversalTilt.init({
  elements: elems,
  settings: {
    // options...
  },
  callbacks: {
    // callbacks...
  }
});

// v1
const universalTilt = new UniversalTilt(elems, {
  // options...
});
