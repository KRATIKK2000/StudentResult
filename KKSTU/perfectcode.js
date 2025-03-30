

// warnings
let HindiRange=document.getElementById("HindiRange")
let EnglishRange=document.getElementById("EnglishRange")
let MathsRange=document.getElementById("MathsRange")
let ScienceRange=document.getElementById("ScienceRange")
let SoScienceRange=document.getElementById("SoScienceRange")
let SanskritRange=document.getElementById("SanskritRange")




//  geting table row reference
let hindiMarks=document.getElementById("hindiMarks")
let hindiGrade=document.getElementById("hindiGrade")

let englishMarks=document.getElementById("englishMarks")
let englishGrade=document.getElementById("englishGrade")

let mathsMarks=document.getElementById("mathsMarks")
let MathsGrade=document.getElementById("MathsGrade")

let scienceMarks=document.getElementById("scienceMarks")
let scienceGrade=document.getElementById("scienceGrade")

let socialScienceMarks=document.getElementById("socialScienceMarks")
let socialScienceGrade=document.getElementById("socialScienceGrade")

let sanskritMarks=document.getElementById("sanskritMarks")
let sanskritGrade=document.getElementById("sanskritGrade")


let division=document.getElementById("DivisionResult")
let Result=document.getElementById("Result")



// taking table block and form block
let table=document.getElementById("table1")
let form=document.getElementById("form1")



// getting hindi value  


var hindi1 = document.getElementById("Hindi");
var Hindi = 0;
let allInputValid=true
hindi1.addEventListener("change", function(event){
    Hindi = (event.target.value);
    console.log(Hindi, typeof(Hindi), "hindi type or value");
  
    // Check if Hindi is a number, not empty, and in the range 0-100
    if (Hindi === ""|| Hindi.trim()=="" || Number(isNaN(Hindi)) || Number(Hindi) < 0 || Number(Hindi) > 100) {
        HindiRange.innerText = "Input can not be empty, more than 100 or a string";
        allInputValid=false
    } else {
        
        HindiRange.innerText = "";
        
        allInputValid=true
    }
});

// getting English value

var English1 = document.getElementById("English");
var English = 0;
English1.addEventListener("change", function(event){
    English = (event.target.value);
    console.log(English, typeof(English), "English type or value");
  
    // Check if Hindi is a number, not empty, and in the range 0-100
    if (English === ""|| English.trim()=="" || Number(isNaN(English)) || Number(English) < 0 || Number(English) > 100) {
        EnglishRange.innerText = "Input can not be empty, more than 100 or a string";
        allInputValid=false
    } else {
        
        EnglishRange.innerText = "";
        
        allInputValid=true
    }
})

// getting Maths value
var Maths1 = document.getElementById("Maths")
var Maths=0;

Maths1.addEventListener("change", function(event){
    Maths = (event.target.value);
    console.log(Maths, typeof(Maths), "Maths type or value");
  
    // Check if Hindi is a number, not empty, and in the range 0-100
    if (Maths === ""|| Maths.trim()=="" || Number(isNaN(Maths)) || Number(Maths) < 0 || Number(Maths) > 100) {
        MathsRange.innerText = "Input can not be empty, more than 100 or a string";
        allInputValid=false
    } else {
        
        MathsRange.innerText = "";
        
        allInputValid=true
    }
})

// getting Science value
var science1 = document.getElementById("Science")
var Science=0
science1.addEventListener("change", function(event){
    Science = (event.target.value);
    console.log(Science, typeof(Science), "Science type or value");
  
    // Check if Hindi is a number, not empty, and in the range 0-100
    if (Science === ""|| Science.trim()=="" || Number(isNaN(Science)) || Number(Science) < 0 || Number(Science) > 100) {
        ScienceRange.innerText = "Input can not be empty, more than 100 or a string";
        allInputValid=false
    } else {
        
        ScienceRange.innerText = "";
        
        allInputValid=true
    }
})

// getting SoScience value
var socialSCience1 = document.getElementById("SoScience")
var SoScience=0

socialSCience1.addEventListener("change", function(event){
    SoScience = (event.target.value);
    console.log(SoScience, typeof(SoScience), "SoScience type or value");
  
    // Check if Hindi is a number, not empty, and in the range 0-100
    if (SoScience === ""|| SoScience.trim()=="" || Number(isNaN(SoScience)) || Number(SoScience) < 0 || Number(SoScience) > 100) {
        SoScienceRange.innerText = "Input can not be empty, more than 100 or a string";
        allInputValid=false
    } else {
        
        SoScienceRange.innerText = "";
        
        allInputValid=true
    }
})


// getting Sanskrit value
var sanskrit1 = document.getElementById("Sanskrit")
var Sanskrit=0
sanskrit1.addEventListener("change", function(event){
    Sanskrit = (event.target.value);
    console.log(Sanskrit, typeof(Sanskrit), "Sanskrit type or value");
  
    // Check if Hindi is a number, not empty, and in the range 0-100
    if (Sanskrit === ""|| Sanskrit.trim()=="" || Number(isNaN(Sanskrit)) || Number(Sanskrit) < 0 || Number(Sanskrit) > 100) {
        SanskritRange.innerText = "Input can not be empty, more than 100 or a string";
        allInputValid=false
    } else {
        
        SanskritRange.innerText = "";
        
        allInputValid=true
    }
})














// funciton for handling user input 

