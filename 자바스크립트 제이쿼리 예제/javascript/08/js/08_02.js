const CTA = document.querySelector('.cta>a');
if(CTA.hasAttribute("target")){
    console.log(CTA.getAttribute("target"))    
}else{
    CTA.setAttribute("target", "blank")
}
// CTA.removeAttribute("href")