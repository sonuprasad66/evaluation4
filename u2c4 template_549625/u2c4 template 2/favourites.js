// write js code here corresponding to favourites.html

var favouritesarr = JSON.parse(localStorage.getItem("favourites"))

displaydata(favouritesarr)
function displaydata(data){

    data.forEach(function(elem, index){

        var tr= document.createElement("tr")

        var td1 = document.createElement("td")
            td1.innerText=elem.matchnum;

        var td2 = document.createElement("td")
        td2.innerText= elem.teama;

        var td3 = document.createElement("td")
        td3.innerText=elem.teamb;

        var td4 = document.createElement("td")
        td4.innerText=elem.date;

        var td5 = document.createElement("td")
        td5.innerText=elem.venue;

        var td6 = document.createElement("td")
        td6.innerText="Delete"
        td6.style.color="red"
        td6.style.cursor="pointer"
        td6.addEventListener("click", function(){
            deleteitom(elem, index)

        })

         tr.append(td1,td2,td3,td4,td5,td6)

        document.querySelector("tbody").append(tr)
    })
}
function deleteitom(elem, index){
    favouritesarr.splice(index, 1)
    localStorage.setItem("favourites", JSON.stringify(favouritesarr))
    window.location.reload();

}