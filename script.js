var editFormData;

function getFormData() {
    return {
            name:document.getElementById("name").value,
			descr:document.getElementById("descr").value,
			price:document.getElementById("price").value,
            qty:document.getElementById("qty").value
    }
}

function getFormData1(nam,des,cost,quant) {
    return {
			name:nam,
			descr:des,
			price:cost,
            qty:quant
    }
}

function clearFormData() {
        document.getElementById("name").value = "";
        document.getElementById("descr").value = "";
		document.getElementById("price").value = "";
		document.getElementById("qty").value = "";
}

// set the message for form status
function setSuccessMessage(message) {
    document.getElementById("message").innerHTML = message;
}

function editDataCall(id) {
    // call get user details by id
    fetch("https://crudcrud.com/api/86c96bd4984f43828baf96c86b0246c6/inventory/"+id,{
        method:"GET"
    }).then((res)=>res.json()).then((response)=>{
        console.log("Edit info: ",response);	
		let payload  = getFormData1(response.name,response.descr,response.price,response.qty-1);
        fetch("https://crudcrud.com/api/86c96bd4984f43828baf96c86b0246c6/inventory/"+id,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        }).then((res)=>res.json()).then((response)=>{
            setSuccessMessage(response.message)
                // clear input email and name
                clearFormData();
                getData(); // reload table 
        })
        editFormData =  response[0];
    })
}



function editDataCall1(id) {
    // call get user details by id
    fetch("https://crudcrud.com/api/86c96bd4984f43828baf96c86b0246c6/inventory/"+id,{
        method:"GET"
    }).then((res)=>res.json()).then((response)=>{
        console.log("Edit info: ",response);	
		let payload  = getFormData1(response.name,response.descr,response.price,response.qty-2);
        fetch("https://crudcrud.com/api/86c96bd4984f43828baf96c86b0246c6/inventory/"+id,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        }).then((res)=>res.json()).then((response)=>{
            setSuccessMessage(response.message)
                // clear input email and name
                clearFormData();
                getData(); // reload table 
        })
        editFormData =  response[0];
    })
}


function editDataCall2(id) {
    // call get user details by id
    fetch("https://crudcrud.com/api/86c96bd4984f43828baf96c86b0246c6/inventory/"+id,{
        method:"GET"
    }).then((res)=>res.json()).then((response)=>{
        console.log("Edit info: ",response);	
		let payload  = getFormData1(response.name,response.descr,response.price,response.qty-3);
        fetch("https://crudcrud.com/api/86c96bd4984f43828baf96c86b0246c6/inventory/"+id,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        }).then((res)=>res.json()).then((response)=>{
            setSuccessMessage(response.message)
                // clear input email and name
                clearFormData();
                getData(); // reload table 
        })
        editFormData =  response[0];
    })
}

// called this function when user click on button
function submitForm() {
		if(document.getElementById("name").value!='' && document.getElementById("descr").value!='' && document.getElementById("qty").value!='' && document.getElementById("price").value!='')
		{
		var numbers= /^[0-9]+$/;
		if(document.getElementById("qty").value.match(numbers) && document.getElementById("price").value.match(numbers))
		{
		addProduct(); 
		}
		else{
		alert("Please add numeric values in price and quantity fields");
		}
		}
		else
		{
		alert("Please enter values in all the fields for adding a new product");
		}
}

// add user function 
function addProduct() {
        let payload  = getFormData();
        fetch("https://crudcrud.com/api/86c96bd4984f43828baf96c86b0246c6/inventory",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        }).then((res)=>res.json()).then((response)=>{
                // clear input email and name
                clearFormData();
                getData(); // reload table 
        })
}

// delete data
function deleteData(id) {
    fetch("https://crudcrud.com/api/86c96bd4984f43828baf96c86b0246c6/inventory/"+id,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        }).then((res)=>res.json()).then(
        (response)=>{
            setSuccessMessage(response.message);
            getData();
        }
    )
}

// get data method
function getData() {
                fetch("https://crudcrud.com/api/86c96bd4984f43828baf96c86b0246c6/inventory").then(
                    (res)=>res.json()
                ).then((response)=>{
                    var tmpData  = "";
                    console.log(response);
                    response.forEach((product)=>{
                        tmpData+="<tr>"
                        tmpData+="<td>"+product.name+"</td>";
                        tmpData+="<td>"+product.descr+"</td>";
                        tmpData+="<td>"+product.price+"</td>";
                        tmpData+="<td>"+product.qty+"</td>";
                        tmpData+="<td><button class='btn btn-primary' onclick='editDataCall(`"+product._id+"`)'>Buy 1</button></td>";
						tmpData+="<td><button class='btn btn-primary' onclick='editDataCall1(`"+product._id+"`)'>Buy 2</button></td>";
						tmpData+="<td><button class='btn btn-primary' onclick='editDataCall2(`"+product._id+"`)'>Buy 3</button></td>";
                        tmpData+="<td><button class='btn btn-danger' onclick='deleteData(`"+product._id+"`)'>Delete</button></td>";
                        tmpData+="</tr>";
                    })
                    document.getElementById("tbData").innerHTML = tmpData;
                })     
        }
		

getData();
