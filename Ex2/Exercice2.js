let b = document.body;
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let newP = document.createElement('p');
let htmlContent = '<strong> et du texte important</strong>';

newP.textContent = 'Paragraphe créé et inséré grâce au JavaScript';

p1.insertAdjacentElement('afterend', newP);

p1.insertAdjacentHTML('beforeend', htmlContent);

p2.insertAdjacentText('afterbegin', 'Texte ajouté dans ');


//Supprimez un élément du dom avec la méthode .remove()
let eltDel = b.removeChild(p1);

p2.remove()