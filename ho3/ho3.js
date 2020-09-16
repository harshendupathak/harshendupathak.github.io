var employeeDetails = [
  {
    image:
      "https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-man-shirt-white-background-150337996.jpg",
    name: "John",
    id: "123456",
    skills: "ReactJS, AngularJS",
    project: "Cognizant Internal",
    hcm: "Alex",
  },
  {
    image:
      "https://cdn.impactinit.com/cdn/x/x@0e0824b9c8/smss52/smsimg30/pv/isignstockcontributors/iss_18592_02033.jpg",
    name: "Girl",
    id: "123456",
    skills: "ReactJS, AngularJS",
    project: "Cognizant Internal",
    hcm: "Alex"
  },
  {
    image:
      "https://cdn.impactinit.com/cdn/x/x@0e0824b9c8/smss52/smsimg30/pv/isignstockcontributors/iss_18592_02033.jpg",
    name: "Girl",
    id: "123456",
    skills: "ReactJS, AngularJS",
    project: "Cognizant Internal",
    hcm: "Alex",
  },
  {
    image:
      "https://cdn.impactinit.com/cdn/x/x@0e0824b9c8/smss52/smsimg30/pv/isignstockcontributors/iss_18592_02033.jpg",
    name: "Girl",
    id: "123456",
    skills: "ReactJS, AngularJS",
    project: "Cognizant Internal",
    hcm: "Alex",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-man-shirt-white-background-150337996.jpg",
    name: "John",
    id: "123456",
    skills: "ReactJS, AngularJS",
    project: "Cognizant Internal",
    hcm: "Alex",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-man-shirt-white-background-150337996.jpg",
    name: "John",
    id: "123456",
    skills: "ReactJS, AngularJS",
    project: "Cognizant Internal",
    hcm: "Alex",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-man-shirt-white-background-150337996.jpg",
    name: "John",
    id: "123456",
    skills: "ReactJS, AngularJS",
    project: "Cognizant Internal",
    hcm: "Alex",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-man-shirt-white-background-150337996.jpg",
    name: "John",
    id: "123456",
    skills: "ReactJS, AngularJS",
    project: "Cognizant Internal",
    hcm: "Alex",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-man-shirt-white-background-150337996.jpg",
    name: "John",
    id: "123456",
    skills: "ReactJS, AngularJS",
    project: "Cognizant Internal",
    hcm: "Alex",
  },
  {
    image:
      "https://cdn.impactinit.com/cdn/x/x@0e0824b9c8/smss52/smsimg30/pv/isignstockcontributors/iss_18592_02033.jpg",
    name: "Girl",
    id: "123456",
    skills: "ReactJS, AngularJS",
    project: "Cognizant Internal",
    hcm: "Alex",
  },
  {
    image:
      "https://cdn.impactinit.com/cdn/x/x@0e0824b9c8/smss52/smsimg30/pv/isignstockcontributors/iss_18592_02033.jpg",
    name: "Girl",
    id: "123456",
    skills: "ReactJS, AngularJS",
    project: "Cognizant Internal",
    hcm: "Alex",
  },
  {
    image:
      "https://cdn.impactinit.com/cdn/x/x@0e0824b9c8/smss52/smsimg30/pv/isignstockcontributors/iss_18592_02033.jpg",
    name: "Girl",
    id: "123456",
    skills: "ReactJS, AngularJS",
    project: "Cognizant Internal",
    hcm: "Alex",
  }
];

var employeeDetailsString = "";
var index = 1;
for (item in employeeDetails) {
  employeeDetailsString += `
        <div class="employee${index}">
        <button id="employee${index}" onclick="deleteDiv(this.id)" type="button" class="close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
        <img src=${employeeDetails[item].image}>
        <div id="data">
        <p>Name: ${employeeDetails[item].name}</p>
        <p>ID: ${employeeDetails[item].id}</p>
        <p>Skills: ${employeeDetails[item].skills}</p>
        <p>Project: ${employeeDetails[item].project}</p>
        <p>HCM: ${employeeDetails[item].hcm}</p>
        </div>
        <button class="btn btn-default"><i class="glyphicon glyphicon-pencil"></i> Edit</button>
        </div>
        
    `;
  index++;
}
var employeeDetailsTable = "";
var index=1;
for (item in employeeDetails) {
  employeeDetailsTable += `
  <tr>
    <td>${employeeDetails[item].name}</td>
    <td>${employeeDetails[item].id}</td>
    <td>${employeeDetails[item].skills}</td>
    <td>${employeeDetails[item].project}</td>
    <td>${employeeDetails[item].hcm}</td>
    <td><button class="btn btn-default"><i class="glyphicon glyphicon-pencil"></i> Edit</button><button onclick="productDelete(this)" type="button" class="close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button></td>
  </tr>      
    `;
    index++;
}

document.getElementById("container").innerHTML += employeeDetailsString;
document.getElementById("tbody").innerHTML += employeeDetailsTable;


document.getElementById("grid").addEventListener("click",function(){
    document.getElementById("table").style.display = "none";
    document.getElementById("container").style.display = "grid";
});

document.getElementById("list").addEventListener("click",function(){
  document.getElementById("container").style.display = "none";
  document.getElementById("table").style.display = "block";
});

function deleteDiv(id){
    var element = document.getElementsByClassName(id)[0];
    element.parentNode.removeChild(element);
}
function productDelete(ctl) {
  $(ctl).parents("tr").remove();
}
