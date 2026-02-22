var s1 = new Audio('https://cdn.discordapp.com/attachments/1379719729177952349/1475226018162807006/dry-fart.mp3?ex=699cb6cb&is=699b654b&hm=6dfcea09f12dc1c36ebfe80b3a2b99acd24ea0a311d189bafb87b5efb50548fd&')

function Random() {
        var rnd = Math.floor(Math.random() * 100);
        document.getElementById('tb').value = rnd;
        s1.play();
    }