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
        // div2.id = id;

        const divInfo = document.createElement("div")
        divInfo.className = "div-info"
        divInfo.id = id;

        const pstatus = document.createElement("p")
        pstatus.innerText = "status: " + characters[i].status;
        const pgender = document.createElement("p")
        pgender.innerText = "Gender: " + characters[i].gender;
        const pspecies = document.createElement("p")
        pspecies.innerText = "species: " + characters[i].species;
        const plocation = document.createElement("p")
        plocation.innerText = "Location: " + characters[i].location.name;

        const button = document.createElement("button")
        button.innerText = "more info"
        button.className = "btn btn-outline-success"
        // every button have a uniqe id related to character
        button.id = id;

        myDiv.append(divs)
        divs.append(img);
        divs.append(div2); 
        div2.append(name);
        div2.append(divInfo)
        divInfo.append(pstatus)
        divInfo.append(pgender)
        divInfo.append(pspecies)
        divInfo.append(plocation)
        divs.append(button);

      // push button in the array
        btnsArray.push(button)     
    }

    for (let i = 0; i < btnsArray.length; i++) {
      btnsArray[i].addEventListener("click" , function () {
        let id = i + 1;
        const myDiv = document.getElementById(id)
        if(myDiv.style.display === "block"){
            myDiv.style.display = "none"
        }
        else 
        myDiv.style.display = "block";        
    }) 
    }

  })
}
viewCharacters();

  // this part for searching by character name
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
      }
    })

}


// for container3
function viewResultContainer() {
  const container1 = document.querySelector("#container");
  const container2 = document.querySelector("#container2");
  const container3 = document.querySelector("#container-results");
  const container4 = document.querySelector("#container4");

  container1.style.display = "none";
  container2.style.display = "none";
  container3.style.display = "grid";
  container4.style.display = "none";
}
// for container1
function ViewCaracterContainer() {
  const container1 = document.querySelector("#container");
  const container2 = document.querySelector("#container2");
  const container3 = document.querySelector("#container-results");
  const container4 = document.querySelector("#container4");

  container3.style.display = "none";
  container2.style.display = "none";
  container4.style.display = "none";
  container1.style.display = "grid";
}
// for container2
function ViewEpisodeContainer() {
  const container1 = document.querySelector("#container");
  const container2 = document.querySelector("#container2");
  const container3 = document.querySelector("#container-results");
  const container4 = document.querySelector("#container4");

  container1.style.display = "none";
  container4.style.display = "none";
  container3.style.display = "none";
  container2.style.display = "grid";
}
// for container4
function ViewEpisodeCharacterContainer() {
  const container1 = document.querySelector("#container");
  const container2 = document.querySelector("#container2");
  const container3 = document.querySelector("#container-results");
  const container4 = document.querySelector("#container4");

  container1.style.display = "none";
  container3.style.display = "none";
  container2.style.display = "none";
  container4.style.display = "grid";

}

// this array for buttons in the episodes container
let charactersOfEpisodes = [];

// view episodes function
function viewEpisodes() {
  fetch(`https://rickandmortyapi.com/api/episode`)
  .then(function(response) {
    return response.json()})
  .then(function (json) { 

    const episods = json.results;
    console.log(episods)
    // this is the container
    const container = document.querySelector("#container2");
    
    for (let i = 0; i < episods.length; i++) {
      // gitting the id of all episodes
      let id = episods[i].id;

        const div = document.createElement("div");
        div.className = "card"

        const episodeName = document.createElement("h5");
        episodeName.className = "card-title";
        episodeName.innerText = episods[i].name;

        const img = document.createElement("img");
        img.className = "card-img-top"
        img.src = "./images/1.jpg";

        const div2 = document.createElement("div")
        div2.className = "card-body";
        div2.id = id;

        const episode = document.createElement("p")
        episode.innerText = episods[i].episode;

        const date = document.createElement("p")
        date.innerText = episods[i].air_date;

        const button = document.createElement("button")
        button.innerText = "show caracters"
        button.className = "btn btn-outline-success"
        // every button have a uniqe id related to episode
        button.id = id;

        container.append(div);
        div.append(img);
        div.append(episodeName);
        div.append(div2); 
        div2.append(episode);
        div2.append(date);
        div.append(button);

      // push button in the array
        charactersOfEpisodes.push(button)   
    }
    // targiting the container
    const characterOfEpisode = document.querySelector("#container4");
    // charactersOfEpisodes is the button
    for (let i = 0; i < charactersOfEpisodes.length; i++) {
      charactersOfEpisodes[i].addEventListener("click" , function () {
        ViewEpisodeCharacterContainer();
        for(let j=0 ; j < episods[i].characters.length; j++ ) {
        let url = episods[i].characters[j]
        fetch(url)
        .then(function(response) {
            return response.json()})
        .then(function (json) { 

          const divs = document.createElement("div");
          divs.className = "card"

          const img = document.createElement("img");
          img.className = "card-img-top"
          img.src = json.image;

          const div2 = document.createElement("div")
          div2.className = "card-body";

          const name = document.createElement("h5");
          name.className = "card-title";
          name.innerText = json.name;

          characterOfEpisode.append(divs)
          divs.append(img)
          divs.append(div2)
          div2.append(name)
        })
      }      
    }) 
    }
  })
}
viewEpisodes();