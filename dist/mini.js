let pokemonRepository=function(){let t=[];function e(e){"object"==typeof e&&"name"in e?t.push(e):console.log("pokemon is not correct")}function n(){return t}function o(t){return fetch(t.detailsUrl).then(function(t){return t.json()}).then(function(e){t.imageUrl=e.sprites.front_default,t.height=e.height,t.weight=e.weight,t.types=e.types.map(t=>t.type.name).join(",")}).catch(function(t){console.error(t)})}function i(t){o(t).then(function(){var e;let n,o,i,a,l,s,p;e=t,n=$(".modal-body"),o=$(".modal-title"),n.empty(),o.empty(),i=$("<h1>"+e.name+"</h1>"),a=$('<img class= "modal-img" style="width:50%">'),a.attr("src",e.imageUrl),l=$("<p>height : "+e.height+"</p>"),s=$("<p>weight : "+e.weight+"</p>"),p=$("<p>types : "+e.types+"</p>"),o.append(i),n.append(a),n.append(l),n.append(s),n.append(p)})}return{add:e,getAll:n,addListItem:function t(e){let n=document.querySelector(".pokemon-list"),o=document.createElement("li"),a=document.createElement("button");a.innerText=e.name,a.classList.add("button-class"),a.setAttribute("data-toggle","modal"),a.setAttribute("data-target","#modal"),a.classList.add("col"),o.classList.add("list-items"),o.appendChild(a),n.appendChild(o),function t(e,n){e.addEventListener("click",function(){i(n)})}(a,e)},loadList:function t(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){e({name:t.name,detailsUrl:t.url})})}).catch(function(t){console.error(t)})},loadDetails:o,showDetails:i}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});