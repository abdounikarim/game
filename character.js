var character = {
    //Constructeur
    init: function (name, picture, health, damage, index, weapon) {
        this.name = name;
        this.picture = picture;
        this.health = health;
        this.damage = damage;
        this.index = index;
        this.weapon = weapon;
    },
    
    //Définir sa position initiale
    setPosition: function (index, param) {
        //récupère la case avec l'identifiant généré précédemment
        //var trayValue = Number(document.getElementById('case' + param).getAttribute('value'));
        //position = trayValue;
        this.position = param;
        this.param = param;
        return this.position;
    },

    setImage: function (index) {
        var p = document.createElement('p');
        var picture = document.createElement('img');
        picture.setAttribute('src', this.picture);
        picture.setAttribute('id', 'picture');
        var recupValue = document.getElementById('case' + this.param);
        recupValue.appendChild(p);
        recupValue.setAttribute('class', 'player' + index);
        //recupValue.classList.add('test2');
        p.appendChild(picture);
    },

    getPosition: function () {
        return this.position;
    },

    canMove: function () {
        var character = this;
        var position = this.getPosition();
        var index = this.index;
        var health = this.health;
        var damage = this.damage;

        //Can move to top
        if (position >= 11 && position <= 20) {
            var top = position - 10;
            var colorTop = document.getElementById("case" + top);
            colorTop.style.backgroundColor = "#ABA8B2";
            $('#case' +top).addClass('active');
            if($('#case' + top).hasClass('disabled')){
                //Case du dessus désactiver le clic -> classe active; remettre le fond en noir
                $("#case" + top).removeClass('active');
                $("#case" + top).css('background-color', 'black');
            }
            if($('#case' + top).hasClass('weapon1') || $('#case' + top).hasClass('weapon2') || $('#case' + top).hasClass('weapon3')){
                $('#case' + top).click(function () {
                    if($('#case' + top).hasClass('weapon1'))
                    {
                        character.changeWeapon(1);
                    }
                    else if($('#case' + top).hasClass('weapon2'))
                    {
                        character.changeWeapon(2);
                    }
                    else if($('#case' + top).hasClass('weapon3'))
                    {
                        character.changeWeapon(3);
                    }
                });
            }
        }
        else if (position > 21 && position <= 30) {
            var top = position - 10;
            var colorTop = document.getElementById("case" + top);
            colorTop.style.backgroundColor = "#ABA8B2";
            $('#case' +top).addClass('active');

            var top2 = position - 20;
            var colorTop2 = document.getElementById("case" + top2);
            colorTop2.style.backgroundColor = "#ABA8B2";
            $('#case' +top2).addClass('active');

            //Si la case du dessus est noire, ne pas activer la case encore au-dessus
            if($('#case' + top).hasClass('disabled')){
                //Case du dessus désactiver le clic -> classe active; remettre le fond en noir
                $("#case" + top).removeClass('active');
                $("#case" + top).css('background-color', 'black');
                //Case encore au-dessus désactiver le clic -> classe active; remettre le fond en blanc
                $("#case" + top2).removeClass('active');
                $("#case" + top2).css('background-color', 'white');
            }
            if($('#case' + top).hasClass('weapon1') || $('#case' + top).hasClass('weapon2') || $('#case' + top).hasClass('weapon3')){
                $('#case' + top).click(function () {
                    if($('#case' + top).hasClass('weapon1'))
                    {
                        character.changeWeapon(1);
                    }
                    else if($('#case' + top).hasClass('weapon2'))
                    {
                        character.changeWeapon(2);
                    }
                    else if($('#case' + top).hasClass('weapon3'))
                    {
                        character.changeWeapon(3);
                    }
                });
            }
            if($('#case' + top2).hasClass('weapon1') || $('#case' + top2).hasClass('weapon2') || $('#case' + top2).hasClass('weapon3')){
                $('#case' + top2).click(function () {
                    if($('#case' + top2).hasClass('weapon1'))
                    {
                        character.changeWeapon(1);
                    }
                    else if($('#case' + top2).hasClass('weapon2'))
                    {
                        character.changeWeapon(2);
                    }
                    else if($('#case' + top2).hasClass('weapon3'))
                    {
                        character.changeWeapon(3);
                    }
                });
            }

        }
        else if (position > 30 && position <= 100) {
            var top = position - 10;
            var colorTop = document.getElementById("case" + top);
            colorTop.style.backgroundColor = "#ABA8B2";
            $('#case' +top).addClass('active');

            var top2 = position - 20;
            var colorTop2 = document.getElementById("case" + top2);
            colorTop2.style.backgroundColor = "#ABA8B2";
            $('#case' +top2).addClass('active');

            var top3 = position - 30;
            var colorTop3 = document.getElementById("case" + top3);
            colorTop3.style.backgroundColor = "#ABA8B2";
            $('#case' +top3).addClass('active');

            //Si la case du dessus est noire, ne pas activer la case encore au-dessus
            if($('#case' + top).hasClass('disabled')){
                $("#case" + top).removeClass('active');
                $("#case" + top).css('background-color', 'black');
                $("#case" + top2).removeClass('active');
                $("#case" + top2).css('background-color', 'white');
                $("#case" + top3).removeClass('active');
                $("#case" + top3).css('background-color', 'white');
            }
            else if($('#case' + top2).hasClass('disabled')){
                $("#case" + top2).removeClass('active');
                $("#case" + top2).css('background-color', 'black');
                $("#case" + top3).removeClass('active');
                $("#case" + top3).css('background-color', 'white');
            }
            if($('#case' + top).hasClass('weapon1') || $('#case' + top).hasClass('weapon2') || $('#case' + top).hasClass('weapon3')){
                $('#case' + top).click(function () {
                    if($('#case' + top).hasClass('weapon1'))
                    {
                        character.changeWeapon(1);
                    }
                    else if($('#case' + top).hasClass('weapon2'))
                    {
                        character.changeWeapon(2);
                    }
                    else if($('#case' + top).hasClass('weapon3'))
                    {
                        character.changeWeapon(3);
                    }
                });
            }
            if($('#case' + top2).hasClass('weapon1') || $('#case' + top2).hasClass('weapon2') || $('#case' + top2).hasClass('weapon3')){
                $('#case' + top2).click(function () {
                    if($('#case' + top2).hasClass('weapon1'))
                    {
                        character.changeWeapon(1);
                    }
                    else if($('#case' + top2).hasClass('weapon2'))
                    {
                        character.changeWeapon(2);
                    }
                    else if($('#case' + top2).hasClass('weapon3'))
                    {
                        character.changeWeapon(3);
                    }
                });
            }
            if($('#case' + top3).hasClass('weapon1') || $('#case' + top3).hasClass('weapon2') || $('#case' + top3).hasClass('weapon3')){
                $('#case' + top3).click(function () {
                    if($('#case' + top3).hasClass('weapon1'))
                    {
                        character.changeWeapon(1);
                    }
                    else if($('#case' + top3).hasClass('weapon2'))
                    {
                        character.changeWeapon(2);
                    }
                    else if($('#case' + top3).hasClass('weapon3'))
                    {
                        character.changeWeapon(3);
                    }
                });
            }
        }

        //Can move to bottom
        if (position > 1 && position <= 70) {
            var bottom = position + 10;
            var colorBottom = document.getElementById("case" + bottom);
            colorBottom.style.backgroundColor = "#ABA8B2";
            $('#case' +bottom).addClass('active');

            var bottom2 = position + 20;
            var colorBottom2 = document.getElementById("case" + bottom2);
            colorBottom2.style.backgroundColor = "#ABA8B2";
            $('#case' +bottom2).addClass('active');

            var bottom3 = position + 30;
            var colorBottom3 = document.getElementById("case" + bottom3);
            colorBottom3.style.backgroundColor = "#ABA8B2";
            $('#case' +bottom3).addClass('active');

            if($('#case' + bottom).hasClass('disabled')){
                $("#case" + bottom).removeClass('active');
                $("#case" + bottom).css('background-color', 'black');
                $("#case" + bottom2).removeClass('active');
                $("#case" + bottom2).css('background-color', 'white');
                $("#case" + bottom3).removeClass('active');
                $("#case" + bottom3).css('background-color', 'white');
            }
            else if($('#case' + bottom2).hasClass('disabled')){
                $("#case" + bottom2).removeClass('active');
                $("#case" + bottom2).css('background-color', 'black');
                $("#case" + bottom3).removeClass('active');
                $("#case" + bottom3).css('background-color', 'white');
            }if($('#case' + bottom).hasClass('weapon1') || $('#case' + bottom).hasClass('weapon2') || $('#case' + bottom).hasClass('weapon3')){
                $('#case' + bottom).click(function () {
                    if($('#case' + bottom).hasClass('weapon1'))
                    {
                        character.changeWeapon(1);
                    }
                    else if($('#case' + bottom).hasClass('weapon2'))
                    {
                        character.changeWeapon(2);
                    }
                    else if($('#case' + bottom).hasClass('weapon3'))
                    {
                        character.changeWeapon(3);
                    }
                });
            }
            else if($('#case' + bottom2).hasClass('weapon1') || $('#case' + bottom2).hasClass('weapon2') || $('#case' + bottom2).hasClass('weapon3')){
                $('#case' + bottom2).click(function () {
                    if($('#case' + bottom2).hasClass('weapon1'))
                    {
                        character.changeWeapon(1);
                    }
                    else if($('#case' + bottom2).hasClass('weapon2'))
                    {
                        character.changeWeapon(2);
                    }
                    else if($('#case' + bottom2).hasClass('weapon3'))
                    {
                        character.changeWeapon(3);
                    }
                });
            }
            else if($('#case' + bottom3).hasClass('weapon1') || $('#case' + bottom3).hasClass('weapon2') || $('#case' + bottom3).hasClass('weapon3')){
                $('#case' + bottom3).click(function () {
                    if($('#case' + bottom3).hasClass('weapon1'))
                    {
                        character.changeWeapon(1);
                    }
                    else if($('#case' + bottom3).hasClass('weapon2'))
                    {
                        character.changeWeapon(2);
                    }
                    else if($('#case' + bottom3).hasClass('weapon3'))
                    {
                        character.changeWeapon(3);
                    }
                });
            }

        }
        else if (position > 70 && position <= 80) {
            var bottom = position + 10;
            var colorBottom = document.getElementById("case" + bottom);
            colorBottom.style.backgroundColor = "#ABA8B2";
            $('#case' +bottom).addClass('active');
            var bottom2 = position + 20;
            var colorBottom2 = document.getElementById("case" + bottom2);
            colorBottom2.style.backgroundColor = "#ABA8B2";
            $('#case' +bottom2).addClass('active');

            if($('#case' + bottom).hasClass('disabled')){
                $("#case" + bottom).removeClass('active');
                $("#case" + bottom).css('background-color', 'black');
                $("#case" + bottom2).removeClass('active');
                $("#case" + bottom2).css('background-color', 'white');
            }
            if($('#case' + bottom).hasClass('weapon1') || $('#case' + bottom).hasClass('weapon2') || $('#case' + bottom).hasClass('weapon3')){
                $('#case' + bottom).click(function () {
                    if($('#case' + bottom).hasClass('weapon1'))
                    {
                        character.changeWeapon(1);
                    }
                    else if($('#case' + bottom).hasClass('weapon2'))
                    {
                        character.changeWeapon(2);
                    }
                    else if($('#case' + bottom).hasClass('weapon3'))
                    {
                        character.changeWeapon(3);
                    }
                });
            }
            else if($('#case' + bottom2).hasClass('weapon1') || $('#case' + bottom2).hasClass('weapon2') || $('#case' + bottom2).hasClass('weapon3')){
                $('#case' + bottom2).click(function () {
                    if($('#case' + bottom2).hasClass('weapon1'))
                    {
                        character.changeWeapon(1);
                    }
                    else if($('#case' + bottom2).hasClass('weapon2'))
                    {
                        character.changeWeapon(2);
                    }
                    else if($('#case' + bottom2).hasClass('weapon3'))
                    {
                        character.changeWeapon(3);
                    }
                });
            }
        }
        else if (position > 80 && position <= 90) {
            var bottom = position + 10;
            var colorBottom = document.getElementById("case" + bottom);
            colorBottom.style.backgroundColor = "#ABA8B2";
            $('#case' +bottom).addClass('active');
            if($('#case' + bottom).hasClass('disabled')){
                //Case du dessus désactiver le clic -> classe active; remettre le fond en noir
                $("#case" + bottom).removeClass('active');
                $("#case" + bottom).css('background-color', 'black');
            }
            if($('#case' + bottom).hasClass('weapon1') || $('#case' + bottom).hasClass('weapon2') || $('#case' + bottom).hasClass('weapon3')){
                $('#case' + bottom).click(function () {
                    if($('#case' + bottom).hasClass('weapon1'))
                    {
                        character.changeWeapon(1);
                    }
                    else if($('#case' + bottom).hasClass('weapon2'))
                    {
                        character.changeWeapon(2);
                    }
                    else if($('#case' + bottom).hasClass('weapon3'))
                    {
                        character.changeWeapon(3);
                    }
                });
            }
        }

        //Commentaire
        var check = position % 10;

        //Can move to left
        if (check === 2) {
            var left = position - 1;
            var colorLeft = document.getElementById("case" + left);
            colorLeft.style.backgroundColor = "#ABA8B2";
            $('#case' +left).addClass('active');
            if($('#case' + left).hasClass('disabled')){
                $("#case" + left).removeClass('active');
                $("#case" + left).css('background-color', 'black');
            }
            if($('#case' + left).hasClass('weapon1') || $('#case' + left).hasClass('weapon2') || $('#case' + left).hasClass('weapon3')){
                $('#case' + left).click(function () {
                    if($('#case' + left).hasClass('weapon1'))
                    {
                        character.changeWeapon(1);
                    }
                    else if($('#case' + left).hasClass('weapon2'))
                    {
                        character.changeWeapon(2);
                    }
                    else if($('#case' + left).hasClass('weapon3'))
                    {
                        character.changeWeapon(3);
                    }
                });
            }
        }
        else if (check === 3) {
            var left = position - 1;
            var colorLeft = document.getElementById("case" + left);
            colorLeft.style.backgroundColor = "#ABA8B2";
            $('#case' +left).addClass('active');
            var left2 = position - 2;
            var colorLeft2 = document.getElementById("case" + left2);
            colorLeft2.style.backgroundColor = "#ABA8B2";
            $('#case' +left2).addClass('active');

            if($('#case' + left).hasClass('disabled')){
                $("#case" + left).removeClass('active');
                $("#case" + left).css('background-color', 'black');
                $("#case" + left2).removeClass('active');
                $("#case" + left2).css('background-color', 'white');
            }
            if($('#case' + left).hasClass('weapon1') || $('#case' + left).hasClass('weapon2') || $('#case' + left).hasClass('weapon3')){
                $('#case' + left).click(function () {
                    if($('#case' + left).hasClass('weapon1'))
                    {
                        character.changeWeapon(1);
                    }
                    else if($('#case' + left).hasClass('weapon2'))
                    {
                        character.changeWeapon(2);
                    }
                    else if($('#case' + left).hasClass('weapon3'))
                    {
                        character.changeWeapon(3);
                    }
                });
            }
            else if($('#case' + left2).hasClass('weapon1') || $('#case' + left2).hasClass('weapon2') || $('#case' + left2).hasClass('weapon3')){
                $('#case' + left2).click(function () {
                    if($('#case' + left2).hasClass('weapon1'))
                    {
                        character.changeWeapon(1);
                    }
                    else if($('#case' + left2).hasClass('weapon2'))
                    {
                        character.changeWeapon(2);
                    }
                    else if($('#case' + left2).hasClass('weapon3'))
                    {
                        character.changeWeapon(3);
                    }
                });
            }

        }
        else if (check > 3 && check <= 9 || check === 0) {
            var left = position - 1;
            var colorLeft = document.getElementById("case" + left);
            colorLeft.style.backgroundColor = "#ABA8B2";
            $('#case' +left).addClass('active');

            var left2 = position - 2;
            var colorLeft2 = document.getElementById("case" + left2);
            colorLeft2.style.backgroundColor = "#ABA8B2";
            $('#case' +left2).addClass('active');

            var left3 = position - 3;
            var colorLeft3 = document.getElementById("case" + left3);
            colorLeft3.style.backgroundColor = "#ABA8B2";
            $('#case' +left3).addClass('active');

            if($('#case' + left).hasClass('disabled')){
                $("#case" + left).removeClass('active');
                $("#case" + left).css('background-color', 'black');
                $("#case" + left2).removeClass('active');
                $("#case" + left2).css('background-color', 'white');
                $("#case" + left3).removeClass('active');
                $("#case" + left3).css('background-color', 'white');
            }
            else if($('#case' + left2).hasClass('disabled')) {
                $("#case" + left2).removeClass('active');
                $("#case" + left2).css('background-color', 'black');
                $("#case" + left3).removeClass('active');
                $("#case" + left3).css('background-color', 'white');
            }
            if($('#case' + left).hasClass('weapon1') || $('#case' + left).hasClass('weapon2') || $('#case' + left).hasClass('weapon3')){
                $('#case' + left).click(function () {
                    if($('#case' + left).hasClass('weapon1'))
                    {
                        character.changeWeapon(1);
                    }
                    else if($('#case' + left).hasClass('weapon2'))
                    {
                        character.changeWeapon(2);
                    }
                    else if($('#case' + left).hasClass('weapon3'))
                    {
                        character.changeWeapon(3);
                    }
                });
            }
            else if($('#case' + left2).hasClass('weapon1') || $('#case' + left2).hasClass('weapon2') || $('#case' + left2).hasClass('weapon3')){
                $('#case' + left2).click(function () {
                    if($('#case' + left2).hasClass('weapon1'))
                    {
                        character.changeWeapon(1);
                    }
                    else if($('#case' + left2).hasClass('weapon2'))
                    {
                        character.changeWeapon(2);
                    }
                    else if($('#case' + left2).hasClass('weapon3'))
                    {
                        character.changeWeapon(3);
                    }
                });
            }
            else if($('#case' + left3).hasClass('weapon1') || $('#case' + left3).hasClass('weapon2') || $('#case' + left3).hasClass('weapon3')){
                $('#case' + left3).click(function () {
                    if($('#case' + left3).hasClass('weapon1'))
                    {
                        character.changeWeapon(1);
                    }
                    else if($('#case' + left3).hasClass('weapon2'))
                    {
                        character.changeWeapon(2);
                    }
                    else if($('#case' + left3).hasClass('weapon3'))
                    {
                        character.changeWeapon(3);
                    }
                });
            }

        }

        //Can move to right
        if (check === 9) {
            var right = position + 1;
            var colorRight = document.getElementById("case" + right);
            colorRight.style.backgroundColor = "#ABA8B2";
            $('#case' +right).addClass('active');
            if($('#case' + right).hasClass('disabled')){
                $("#case" + right).removeClass('active');
                $("#case" + right).css('background-color', 'black');
            }
            if($('#case' + right).hasClass('weapon1') || $('#case' + right).hasClass('weapon2') || $('#case' + right).hasClass('weapon3')){
                $('#case' + right).click(function () {
                    if($('#case' + right).hasClass('weapon1'))
                    {
                        character.changeWeapon(1);
                    }
                    else if($('#case' + right).hasClass('weapon2'))
                    {
                        character.changeWeapon(2);
                    }
                    else if($('#case' + right).hasClass('weapon3'))
                    {
                        character.changeWeapon(3);
                    }
                });
            }
        }
        else if (check === 8) {
            var right = position + 1;
            var colorRight = document.getElementById("case" + right);
            colorRight.style.backgroundColor = "#ABA8B2";
            $('#case' +right).addClass('active');

            var right2 = position + 2;
            var colorRight2 = document.getElementById("case" + right2);
            colorRight2.style.backgroundColor = "#ABA8B2";
            $('#case' +right2).addClass('active');

            if($('#case' + right).hasClass('disabled')){
                $("#case" + right).removeClass('active');
                $("#case" + right).css('background-color', 'black');
                $("#case" + right2).removeClass('active');
                $("#case" + right2).css('background-color', 'white');
            }
            if($('#case' + right).hasClass('weapon1') || $('#case' + right).hasClass('weapon2') || $('#case' + right).hasClass('weapon3')){
                $('#case' + right).click(function () {
                    if($('#case' + right).hasClass('weapon1'))
                    {
                        character.changeWeapon(1);
                    }
                    else if($('#case' + right).hasClass('weapon2'))
                    {
                        character.changeWeapon(2);
                    }
                    else if($('#case' + right).hasClass('weapon3'))
                    {
                        character.changeWeapon(3);
                    }
                });
            }
            else if($('#case' + right2).hasClass('weapon1') || $('#case' + right2).hasClass('weapon2') || $('#case' + right2).hasClass('weapon3')){
                $('#case' + right2).click(function () {
                    if($('#case' + right2).hasClass('weapon1'))
                    {
                        character.changeWeapon(1);
                    }
                    else if($('#case' + right2).hasClass('weapon2'))
                    {
                        character.changeWeapon(2);
                    }
                    else if($('#case' + right2).hasClass('weapon3'))
                    {
                        character.changeWeapon(3);
                    }
                });
            }
        }
        else if (check >= 1 && check <= 7) {
            var right = position + 1;
            var colorRight = document.getElementById("case" + right);
            colorRight.style.backgroundColor = "#ABA8B2";
            $('#case' +right).addClass('active');

            var right2 = position + 2;
            var colorRight2 = document.getElementById("case" + right2);
            colorRight2.style.backgroundColor = "#ABA8B2";
            $('#case' +right2).addClass('active');

            var right3 = position + 3;
            var colorRight3 = document.getElementById("case" + right3);
            colorRight3.style.backgroundColor = "#ABA8B2";
            $('#case' +right3).addClass('active');

            if($('#case' + right).hasClass('disabled')){
                $("#case" + right).removeClass('active');
                $("#case" + right).css('background-color', 'black');
                $("#case" + right2).removeClass('active');
                $("#case" + right2).css('background-color', 'white');
                $("#case" + right3).removeClass('active');
                $("#case" + right3).css('background-color', 'white');
            }
            else if($('#case' + right2).hasClass('disabled')) {
                $("#case" + right2).removeClass('active');
                $("#case" + right2).css('background-color', 'black');
                $("#case" + right3).removeClass('active');
                $("#case" + right3).css('background-color', 'white');
            }
            if($('#case' + right).hasClass('weapon1') || $('#case' + right).hasClass('weapon2') || $('#case' + right).hasClass('weapon3')){
                $('#case' + right).click(function () {
                    if($('#case' + right).hasClass('weapon1'))
                    {
                        character.changeWeapon(1);
                    }
                    else if($('#case' + right).hasClass('weapon2'))
                    {
                        character.changeWeapon(2);
                    }
                    else if($('#case' + right).hasClass('weapon3'))
                    {
                        character.changeWeapon(3);
                    }
                });
            }
            else if($('#case' + right2).hasClass('weapon1') || $('#case' + right2).hasClass('weapon2') || $('#case' + right2).hasClass('weapon3')){
                $('#case' + right2).click(function () {
                    if($('#case' + right2).hasClass('weapon1'))
                    {
                        character.changeWeapon(1);
                    }
                    else if($('#case' + right2).hasClass('weapon2'))
                    {
                        character.changeWeapon(2);
                    }
                    else if($('#case' + right2).hasClass('weapon3'))
                    {
                        character.changeWeapon(3);
                    }
                });
            }
            else if($('#case' + right3).hasClass('weapon1') || $('#case' + right3).hasClass('weapon2') || $('#case' + right3).hasClass('weapon3')){
                $('#case' + right3).click(function () {
                    if($('#case' + right3).hasClass('weapon1'))
                    {
                        character.changeWeapon(1);
                    }
                    else if($('#case' + right3).hasClass('weapon2'))
                    {
                        character.changeWeapon(2);
                    }
                    else if($('#case' + right3).hasClass('weapon3'))
                    {
                        character.changeWeapon(3);
                    }
                });
            }
        }

        //Retrait de la classe active sur les joueurs 1 et 2, pour qu'on ne puisse pas avoir deux joueurs sur la même case
        $(".player1").removeClass('active');
        $(".player1").css('background-color','white');
        $(".player2").removeClass('active');
        $(".player2").css('background-color','white');
    }, //Se déplacer

    attack: function(target)
    {
        if(this.health > 0 || target.health > 0)
        {
            target.health = target.health - this.damage;
            $('#board_player_' + this.index).replaceWith('<aside id="board_player_'+this.index+'"><p>Combat</p><p>Points de vie du joueur ' + this.index+ ' : '+ this.health+'</p><p>Arme du joueur ' + this.index + ' : '+this.weapon+ ' (dégâts : ' + this.damage+')</p></aside>');
            $('#board_player_' + target.index).replaceWith('<aside id="board_player_'+target.index+'"><p>Combat</p><p>Points de vie du joueur ' + target.index + ' : ' + target.health +'</p><p>Arme du joueur ' + target.index + ' : '+target.weapon+ ' (dégâts : ' + target.damage+')</p></aside>');

            if(this.health <= 0){
                alert(target.name + ' a gagné');
            }
            else if(target.health <= 0){
                $('#board_player_' + this.index).append('<p style="background-color: #80B56D; color: white">' + this.name + ' a gagné</p>');
                $('#board_player_' + target.index).append('<p style="background-color: #C33C54; color: white">' + target.name + ' est mort</p>');
            }
        }
    },
    //Ramasse une arme
    changeWeapon: function (index) {
        if(index === 1)
        {
            this.weapon = sword.name;
            this.damage = sword.damage;
        }
        else if(index === 2)
        {
            this.weapon = gun.name;
            this.damage = gun.damage;
        }
        else if(index === 3)
        {
            this.weapon = bazooka.name;
            this.damage = bazooka.damage;
        }
        $('#board_player_' + this.index).replaceWith('<aside id="board_player_'+this.index+'"><p>Combat</p><p>Points de vie du joueur ' + this.index+ ' : '+ this.health+'</p><p>Arme du joueur ' + this.index + ' : ' + this.weapon + ' (dégâts : ' + this.damage+')</p><p style="font-weight: bold; background-color:#80B56D;">Nouvelle Arme récupérée</p></aside>');
    }

}