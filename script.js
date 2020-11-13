function searchPokemon(poke) {

    let queryURL = "https://api.pokemontcg.io/v1/cards?name=" + poke;
    let queryURL2 = "https://pokeapi.co/api/v2/pokemon/" + poke;
    

    $.ajax({
        url: queryURL,   //     $(".pokeCards").empty();
        method: "GET",
        headers: {
            "Count": 1000
        },
    }).then(function(response) {
        $('.pokeCards1').on("click", function(){

              
        pokeNameDiv.textContent = $("<h1>").text=JSON.stringify((response.cards[0].name))
        pokeAttackDiv.textContent = $("<p>").text=JSON.stringify(("Attack Style: " + response.cards[0].attacks[0].name))
        pokeSeriesDiv.textContent = $("<p>").text=JSON.stringify(("Series Set: " + response.cards[0].series + " Index#: " + response.cards[0].nationalPokedexNumber))
        pokeWeaknessDiv.textContent = $("<p>").text=JSON.stringify(("Weakness: " + response.cards[0].weaknesses[0].type))
        pokeHpDiv.textContent = $("<p>").text=JSON.stringify(("Health: " + response.cards[0].hp))


        });
        $('.pokeCards2').on("click", function(){

              
pokeNameDiv.textContent = $("<h1>").text=JSON.stringify((response.cards[1].name))
pokeAttackDiv.textContent = $("<p>").text=JSON.stringify(("Attack Style: " + response.cards[1].attacks[0].name))
pokeSeriesDiv.textContent = $("<p>").text=JSON.stringify(("Series Set: " + response.cards[1].series + " Index#: " + response.cards[1].nationalPokedexNumber))
pokeWeaknessDiv.textContent = $("<p>").text=JSON.stringify(("Weakness: " + response.cards[1].weaknesses[0].type))
pokeHpDiv.textContent = $("<p>").text=JSON.stringify(("Health: " + response.cards[1].hp))


})
$('.pokeCards3').on("click", function(){

              
pokeNameDiv.textContent = $("<h1>").text=JSON.stringify((response.cards[2].name))
pokeAttackDiv.textContent = $("<p>").text=JSON.stringify(("Attack Style: " + response.cards[2].attacks[0].name))
pokeSeriesDiv.textContent = $("<p>").text=JSON.stringify(("Series Set: " + response.cards[2].series + " Index#: " + response.cards[2].nationalPokedexNumber))
pokeWeaknessDiv.textContent = $("<p>").text=JSON.stringify(("Weakness: " + response.cards[2].weaknesses[0].type))
pokeHpDiv.textContent = $("<p>").text=JSON.stringify(("Health: " + response.cards[2].hp))


})
$('.pokeCards4').on("click", function(){

              
pokeNameDiv.textContent = $("<h1>").text=JSON.stringify((response.cards[3].name))
pokeAttackDiv.textContent = $("<p>").text=JSON.stringify(("Attack Style: " + response.cards[3].attacks[0].name))
pokeSeriesDiv.textContent = $("<p>").text=JSON.stringify(("Series Set: " + response.cards[3].series + " Index#: " + response.cards[0].nationalPokedexNumber))
pokeWeaknessDiv.textContent = $("<p>").text=JSON.stringify(("Weakness: " + response.cards[3].weaknesses[0].type))
pokeHpDiv.textContent = $("<p>").text=JSON.stringify(("Health: " + response.cards[3].hp))


})
$('.pokeCards5').on("click", function(){

              
pokeNameDiv.textContent = $("<h1>").text=JSON.stringify((response.cards[4].name))
pokeAttackDiv.textContent = $("<p>").text=JSON.stringify(("Attack Style: " + response.cards[4].attacks[0].name))
pokeSeriesDiv.textContent = $("<p>").text=JSON.stringify(("Series Set: " + response.cards[4].series + " Index#: " + response.cards[0].nationalPokedexNumber))
pokeWeaknessDiv.textContent = $("<p>").text=JSON.stringify(("Weakness: " + response.cards[4].weaknesses[0].type))
pokeHpDiv.textContent = $("<p>").text=JSON.stringify(("Health: " + response.cards[4].hp))


})
$('.pokeCards6').on("click", function(){

              
pokeNameDiv.textContent = $("<h1>").text=JSON.stringify((response.cards[5].name))
pokeAttackDiv.textContent = $("<p>").text=JSON.stringify(("Attack Style: " + response.cards[5].attacks[0].name))
pokeSeriesDiv.textContent = $("<p>").text=JSON.stringify(("Series Set: " + response.cards[5].series + " Index#: " + response.cards[0].nationalPokedexNumber))
pokeWeaknessDiv.textContent = $("<p>").text=JSON.stringify(("Weakness: " + response.cards[5].weaknesses[0].type))
pokeHpDiv.textContent = $("<p>").text=JSON.stringify(("Health: " + response.cards[5].hp))


})
      for (let i = 0; i <1; i++) {
        
            let url = response.cards[i].imageUrl
            let pokeURL0 = $(".pokeCards1").append('<img src="' + response.cards[0].imageUrl+ '" class="card-img" alt="pokemoncard"> <p>')

            let pokeURL1 = $(".pokeCards2").append('<img src="' + response.cards[1].imageUrl+ '" class="card-img" alt="pokemoncard"> <p>')
            let pokeURL2 = $(".pokeCards3").append('<img src="' + response.cards[2].imageUrl+ '" class="card-img" alt="pokemoncard"> <p>')
            let pokeURL3 = $(".pokeCards4").append('<img src="' + response.cards[3].imageUrl+ '" class="card-img" alt="pokemoncard"> <p>')
            let pokeURL4 = $(".pokeCards5").append('<img src="' + response.cards[4].imageUrl+ '" class="card-img" alt="pokemoncard"> <p>')
            let pokeURL5 = $(".pokeCards6").append('<img src="' + response.cards[5].imageUrl+ '" class="card-img" alt="pokemoncard"> <p>')
            
            //   $('#pokeClick0').on("click", function(){
            // for(var i=0;i<response.cards[0].names.length;i++)
            // {
            // let pokeWrite = response.cards[0].names[i];
            // let pokeWritting = $("#pokeInfoDiv").append('<p>'+ "Name: "+ pokeWrite + "</p>");
            // console.log()
            // pokeInfoDiv.append(pokeWritting);
            //   })
            
              
            }
          })

        $.ajax({
        url: queryURL2,
        method: "GET",
        headers: {
            "Count": 1000
        },
    }).then(function(response) {
        console.log(response.sprites.front_default)
        let pokeSprite = $("<img>").attr("src", response.sprites.other.dream_world.front_default);
        $("footer").empty();
        $("footer").append(pokeSprite)

    })



    console.log("Surprise! Its a hidden %cPokemon Logo", "color: yellow; font-weight: 900; background-color: blue;padding: 2px");

}

  $("#select-poke").on("click", function(event) {
    event.preventDefault();

    let inputPoke = $("#poke-input").val().trim();


    searchPokemon(inputPoke);
});