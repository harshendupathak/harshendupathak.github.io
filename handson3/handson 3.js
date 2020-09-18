var Employees = (function(){
    var employeeDetails = [];
    var index;
    var counter;
    const renderGrid = () => {
        document.querySelector("#container").innerHTML = 
            employeeDetails.map(({image,name,id,skills,project,hcm},index) => `
                <div class="employee${+index++}">
                    <button id="${index-1}" onclick="Employees.deleteEmployee(this.id)" type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <img src=${image}>
                    <div id="data">
                        <p>Name: ${name}</p>
                        <p>ID: ${id}</p>
                        <p id="skill${index-1}">Skills: ${skills}</p>
                        <p>Project: ${project}</p>
                        <p>HCM: ${hcm}</p>
                    </div>
                    <button id="${index-1}" onclick="Employees.updateDetails(this.id)" class="btn btn-default"><i class="glyphicon glyphicon-pencil"></i> Edit</button>
                    <button onclick="Employees.submitDetails()" class="btn btn-default"><i class="glyphicon glyphicon-pencil"></i> Save</button>
                </div>
                
            `)
    }

    const renderList = () => {
        document.querySelector("#container").innerHTML = `
        <table id="table">
            <thead>><tr><td>Name</td><td>ID</td><td>Skills</td><td>Project</td><td>HCM</td><td></td></tr></thead>
            <tbody>${employeeDetails.map(({name,id,skills,project,hcm},counter) => `
                <tr class="tr${+counter++}">
                    <td>${name}</td>
                    <td>${id}</td>
                    <td id="skillList${counter-1}">${skills}</td>
                    <td>${project}</td>
                    <td>${hcm}</td>
                    <td><button id="${counter-1}" onclick="Employees.updateListDetails(this.id)" class="btn btn-default"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg></button>
                    <button onclick="Employees.submitListDetails()" type="button" class="btn" ><i class="fa fa-floppy-o" aria-hidden="true"></i></button><button id="${counter-1}" onclick="Employees.deleteListEmployee(this.id)" type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></th>
                </tr>
            `)}</tbody>
        </table>
        `
    }
    const updateListDetails = (id) => {
        document.querySelector("#skillList"+id).innerHTML = `<input class="valueList${id}" type="text">`
        counter = id;
    }

    const deleteListEmployee = (id) => {
        employeeDetails.splice((id),1);
        console.log(employeeDetails);
        renderList();
    }

    const submitListDetails = () => {
        employeeDetails[counter].skills = document.getElementsByClassName("valueList"+counter)[0].value;
        renderList();
    }

    const deleteEmployee = (id) => {
        employeeDetails.splice((id),1);
        console.log(employeeDetails);
        renderGrid();
    }

    const updateDetails = (id) => {
        document.querySelector("#skill"+id).innerHTML = `Skills: <input class="value${id}" type="text">`
        index = id;
    }

    const submitDetails = () => {
        employeeDetails[index].skills = document.getElementsByClassName("value"+index)[0].value;
        renderGrid();
    }

    const fetchDetails = () => {
        fetch('https://jsonblob.com/api/120a4166-f960-11ea-a18d-755624dc0733').then(response => response.json()).then(json => {employeeDetails = [...json] 
        renderGrid()
        })
    }

    const init = () => {
        fetchDetails();
    }

    return {
        init,renderGrid,fetchDetails,deleteEmployee,updateDetails,submitDetails,renderList,deleteListEmployee,updateListDetails,submitListDetails
    }
})()
Employees.init()
