function Ui() {
/*
    document.getElementById("bt1")
                    .addEventListener("click", function () {
                        game.setTest(12);

                    })

    document.getElementById("bt2")
                .addEventListener("click", function () {
                    alert("pobieram zmienn¹ test z klasy Game: " + game.getTest());

                })

    document.getElementById("bt3")
                .addEventListener("click", function () {
                    net.sendData();

                })
                */
    document.getElementById("wybor").onchange = function () {
        var zmiana = this.value;
        Game.setCamera(zmiana);        
    }
}

