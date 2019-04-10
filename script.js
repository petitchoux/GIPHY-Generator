let getQueryFromGiphy = async function(query, limit=1){
    let apiKey = "n1s1uFnnTVXMdeGP9cTmx5Dv5zqLMKv8";
    let giphyURL = `http://api.giphy.com/v1/gifs/random?tag=${query}&api_key=${apiKey}`;
    let response = await fetch(giphyURL);
    let json = await response.json();
    return json;
}

let run = async function(){
    let query = document.getElementById('gifForm').value
    console.log(query)
    let result = await getQueryFromGiphy(query);
    console.log(result)
}

// run()

// Within Data -> Images -> 480w_still -> get "url" 
async function getImagesUrlArray(data){
    return data.images.downsized.url;
}

function getImage(url){
    console.log(url)
    return `<img src=${url}/>`
}

function createUrlBody(imageUrl){
    document.getElementById('result').innerHTML = `<img src=${imageUrl}>`;
}

async function onSubmit(){
    let query = document.getElementById('gifForm').value
    let result = await getQueryFromGiphy(query);
    let imageUrl = await getImagesUrlArray(result.data)
    console.log(imageUrl);
    // console.log(result);
    createUrlBody(imageUrl);
}

/* 
When user clicks submit button
get the value in query
run getQueryFromGiphy(query)
*/