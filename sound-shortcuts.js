window.addEventListener('keydown', (event) => {
  const touche = event.key.toLowerCase();

  if (touche === 'c') {
    const CARTII = document.getElementById('audio-album#1');
    if (CARTII) { CARTII.currentTime = 0; CARTII.play().catch(e => {}); }
  } 
  
  else if (touche === 'f') {
    const what = document.getElementById('audio-album#2');
    if (what) { what.currentTime = 0; what.play().catch(e => {}); }
  } 
  
  else if (touche === 's') {
    const seyuh = document.getElementById('audio-album#3');
    if (seyuh) { seyuh.currentTime = 0; seyuh.play().catch(e => {}); }
  }
});
