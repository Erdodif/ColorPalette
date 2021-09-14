elemek = ["primary","primary-variant",
        "secondary","secondary-variant",
        "background","surface","error",
        "on-primary","on-secondary",
        "on-background","on-surface","on-error"];
stilus = getComputedStyle(document.documentElement)
function inicial(){
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