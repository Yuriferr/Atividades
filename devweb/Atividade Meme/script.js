let values = "";
let tbody = document.querySelector("tbody");
let arrayMeme = [];
let arrayLegenda = [];
let btn = document.querySelector("button");
let legenda = document.querySelector("input");

fetch('https://api.imgflip.com/get_memes').then(res=>{
    res.json().then(dados=>{
            mostraDados(dados, "");

            btn.onclick = function adicionar(){
                if(legenda.value != ""){
                    arrayLegenda.push(legenda.value);
                mostraDados(dados, arrayLegenda);
                legenda.value = ""
                legenda.focus();
                }
                else{
                    alert("Digite um valor para a legenda")
                }
            };
        });

        
}).catch(erro=>{
    console.log(erro+" erro na requisição")
});

function mostraDados(dados, arrayLegenda){
    arrayMeme = dados;
    tbody.innerHTML = "";
    values = "";

    arrayMeme.data.memes.forEach((item, index) => {
        values += `<tr>
        <td>
            ${item.name}
        </td>
        <td>
        <img src="${item.url}">
        </td>
        <td>
            ${arrayLegenda[index] || ""}
        </td>
        </tr>`
    });
    tbody.innerHTML += values
}