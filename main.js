function viewCharacters() {
  fetch(`https://rickandmortyapi.com/api/character`)
  .then(function(response) {
      // it will come back as object because .json
      return response.json()})
  .then(function (json) { 
    // you can access the data only in this code block
    const characters = json.results;

    // this is the container
    const myDiv = document.querySelector("#container");
    // i created an array of buttons to show info when click
    let btnsArray = [];
    
    for (let i = 0; i < characters.length; i++) {
      // gitting the id of all characters
      let id = characters[i].id;

        const divs = document.createElement("div");
        divs.className = "card"

        const img = document.createElement("img");
        img.className = "card-img-top"
        img.src = characters[i].image;

        const name = document.createElement("h5");
        name.className = "card-title";
        name.innerText = characters[i].name;

        const div2 = document.createElement("div")
        div2.className = "card-body";
        div2.id = id;

        const button = document.createElement("button")
        button.innerText = "more info"
        button.className = "btn btn-outline-success"
        // every button have a uniqe id related to character
        button.id = id;

        myDiv.append(divs)
        divs.append(img);
        divs.append(div2); 
        div2.append(name);
        divs.append(button);

      // push button in the array
        btnsArray.push(button)     
    }
    console.log(btnsArray);

    for (let i = 0; i < btnsArray.length; i++) {
      btnsArray[i].addEventListener("click" , function () {
        const div = document.createElement("div")
        const pstatus = document.createElement("p")
        pstatus.innerText = "status: " + characters[i].status;
        const pgender = document.createElement("p")
        pgender.innerText = "Gender: " + characters[i].gender;
        const pspecies = document.createElement("p")
        pspecies.innerText = "species: " + characters[i].species;
        const plocation = document.createElement("p")
        plocation.innerText = "Location: " + characters[i].location.name;

        // id starting from 1 and i starting from 0
        let id = i + 1;
        // to get the specific card to append 
        const card = document.getElementById(id)
        card.append(div)
        div.append(pstatus)
        div.append(pgender)
        div.append(pspecies)
        div.append(plocation)        
    }) 
    }

  })
}
viewCharacters();



function viewAllCharacters() {
  fetch(`https://rickandmortyapi.com/api/character`)
  .then(function(response) {
      // it will come back as object because .json
      return response.json()})
  .then(function (json) { 
    // you can access the data only in this code block
    console.log(json)

    const ch = json.results;
    console.log(ch);
    console.log(ch[0].name);
    console.log(ch[1].name + "epesode is: " + ch[1].episode)
    const myDiv = document.querySelector("#container");
    
    for (let i = 0; i < ch.length; i++) {
        const divs = document.createElement("div");
        // divs.className("x");
        const img = document.createElement("img");
        const text = document.createElement("p");
        text.innerText = ch[i].name;
        img.src = ch[i].image;
        myDiv.append(divs)
        divs.append(img);
        divs.append(text);      
    }
  })
}



    // let url = episodsArrsy[0].characters[1];

  //   const ch = json.results;
  //   console.log(ch);
  //   console.log(ch[0].name);
  //   console.log(ch[1].name + "epesode is: " + ch[1].episode)
  //   const myDiv = document.querySelector("#container");
    
  //   for (let i = 0; i < ch.length; i++) {
  //       const divs = document.createElement("div");
  //       const img = document.createElement("img");
  //       const text = document.createElement("p");
  //       text.innerText = ch[i].name;
  //       img.src = ch[i].image;
  //       myDiv.append(divs)
  //       divs.append(img);
  //       divs.append(text);      
  //   }
  // 
  const btn = document.querySelector("#search-btn");
  btn.addEventListener("click" , search);

function search(e) {
  const userInput = document.getElementById("my-text").value;
  e.preventDefault();

  const url = "https://rickandmortyapi.com/api/character";
  // to filter the characters
  const filter = "/?name="+userInput;
  fetch(url+filter)
  .then(function(response){
    return response.json()})
    .then(function (json) {
      const resultArray = json.results;
      console.log(resultArray)

      // this line will cleare the container
      document.querySelector("#container-results").innerHTML = "";
      // call this function to make the display grid
      viewResultContainer();
      

      // showing the results
      let btnArray = [];
      let id = [];
      const container = document.querySelector("#container-results");
      for (let i = 0; i < resultArray.length; i++) {
          id.push(resultArray[i].id)
          const divs = document.createElement("div");
          divs.className = "card"
  
          const img = document.createElement("img");
          img.className = "card-img-top"
          img.src = resultArray[i].image;
  
          const name = document.createElement("h5");
          name.className = "card-title";
          name.innerText = resultArray[i].name;
  
          const div2 = document.createElement("div")
          div2.className = "card-body";
          div2.id = id[i];

          const pstatus = document.createElement("p")
          pstatus.innerText = "status: " + resultArray[i].status;

          const pgender = document.createElement("p")
          pgender.innerText = "Gender: " + resultArray[i].gender;

          const pspecies = document.createElement("p")
          pspecies.innerText = "species: " + resultArray[i].species;

          const plocation = document.createElement("p")
          plocation.innerText = "Location: " + resultArray[i].location.name;
        
  
          // const button = document.createElement("button")
          // button.innerText = "more info"
          // button.className = "btn btn-outline-success"
          // every button have a uniqe id related to character
          // button.id = id;
  
          container.append(divs)
          divs.append(img);
          divs.append(div2); 
          div2.append(name);
          // divs.append(button);
          div2.append(pstatus)
          div2.append(pgender)
          div2.append(pspecies)
          div2.append(plocation) 

          // btnArray.push(button)
      }
// here i delete the for loop for clicking the button
    })

}


