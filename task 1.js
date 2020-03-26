//alert("yooooo");

function myFunction() {
    var z = document.getElementById("needed").value;
    var x=z;
    var vovc=0;
    var conc=0;
    var splc=0;
    var spac=0;
    var v="AEIOUaeiou";
    var i=0;
    while(i<x.length)
    {
        if(v.indexOf(x[i])!=-1)
        {
            vovc+=1;
            // x.splice(i,1);
        }
        else if(/^[A-Z]$/i.test(x[i]))
        {
            conc+=1;
        }
        else if(x[i]===' ')
        {
            spac+=1;
        }
        else if(!(/^[0-9]$/i.test(x[i])))
        {
            splc+=1;
        }
        i+=1;
    }
    document.getElementById("vov").innerHTML="vowles: "+vovc;
    document.getElementById("con").innerHTML="consonants: "+conc;
    document.getElementById("spa").innerHTML="spaces: "+spac;
    document.getElementById("spl").innerHTML="special characters: "+splc;


  }