let pronoun = ["The", "Amazing" , "Great"];
let adj = ["Magnate" , "Lord-Commander"];
let noun = ["Tomato" , "Romi" , "Neo" , "Larry"];

let domainNames = [];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      domainNames.push(`${pronoun[i]}${adj[j]}${noun[k]}.com`);
      domainNames.push(`${pronoun[i]}${adj[j]}${noun[k]}.net`);
    }
  }
}

console.log(domainNames);