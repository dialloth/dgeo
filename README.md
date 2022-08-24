bin dans chaque page
tu mets une class active sur l'un ou l'autre
ou tu créer un bloc droit component
et tu lui passe la class active
en react en principe tu fais des bloc pour chaque truc
pour avoir le moins de redondance possible
la ta structure est bizarre
donc faut appeller tjs la meme chose
mais tu peux dispatcher la carte, la colonne droite etc
en component
et tu passe des props selon l'affichage voulu du genre
<ContentRight activeClass="1" />
dans composant ContentRight tu recup le prop
et si 1 tu mets en surbraillance le 1 si 2 le 2 etc
ou tu t'emmerde pas et tu fais direct dans les dif pages