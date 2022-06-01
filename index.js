
async function createStudent(){
  let name=document.querySelector("#name").value
  let age=+document.querySelector("#age").value
  let gender=document.querySelector("#gender").value
  let marks=+document.querySelector("#marks").value
  let cohorts=document.querySelector("#cohorts").value

  let body={
    name,
    age,
    gender,
    marks,
    cohorts
  
  }
  let output=await fetch(`http://localhost:3000/students`,{
      method:"POST",
      body:JSON.stringify(body),
      headers:{
        "Content-Type": "application/json"
      }
  })
  let data=await output.json();
  

}





displayData()

 async  function displayData()
{
     
       let table=document.createElement("table");

       let thead=document.createElement("thead");
       let theadrow=document.createElement("tr")

       let id=document.createElement("th");
       id.innerText="id";

       let name=document.createElement("th");
       name.innerText="name";

       let age=document.createElement("th");
       age.innerText="age";

       let gender=document.createElement("th");
       gender.innerText="gender";

       let marks=document.createElement("th");
       marks.innerText="marks";

       let cohort=document.createElement("th");
       cohort.innerText="cohort";

       theadrow.append(id,name,age,gender,marks,cohort)
       thead.append(theadrow)
      

       let res=await fetch(`http://localhost:3000/students`)
       let output=await res.json();
      //  console.log(output)

       let tbody=document.createElement("tbody");
    
     output.forEach(element => {

      let row=document.createElement("tr")

      let td1=document.createElement("td");
      td1.innerText=element.id

      let td2=document.createElement("td");
      td2.innerText=element.name

      let td3=document.createElement("td");
      td3.innerText=element.age

      let td4=document.createElement("td");
      td4.innerText=element.gender

      let td5=document.createElement("td");
      td5.innerText=element.marks

      let td6=document.createElement("td");
      td6.innerText=element.cohort

      let td7=document.createElement("td");
      let delButton=document.createElement("button")
    
      delButton.innerText="DELETE";
      delButton.onclick= async function ()
      {
          let data=await  fetch(`http://localhost:3000/students/${element.id}`,{
            method: "DELETE"

          })
          
          
          

      }

      let td8=document.createElement("td");
      let editButton=document.createElement("button")
    
      editButton.innerText="EDIT";
      editButton.onclick=  function (){
        console.log(element.id)
        localStorage.setItem("studentId",(element.id))
        location.href="edit.html";
      }
     
          
          
          

      
         
         
      td7.append(delButton)
      td8.append(editButton)

      row.append(td1,td2,td3,td4,td5,td6,td7,td8);
      tbody.append(row);
      table.append(thead,tbody)

      document.querySelector("#container").append(table)
   });
}