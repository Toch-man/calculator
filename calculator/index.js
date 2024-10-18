const buttons = document.querySelectorAll("button")
const display = document.getElementById("display")
const equals = document.getElementById("equals")

buttons.forEach((val)=>{
    val.onclick = () =>{
         if(val.id === "equals" && display.innerHTML !== "" ){
            display.innerHTML = eval(display.innerHTML)
         }
         else if(val.id==="backspace" && display.innerHTML !== "") {
            
            let stgLength= display.innerHTML.length
           display.innerHTML = display.innerHTML.slice(-stgLength-1 , -1)//slice doesn't modify the string 
           //it create a new string thats why we assigned it to display.innerhtml
         }
         else{ display.innerHTML+= val.value}
    }
})
let numbers=[0-9]
console.log(numbers[2])