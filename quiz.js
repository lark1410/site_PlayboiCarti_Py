function calculerScore() {
    let score = 0;
    const totalQuestions = 5; 
    const scoreMaxPossible = 15; 

   
    const form = document.getElementById('quizForm');
    
   
    const q1 = form.querySelector('input[name="q1"]:checked');
    const q2 = form.querySelector('input[name="q2"]:checked');
    const q3 = form.querySelector('input[name="q3"]:checked');
    const q4 = form.querySelector('input[name="q4"]:checked');
    const q5 = form.querySelector('input[name="q5"]:checked');

    
    if (!q1 || !q2 || !q3 || !q4 ||!q5) {
        alert("Fais pas le lâche, réponds à toutes les questions !");
        return;
    }

 
    score += parseInt(q1.value);
    score += parseInt(q2.value);
    score += parseInt(q3.value);
    score += parseInt(q4.value);
    score += parseInt(q5.value);

    
    let pourcentage = Math.round((score / scoreMaxPossible) * 100);

   
    document.getElementById('pourcentage').innerText = pourcentage;
    
  
    let message = "";
    if (pourcentage === 100) {
        message = "Tu es littéralement Playboi Carti. FÆHH ! 🧛💋";
    } else if (pourcentage >= 50) {
        message = "Tu est déjà ancré dans le style vamp mais continue encore sur ce chemin!!";
    } else if (pourcentage >=70) {
       message = "Tu as le style, tu as le flow. Un vrai soldat d'Opium! Il ne te manque plus grand chose pour atteindre ton paroxysme vamp"
     } else if (pourcentage >=25) {
       message ="Tu n'es pas encore assez branché!!"
    } else {
        message = "Tu es un random bro. Va écouter du Taylor Swift.";
    }
    
    document.getElementById('phrase-custom').innerText = message;

    
    document.getElementById('resultat').classList.remove('hidden');
}
