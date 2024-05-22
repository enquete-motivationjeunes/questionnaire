const urlList = [ 
"https://questionnaires.univ-nantes.fr/index.php/498582?lang=fr", 
"https://questionnaires.univ-nantes.fr/index.php/677514?lang=fr", 
"https://questionnaires.univ-nantes.fr/index.php/996942?lang=fr", 
"https://questionnaires.univ-nantes.fr/index.php/168527?lang=fr", 
"https://questionnaires.univ-nantes.fr/index.php/813863?lang=fr", 
"https://questionnaires.univ-nantes.fr/index.php/137533?lang=fr", 
"https://questionnaires.univ-nantes.fr/index.php/861516?lang=fr", 
"https://questionnaires.univ-nantes.fr/index.php/236718?lang=fr", 
"https://questionnaires.univ-nantes.fr/index.php/337158?lang=fr", 
"https://questionnaires.univ-nantes.fr/index.php/152841?lang=fr", 
"https://questionnaires.univ-nantes.fr/index.php/925117?lang=fr", 
"https://questionnaires.univ-nantes.fr/index.php/235667?lang=fr", 
"https://questionnaires.univ-nantes.fr/index.php/354337?lang=fr", 
"https://questionnaires.univ-nantes.fr/index.php/732353?lang=fr", 
"https://questionnaires.univ-nantes.fr/index.php/289557?lang=fr", 
"https://questionnaires.univ-nantes.fr/index.php/199492?lang=fr", 
"https://questionnaires.univ-nantes.fr/index.php/874991?lang=fr", 
"https://questionnaires.univ-nantes.fr/index.php/776112?lang=fr", 
"https://questionnaires.univ-nantes.fr/index.php/748538?lang=fr", 
"https://questionnaires.univ-nantes.fr/index.php/221385?lang=fr"
];

window.location.href = urlList[Math.floor(Math.random() * (urlList.length -1))]

function redirection() {
    window.location.href = urlList[Math.floor(Math.random() * (urlList.length -1))]
}
