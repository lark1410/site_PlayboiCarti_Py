window.addEventListener('keydown', (event) => {
  const touche = event.key.toLowerCase();

  if (touche === 'c') {
    const CARTII = document.getElementById('audio-album1');
    if (CARTII) { audioBih.currentTime = 0; audioBih.play().catch(e => {}); }
  } 
  
  else if (touche === 'f') {
    const what = document.getElementById('audio-album2');
    if (what) { audioFaeh.currentTime = 0; audioFaeh.play().catch(e => {}); }
  } 
  
  else if (touche === 's') {
    const seyuh = document.getElementById('audio-album3');
    if (seyuh) { audioSheeyah.currentTime = 0; audioSheeyah.play().catch(e => {}); }
  }
});