function handleSubmit(event){
    
    let numHindi=Number(Hindi)
    let numEnglish=Number(English)
    let numMaths=Number(Maths)
    let numScience=Number(Science)
    let numSoScience=Number(SoScience)
    let numSanskrit=Number(Sanskrit)


// English 1 ko function ke andr bhi addeventlistner lga k kr skte hai 
 
    
    if(Hindi=="" ){
        HindiRange.innerText = "Input can not be empty, more than 100 or a string";
        console.log(typeof(Hindi),"type")
        allInputValid=false
    }
    console.log(typeof(numHindi),numHindi,"numberhindi in to")
    // console.log(Hindi,typeof(Hindi),"in fun")
    console.log(Hindi,"inside function")
    
    if(English=="" ){
        EnglishRange.innerText = "Input can not be empty, more than 100 or a string";
        console.log(typeof(English),"type")
        allInputValid=false
    }
    console.log(typeof(numEnglish),numEnglish,"numEnglish in to")

    
    
    if(Maths=="" ){
        MathsRange.innerText = "Input can not be empty, more than 100 or a string";
        console.log(typeof(Maths),"type")
        allInputValid=false
    }
   
    if(Science=="" ){
        ScienceRange.innerText = "Input can not be empty, more than 100 or a string";
        console.log(typeof(Science),"type")
        allInputValid=false
    }
    
    if(SoScience=="" ){
        SoScienceRange.innerText = "Input can not be empty, more than 100 or a string";
        console.log(typeof(SoScience),"type")
        allInputValid=false
    }

    if(Sanskrit=="" ){
        SanskritRange.innerText = "Input can not be empty, more than 100 or a string";
        console.log(typeof(Sanskrit),"type")
        allInputValid=false
    }
    console.log(allInputValid)

   console.log(typeof(numHindi),typeof(numEnglish),typeof(numMaths),typeof(numScience),typeof(numSoScience),typeof(numSanskrit))

   if(allInputValid){
      table.style.display="block"
      form.style.display="none"
    checkingNumber(numHindi,numEnglish, numMaths,numScience,numSoScience,numSanskrit ) 
   }
   else{
    console.log("not valid inputs")
   }

}



// function for table calculation

function checkingNumber(Hindi,English, Maths,Science,SoScience,Sanskrit){
    console.log(typeof(Hindi),Hindi,"inchecking")
    // console.log(typeof(English),"inchecking")
    // console.log(typeof(Maths),"inchecking")
    // console.log(typeof(Science),"inchecking")
    // console.log(typeof(SoScience),"inchecking")
    // console.log(typeof(Sanskrit),"inchecking")

    let total = 600
    let persentage = ((Hindi+English+Maths+Science+SoScience+Sanskrit)/total*100).toFixed(2)
      
    // inserting table value
     hindiMarks.innerText = Hindi;
    englishMarks.innerText = English;
    mathsMarks.innerText = Maths;
    scienceMarks.innerText = Science;
    socialScienceMarks.innerText = SoScience;
    sanskritMarks.innerText = Sanskrit;


    
    console.log(persentage,"persentage")
//  for hindi

 if( Hindi>=0 && Hindi<=33 ){
         hindiMarks.innerText=Hindi
         hindiGrade.innerText="supply"
    }
    else if(Hindi>=70 && Hindi<=100){
           hindiMarks.innerText=Hindi
         hindiGrade.innerText="A+"
    }
   
   
    
//  for english
if( English >= 0  && English<=38   ){

    englishMarks.innerText=English
    englishGrade.innerText="supply"
}
else if(English>=85 && English<=100){
    englishMarks.innerText=English
    englishGrade.innerText="A+"
}


// for maths 
if( Maths>=0 && Maths <=45  ){
    mathsMarks.innerText=Maths
    MathsGrade.innerText="supply"
}
else if(Maths>=75 && Maths<=100){
    mathsMarks.innerText=Maths
    MathsGrade.innerText="A+"
}


// for science 
 if( Science>=0 && Science<=28  ){

    scienceMarks.innerText=Science
    scienceGrade.innerText="supply"
}
else if(Science>=90 && Science<=100){
    scienceMarks.innerText=Science
    scienceGrade.innerText="A+"
}


// for soSCience
 if( SoScience>=0 && SoScience<=40 ){

    socialScienceMarks.innerText=SoScience
    socialScienceGrade.innerText="supply"
}
else if(SoScience>=65 && SoScience<=100){
    socialScienceMarks.innerText=SoScience
    socialScienceGrade.innerText="A+"
}

// sanskrit
if( Sanskrit>=0 && Sanskrit<40   ){
    sanskritMarks.innerText=Sanskrit
    sanskritGrade.innerText="supply"
}
else if(Sanskrit>=65 && Sanskrit<=100){
    sanskritMarks.innerText=Sanskrit
    sanskritGrade.innerText="A+"
}




// showing result in %
if(persentage>=60){
    division.innerHTML=`<h2>${persentage}% 1st Division</h2>`
}
else if(persentage>=40&&persentage<=59){
     division.innerHTML=`<h2>${persentage}% 2nd Division</h2>`
}
else{
    division.innerHTML=`<h2>${persentage}% 3rd Division</h2>`
}


//  showing result

let count=0
console.log(hindiGrade.innerText,"kk", count)
    if(hindiGrade.innerText == "supply"){
        count++
    }
    if(englishGrade.innerText=="supply"){
        count++
    }
    if(MathsGrade.innerText=="supply"){
        count++
    }
    if(scienceGrade.innerText=="supply"){
        count++
    }
    if(socialScienceGrade.innerText=="supply"){
        count++
    }
    if(sanskritGrade.innerText=="supply"){
        count++
    }
    console.log(count,"supply count")


   

    // show result 
    showResult(count)


}

function showResult(count){
    if(count >=1 && count<=2){
      Result.innerHTML=`<h2>supply</h2>`
    }
    else if(count>=3){
     Result.innerHTML=`<h2>fail</h2>`
    }
    else if(count<=0){
     Result.innerHTML=`<h2>pass</h2>`
    }
  
}