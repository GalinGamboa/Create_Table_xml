document.querySelector('.btn-1').addEventListener('click', callXlm);

function callXlm() {
  document.querySelector('h1').classList.remove('title');
  document.querySelector('.btn-1').classList.add('btn_none');
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "catalog.xml");
  xhttp.send();
  xhttp.onload = function() {
    myFunction(this);
  };
};

function myFunction(xml){
  
   const xmlDoc = xml.responseXML;
   const x = xmlDoc.getElementsByTagName("CD"); 
   
   let table = '<tr><th>TITLE</th><th>ARTIST</th><th>COUNTRY</th><th>COMPANY</th><th>YEAR</th></tr>';
  
   for (let i = 0; i < x.length; i++) {
  
      table = table + ('<tr><td>' +
        x[i].getElementsByTagName('TITLE')[0].childNodes[0].nodeValue + '</td><td>' +
        x[i].getElementsByTagName('ARTIST')[0].childNodes[0].nodeValue + '</td><td>' +
        x[i].getElementsByTagName('COUNTRY')[0].childNodes[0].nodeValue + '</td><td>' +
        x[i].getElementsByTagName('COMPANY')[0].childNodes[0].nodeValue + '</td><td>' +
        x[i].getElementsByTagName('YEAR')[0].childNodes[0].nodeValue + '</td></td></tr>');
    };
  
  document.querySelector('#table_xml').innerHTML = ` ${table}`;
};


/* 
    console.log(xmlDoc.childNodes[0].children[0].innerHTML);
    console.log(xmlDoc.childNodes[0].children[1].innerHTML);
    console.log(xmlDoc.childNodes[0].children[2].innerHTML);
    console.log(xmlDoc.childNodes[0].children[3].innerHTML);
    console.log(xmlDoc.childNodes[0].children[4].innerHTML);
    console.log(xmlDoc.childNodes[0].children[5].innerHTML);
    console.log(xmlDoc.childNodes[0].children[6].innerHTML);

    let table = `<tr>
                  <th>TITLE</th>
                  <th>ARTIST</th>
                  <th>COUNTRY</th>
                  <th>COMPANY</th>
                  <th>YEAR</th>
                </tr>`
*/
