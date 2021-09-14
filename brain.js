elemek = ["primary","primary-variant",
        "secondary","secondary-variant",
        "background","surface","error",
        "on-primary","on-secondary",
        "on-background","on-surface","on-error"];
nevek = ["Elsődleges", "Elsődleges Variáns",
        "Másodlagos", "Másodlagos Variáns",
        "Háttér", "Előtér", "Hiba",
        "Elsődleges Betű", "Másodlagos Betű",
        "Háttér Betű", "Előtér Betű", "Hiba Betű"]
stilus = getComputedStyle(document.documentElement)
function inicial(){
    szinek_tartalom = "";
    for (i = 0; i < elemek.length; i++)
    {
        szinek_tartalom += `
            <div id="${elemek[i]}">
                <label for="${elemek[i]}-i">
                    ${nevek[i]}
                </label>
                <input id="${elemek[i]}-i" type="color">
            </div>`
    }
    document.getElementById("szinek").innerHTML = szinek_tartalom;
    for (let i of elemek){
        let a = stilus.getPropertyValue('--s-'+i).replace(' ','');
        document.getElementById(i+"-i").value = a;
        document.getElementById(i+"-i").addEventListener("focusout",()=>szinbeallit(i))
    }
}
function szinbeallit(id){
    szin = document.getElementById(id+"-i").value;
    document.documentElement.style.setProperty("--s-" + id,szin);
}