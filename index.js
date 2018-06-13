//Création du plateau
var tray = Object.create(tray);
tray.generateTray();

//Récupération de la position du joueur Un
var playerOne = tray.forbiddenHut[Math.floor(Math.random() * tray.forbiddenHut.length)];
//Suppression de la case noire, remplacée par la position du joueur 1
tray.forbiddenHut.splice(tray.forbiddenHut.indexOf(playerOne), 1);

//Récupération de la position du joueur Un
var playerTwo = tray.forbiddenHut[Math.floor(Math.random() * tray.forbiddenHut.length)];
//Suppression de la case noire, remplacée par la position du joueur 1
tray.forbiddenHut.splice(tray.forbiddenHut.indexOf(playerTwo), 1);

//Même chose pour les armes
var weaponOne = tray.forbiddenHut[Math.floor(Math.random() * tray.forbiddenHut.length)];
tray.forbiddenHut.splice(tray.forbiddenHut.indexOf(weaponOne), 1);
var weaponTwo = tray.forbiddenHut[Math.floor(Math.random() * tray.forbiddenHut.length)];
tray.forbiddenHut.splice(tray.forbiddenHut.indexOf(weaponTwo), 1);
var weaponThree = tray.forbiddenHut[Math.floor(Math.random() * tray.forbiddenHut.length)];
tray.forbiddenHut.splice(tray.forbiddenHut.indexOf(weaponThree), 1);

//Génération des cases noires
tray.getForbiddenHut();

//Création des deux personnages
var characterOne = Object.create(character);
characterOne.init("Joueur 1", "img/one.png", 100, 10, 1, 'Poings');
characterOne.setPosition(1, playerOne);
characterOne.setImage(1);

var characterTwo = Object.create(character);
characterTwo.init("Joueur 2", "img/two.png", 100, 10, 2, 'Poings');
characterTwo.setPosition(2, playerTwo);
characterTwo.setImage(2);

//Création des armes
var sword = Object.create(weapon);
sword.init('épée', 20, 'img/sword.png', 0);
sword.setPosition(1, weaponOne);
sword.setImage(1);

var gun = Object.create(weapon);
gun.init('pistolet', 30, 'img/gun.png', 0);
gun.setPosition(2, weaponTwo);
gun.setImage(2);

var bazooka = Object.create(weapon);
bazooka.init('bazooka', 90, 'img/bazooka.png', 0);
bazooka.setPosition(3, weaponThree);
bazooka.setImage(3);

$('#atk_pl_1').hide();
$('#atk_pl_2').hide();

characterOne.move = function(){
    //Récupération de la position du personnage
    var recup = characterOne.getPosition();
    //Remplacement de la position d'origine du personnage par une case vide
    var newDiv = '<div id="case' + recup +'"></div>';

    $('.active').click(function() {
        $('.active').css('background-color','white');
        $('#case' +recup).replaceWith(newDiv);

        var newPosition = this;
        characterOne.setNewImage = function () {
            //var add = '<p><img src="'+characterOne.picture+'"></p>';
            var newDivCharacter = '<div id="'+ newPosition.id +'" class="player1"><p><img src="'+characterOne.picture+'" id="picture"></p></div>';
            $(newPosition).replaceWith(newDivCharacter);
            $('.active').unbind('click');
            $('.active').removeClass('active');


        }
        characterOne.setNewPosition = function()
        {
            var checkPosition = newPosition.id;
            var newPositionCharacterOne = Number(checkPosition.replace("case",""));
            characterOne.position = newPositionCharacterOne;
            return characterOne.position;
        }

        characterOne.setNewPosition();
        characterOne.setNewImage();
        if((characterTwo.position === characterOne.position - 1) || (characterTwo.position === characterOne.position + 1) || (characterTwo.position === characterOne.position -10) || (characterTwo.position === characterOne.position + 10))
        {
            alert('Combat !');
            $('#atk_pl_1').show();
        }
        else{
            characterTwo.canMove();
            characterTwo.move();
            tray.getForbiddenHut();
        }

    });
};
characterTwo.move = function(){
    //Récupération de la position du personnage
    var recup = characterTwo.getPosition();
    //Remplacement de la position d'origine du personnage par une case vide
    var newDiv = '<div id="case' + recup +'"></div>';

    $('.active').click(function() {
        $('.active').css('background-color','white');
        $('#case' +recup).replaceWith(newDiv);

        var newPosition = this;
        characterTwo.setNewImage = function () {
            //var add = '<p><img src="'+characterOne.picture+'"></p>';
            var newDivCharacter = '<div id="'+ newPosition.id +'" class="player2"><p><img src="'+characterTwo.picture+'" id="picture"></p></div>';
            $(newPosition).replaceWith(newDivCharacter);
            $('.active').unbind('click');
            $('.active').removeClass('active');
        }
        characterTwo.setNewPosition = function()
        {
            var checkPosition = newPosition.id;
            var newPositionCharacterOne = Number(checkPosition.replace("case",""));
            characterTwo.position = newPositionCharacterOne;
            return characterTwo.position;

        }
        characterTwo.setNewPosition();
        characterTwo.setNewImage();
        if((characterOne.position === characterTwo.position - 1) || (characterOne.position === characterTwo.position + 1) || (characterOne.position === characterTwo.position -10) || (characterOne.position === characterTwo.position + 10))
        {
            alert('Combat !');
            $('#atk_pl_2').show();

        }
        else{
            characterOne.canMove();
            characterOne.move();
            tray.getForbiddenHut();
        }

    });
};

characterOne.move();

characterTwo.canMove();
characterTwo.move();

$('#atk_pl_1').click(function () {
    characterOne.attack(characterTwo);
    $('#atk_pl_1').hide();
    $('#atk_pl_2').show();
    if(characterOne.health <= 0 || characterTwo.health <= 0)
    {
        $('#atk_pl_1').hide();
        $('#atk_pl_2').hide();
    }
});

$('#atk_pl_2').click(function () {
    characterTwo.attack(characterOne);
    $('#atk_pl_2').hide();
    $('#atk_pl_1').show();
    if(characterOne.health <= 0 || characterTwo.health <= 0)
    {
        $('#atk_pl_1').hide();
        $('#atk_pl_2').hide();
    }
});