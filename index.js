let issuesPres = document.getElementById('givePass');
givePass.addEventListener ('keyup', function(){
    document.getElementById("givePass").innerHTML=""
    let number = parseInt(givePass.value);
    try {
        if (issuesPres.value.length < 5) throw "too short, must be at least 5 long";
        if(issuesPres.value.length > 12) throw "too long, must be at most 12 characters long";
        if (typeof(number)=== 'number') throw "no numbers please"
    }
        catch(error) {
            document.getElementById('givePass').innerHTML = error
        }
    
})

