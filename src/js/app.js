/*
Random Color Pallete
*/

window.onload = () => {
  const palettes = ['red', 'blue', 'green'];
  const randomPalette = palettes[Math.floor(Math.random() * palettes.length)];
  document.querySelector('.site').classList.add(randomPalette);
};

/*
Marquee Init
*/

Marquee3k.init({
  selector: 'marquee',
});
