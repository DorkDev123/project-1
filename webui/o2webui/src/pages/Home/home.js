searchInputHandler = () => {
    let searchTerm = document.getElementById("search-box").value;
    if(searchTerm!==undefined && searchTerm!=="") {
        document.getElementById("shop-search").innerHTML=`<div>
        <button id="search-shop-button" class="search-box-suggestion" onClick={shopSearch()}><i>Search for</i><b> ${searchTerm} </b><i class="category"> -- in shop</i></button>
        </div>`;
        document.getElementById("community-search").innerHTML=`<div>
        <div id="search-community-button">
        <button class="search-box-suggestion" onClick={communitySearch()}><i>Search for </i><b>${searchTerm}</b><i class="category"> -- community</i></button>
        </div></div>`;
        document.getElementById("blogs-search").innerHTML=`<div>
        <button id="search-blogs-button" class="search-box-suggestion" onClick={blogSearch()}><i>Search for </i><b>${searchTerm}</b><i class="category"> -- blogs</i></button>
        </div>`;
       document.getElementById("info-search").innerHTML=`<div>
        <button id="search-info-button" class="search-box-suggestion" onClick={infoSearch()}><i>Search for </i><b>${searchTerm}</b><i class="category"> -- Bo2k</i></button>
        </div>`;
    }
    else {
        document.getElementById("shop-search").innerHTML="";
        document.getElementById("community-search").innerHTML="";
        document.getElementById("blogs-search").innerHTML="";
        document.getElementById("info-search").innerHTML="";
    }
}

signinHandler = () => {
    window.location.href = "http://localhost:3000";
}

shoppingHandler = () => {
    window.location.href = "http://localhost:3000/shop";
}

menuHandler = () => {
    alert("Open Side drawer...")
}