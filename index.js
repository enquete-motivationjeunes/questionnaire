const urlList = [ 
"https://questionnaires.univ-nantes.fr/index.php/362415?lang=fr",
"https://questionnaires.univ-nantes.fr/index.php/577582?lang=fr",
"https://questionnaires.univ-nantes.fr/index.php/271465?lang=fr",
"https://questionnaires.univ-nantes.fr/index.php/926721?lang=fr",
"https://questionnaires.univ-nantes.fr/index.php/312786?lang=fr",
"https://questionnaires.univ-nantes.fr/index.php/441815?lang=fr",
"https://questionnaires.univ-nantes.fr/index.php/645312?lang=fr",
"https://questionnaires.univ-nantes.fr/index.php/897792?lang=fr",
"https://questionnaires.univ-nantes.fr/index.php/972912?lang=fr",
"https://questionnaires.univ-nantes.fr/index.php/954983?lang=fr",
"https://questionnaires.univ-nantes.fr/index.php/852664?lang=fr",
"https://questionnaires.univ-nantes.fr/index.php/832279?lang=fr",
"https://questionnaires.univ-nantes.fr/index.php/315763?lang=fr",
"https://questionnaires.univ-nantes.fr/index.php/163386?lang=fr",
"https://questionnaires.univ-nantes.fr/index.php/647726?lang=fr"
];

window.location.href = urlList[Math.floor(Math.random() * (urlList.length -1))]

function redirection() {
    window.location.href = urlList[Math.floor(Math.random() * (urlList.length -1))]
}
