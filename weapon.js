var weapon = {
    init: function (name, damage, picture, position) {
        this.name = name;
        this.damage = damage;
        this.picture = picture;
        this.position = position;
    },

    //Définir sa position initiale
    setPosition: function (index, param) {
        //récupère la case avec l'identifiant généré précédemment
        var trayValue = Number(document.getElementById('case' + param).getAttribute('value'));
        position = trayValue;
        this.position = position;
        this.param = param;
        var recupValue = document.getElementById('case' + param);
        return this.position;
    },

    setImage: function (index) {
        var p = document.createElement('p');
        var picture = document.createElement('img');
        picture.setAttribute('src', this.picture);
        picture.setAttribute('id', 'picture');
        var recupValue = document.getElementById('case' + this.param);
        recupValue.appendChild(p);
        recupValue.setAttribute('class', 'weapon' + index);
        //recupValue.classList.add('test2');
        p.appendChild(picture);
    }
};