// to hide the cards that already in the page
function hideCards() {
  const cardsToHide = document.querySelectorAll(".card"); 
  console.log(cardsToHide)
  for (let i = 0; i < cardsToHide.length; i++) {
    cardsToHide[i].style.display = "none"
  }   
}

function viewResultContainer() {
  const container1 = document.querySelector("#container");
  const container2 = document.querySelector("#container2");
  const container3 = document.querySelector("#container-results");
  container1.style.display = "none";
  container2.style.display = "none";
  container3.style.display = "grid";
}
function ViewCaracterContainer() {
  const container1 = document.querySelector("#container");
  const container2 = document.querySelector("#container2");
  const container3 = document.querySelector("#container-results");

  container3.style.display = "none"
  container2.style.display = "none";
  container1.style.display = "grid"
}
function ViewEpisodeContainer() {
  const container1 = document.querySelector("#container");
  const container2 = document.querySelector("#container2");
  const container3 = document.querySelector("#container-results");

  container1.style.display = "none"
  container3.style.display = "none";
  container2.style.display = "grid"
}

 


function getCharactersByEpisode(array) {
  for(let i=0; i<array.length; i++){
    fetch(array[i])
    .then (function (response) {
      return response.json()})
      .then (function (json) {
        
      console.log(json.name)
      
    })
  }
  
}

// view episode function
function viewEpisodes() {
  // call hideContainer function
  fetch(`https://rickandmortyapi.com/api/episode`)
  .then(function(response) {
      // it will come back as object because .json
      return response.json()})
  .then(function (json) { 
    // you can access the data only in this code block
    console.log(json)

    const episods = json.results;
    // this is the container
    const container = document.querySelector("#container2");
    // i created an array of buttons to show info when click
    let btnsArray = [];
    
    for (let i = 0; i < episods.length; i++) {
      // gitting the id of all episodes
      let id = episods[i].id;

        const div = document.createElement("div");
        div.className = "card"

        const episodeName = document.createElement("h5");
        episodeName.className = "card-title";
        episodeName.innerText = episods[i].name;

        const div2 = document.createElement("div")
        div2.className = "card-body";
        div2.id = id;

        const episode = document.createElement("p")
        episode.innerText = episods[i].episode;

        const button = document.createElement("button")
        button.innerText = "show caracters"
        button.className = "btn btn-outline-success"
        // every button have a uniqe id related to episode
        button.id = id;

        container.append(div)
        div.append(episodeName);
        div.append(div2); 
        div2.append(episode);
        div.append(button);

      // push button in the array
        btnsArray.push(button)   

        // ---------------------------------------------------
        // from here the event of search will begin
        // const btn = document.querySelector("#search-btn");

        // btnsArray.addEventListener("click" , getepisode);
      
      function getepisode(e) {
        const userInput = document.getElementById("my-text").value;
        console.log("the input is " + userInput)
        e.preventDefault();
      
        const url = "https://rickandmortyapi.com/api/character";
        // to filter the characters
        const filter = "/?name="+userInput;
        fetch(url+filter)
        .then(function(response){
          return response.json()})
          .then(function (json) {
            const resultArray = json.results;
            console.log(resultArray)
      
            
            hideCards();
      
            // showing the results
            const container = document.querySelector("#container");
            for (let i = 0; i < resultArray.length; i++) {
        
                const divs = document.createElement("div");
                divs.className = "card"
        
                const img = document.createElement("img");
                img.className = "card-img-top"
                img.src = resultArray[i].image;
        
                const name = document.createElement("h5");
                name.className = "card-title";
                name.innerText = resultArray[i].name;
        
                const div2 = document.createElement("div")
                div2.className = "card-body";
                // div2.id = id;
        
                const button = document.createElement("button")
                button.innerText = "more info"
                button.className = "btn btn-outline-success"
                // every button have a uniqe id related to character
                // button.id = id;
        
                container.append(divs)
                divs.append(img);
                divs.append(div2); 
                div2.append(name);
                divs.append(button);
            }
          })
      
      }
        // ----------------------------------------------------
    }
    console.log(btnsArray);

    for (let i = 0; i < btnsArray.length; i++) {
      btnsArray[i].addEventListener("click" , function () {
        const div = document.createElement("div")
        const pstatus = document.createElement("p")
        pstatus.innerText = "status: " + episods[i].status;
        const pgender = document.createElement("p")
        pgender.innerText = "Gender: " + episods[i].gender;
        const pspecies = document.createElement("p")
        pspecies.innerText = "species: " + episods[i].species;
        const plocation = document.createElement("p")
        plocation.innerText = "Location: " + episods[i].location.name;

        // id starting from 1 and i starting from 0
        let id = i + 1;
        // to get the specific card to append 
        const card = document.getElementById(id)
        card.append(div)
        div.append(pstatus)
        div.append(pgender)
        div.append(pspecies)
        div.append(plocation)        
    }) 
    }

  })
}
viewEpisodes();