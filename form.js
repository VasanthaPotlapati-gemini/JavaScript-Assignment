(function creatingTable() { // Self-invoking function

    // Let us create an new array

    var Basic=new Array();

    // Now we can just append the elements into array using push() function.

    Basic.push(["Name","Age","DOB","Email","Company"])
    Basic.push(["Vasantha","21","25-01-2002","vasantha@gmail.com","Gemini Solutions"])
    Basic.push(["Likhitha","20","12-07-2001","likhitha@gmail.com","Capgemini"])
    Basic.push(["Raghava","21","26-08-2002","raghava@gmail.com","Cognizant"])
    Basic.push(["Sumithra","22","01-12-2001","sumithra@gmail.com","TCS"])

  const tb = document.createElement("table");
  const tbBody = document.createElement("tbody");


  for (let m = 0; m < 5; m++) {

    const row = document.createElement("tr");

    for (let n = 0; n < 5; n++) {

      if(m==0){
        const head = document.createElement("th");
        const Text= document.createTextNode(Basic[m][n]);
        head.appendChild(Text);
        row.appendChild(head);
       }

      else{
        const col = document.createElement("td");
        const Text= document.createTextNode(Basic[m][n]);
        col.appendChild(Text);
        row.appendChild(col);
      }     
      
      
    }
 
    tbBody.appendChild(row);
  }
  
 
  tb.appendChild(tbBody);
 
  document.body.appendChild(tb);
 
  tb.setAttribute("border", "1");
  tb.setAttribute("cellpadding", "15px");
  tb.style.borderCollapse = "collapse";
  tb.style.textalign='center';
  tb.style.margin='auto';
 
})

();