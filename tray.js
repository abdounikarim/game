var tray = {
    forbiddenHut: [],

    generateTray: function () {
        for (var i = 1; i < 101; i++) {
            $('#tray').append('<div id="case' + i + '"></div>');

            var random = Math.floor(Math.random() * 100 + 1);
            if (random > 80) {
                var recupValue = i;
                this.forbiddenHut.push(recupValue);
            }
        }
    },

    getForbiddenHut: function () {
        this.forbiddenHut.forEach(function (i) {
            //Désactivation des cases
            var disabledHut = document.getElementById('case' + i);
            disabledHut.setAttribute('value', i);
            disabledHut.style.backgroundColor = 'black';
            disabledHut.classList.add('disabled');
            $('.disabled').bind('click');
            if($(".disabled").hasClass('disabled')){
                $('.disabled').unbind('click');
            }

            //PENSER À DÉSACTIVER LES CASES NOIRES
        })
    }
};