/*
Random Color Pallete
*/

window.onload = () => {
  const palettes = ['red', 'white', 'green'];
  const randomPalette = palettes[Math.floor(Math.random() * palettes.length)];
  document.body.classList.add(randomPalette);
};

/*
Marquee Init
*/

Marquee3k.init({
  selector: 'marquee',
});
