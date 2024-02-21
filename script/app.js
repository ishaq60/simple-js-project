// const price =getConverted("bugget")
// const cart =getConverted("cart")
// const left =getConverted("lefts")


const allbtn=document.getElementsByClassName("btn")

for(const allbtns of allbtn ){
  allbtns.addEventListener("click",function(event){
    const name=event.target.parentNode.childNodes[1].innerText;
    const price=event.target.parentNode.childNodes[3].childNodes[1].innerText
    const category=event.target.parentNode.childNodes[5]. childNodes[1].innerText
    // console.log(name,price,category);
    const selectedcontainer=document.getElementById("selectedplayer");
    
    const div=document.createElement("div");
    div.classList.add("selectedplayer");

const fristLeft=getConverted("lefts");
if(fristLeft-1<0){
    alert("lemit ses")
    return;
}
const fristBugget=getConverted("bugget");
if(fristBugget ==0){
    alert("lemit ses")
    return;
}
event.target.setAttribute("disabled",false)
event.target.parentNode.style.backgroundColor="gray";

    // update buggest
    const bugget=getConverted("bugget")
    document.getElementById("bugget").innerText=bugget-parseInt(price);

    const cardCount=getConverted("cart")
    document.getElementById("cart").innerText=cardCount+1;
    const cardLeft=getConverted("lefts")
    document.getElementById("lefts").innerText=cardLeft-1;


    const p1=document.createElement("p")
    const p2=document.createElement("p")
    const p3=document.createElement("p")
    p1.innerText= name;
    p2.innerText= price;
    p3.innerText= category;
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)
    selectedcontainer.appendChild(div);
    updatetotalcost(price);
    updatetotal()
  });
}






function grandtotal(status){
    const totalcost=getConverted("total_cost");
    if(status == undefined){
        
        document.getElementById("grand_total").innerText=totalcost;
    }
    else{
        const cuponCode=document.getElementById("cuppon_code").value;
        if(cuponCode=="love"){
         const discountPrice=totalcost*0.2;
         document.getElementById("grand_total").innerText=totalcost-discountPrice;
        }
        else {
            alert("plz enter  valid cupon code")
        }
    }
}

function updatetotal(){
    const totalcost=getConverted("total_cost")  
    document.getElementById("grand_total").innerText=totalcost;
}

function updatetotalcost(value){
 const totalcost=getConverted("total_cost")
 const sum=totalcost+parseInt(value)
   document.getElementById("total_cost").innerText=sum;
// }
}













function getConverted(id){
    const price =document.getElementById(id).innerText;
    const converteNumber=parseInt(price)
   return converteNumber;    

}

