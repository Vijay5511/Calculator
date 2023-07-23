const search = () => {
    const saerchbox = document.getElementById("Search-item").value.toUpperCase();
    const storeitems = document.getElementById("medialist")
    const  sixthsection= document.querySelectorAll(".sixthsection ")
    const pname = storeitems.getElementsByTagName("h3")

    for(var i = 0; i < pname.length; i++) {
        let match = sixthsection[i].getElementsByTagName('h3')[0];
           
        if (match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(saerchbox) > -1) {
                sixthsection[i].style.display ="";
            }else{
                sixthsection[i].style.display ="none";
            }
        }
    }
}