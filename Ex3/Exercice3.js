function modifyText() {
    const t2 = document.querySelector("#t2");
    if (t2.firstChild.nodeValue == "trois") {
      t2.firstChild.nodeValue = "deux";
    } else {
      t2.firstChild.nodeValue = "trois";
    }
  }
  
  const el = document.querySelector("#outside");
  el.addEventListener("click", modifyText, false);