// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        return response.json();
    }).then(function(response) {
            let container = document.querySelector("#container");
            for(data of response){
                let skills = '';
                for(skill of data.skills){
                    skills += `${skill},`
                }
                container.innerHTML += `<div class="astronaut" style="display: block; background: aliceblue; margin: 10px"> 
                ${data.firstName} ${data.lastName} 
                <img class="avatar" src="${data.picture}"
                <ul>
                <li>Active:${data.active}</li>
                <li>Hours in Space:${data.hoursInSpace}</li>
                <li>${skills}</li></ul>
                </div>`;
            };
        });       
});