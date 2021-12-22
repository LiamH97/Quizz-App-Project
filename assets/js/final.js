/**Grabs the recentScore that was stored in localStorage  **/
const recentScore = localStorage.getItem('recentScore');
/**Grabs the finalScore element from finished.html which is defaulted to 0 **/
const finalScore = document.getElementById('finalScore');
/**Grabs the replaces the inner text of the final score element with the stored score in the recentScore const  **/
finalScore.innerText = recentScore;