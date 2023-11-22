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


async  function editDataCall(id) {
    // call get user details by id
	try{
		const response= await axios.get("https://crudcrud.com/api/8d6e2856f0df47e199eb4ef2a391900d/inventory/"+id)
        console.log("Edit info: ",response.data.qty);
         if(response.data.qty-1>=0){
		let payload  = getFormData1(response.data.name,response.data.descr,response.data.price,response.data.qty-1);
       await axios.put("https://crudcrud.com/api/8d6e2856f0df47e199eb4ef2a391900d/inventory/"+id,payload)
                getData(); // reload table 
		 }
		 else{
			 alert("Item is over");
		 }
	}
	catch(err)
	{
		console.log(err);
    }
}




async  function editDataCall1(id) {
    // call get user details by id
	try{
		const response= await axios.get("https://crudcrud.com/api/8d6e2856f0df47e199eb4ef2a391900d/inventory/"+id)
        console.log("Edit info: ",response.data.qty);
         if(response.data.qty-2>=0){
		let payload  = getFormData1(response.data.name,response.data.descr,response.data.price,response.data.qty-2);
       await axios.put("https://crudcrud.com/api/8d6e2856f0df47e199eb4ef2a391900d/inventory/"+id,payload)
                getData(); // reload table 
		 }
		 else{
			 alert("Item is over");
		 }
	}
	catch(err)
	{
		console.log(err);
    }
}



async  function editDataCall2(id) {
    // call get user details by id
	try{
		const response= await axios.get("https://crudcrud.com/api/8d6e2856f0df47e199eb4ef2a391900d/inventory/"+id)
        console.log("Edit info: ",response.data.qty);
         if(response.data.qty-3>=0){
		let payload  = getFormData1(response.data.name,response.data.descr,response.data.price,response.data.qty-3);
       await axios.put("https://crudcrud.com/api/8d6e2856f0df47e199eb4ef2a391900d/inventory/"+id,payload)
                getData(); // reload table 
		 }
		 else{
			 alert("Item is over");
		 }
	}
	catch(err)
	{
		console.log(err);
    }
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
async function addProduct() {
try{	
const payload= getFormData();
await axios.post("https://crudcrud.com/api/8d6e2856f0df47e199eb4ef2a391900d/inventory",payload)	
	getData();
}
catch(err){
	console.log(err);
}
}

 async function deleteData(id) {
	try{
	 await axios.delete("https://crudcrud.com/api/8d6e2856f0df47e199eb4ef2a391900d/inventory/"+id)
    
                getData(); // reload table 
        }
	catch(err) {
		console.log(err);
	}
	
}


async function getData() {
	try{
			const response =await axios.get("https://crudcrud.com/api/8d6e2856f0df47e199eb4ef2a391900d/inventory")		
	 var tmpData  = "";
                    console.log(response);
                    response.data.forEach((product)=>{
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
	}
catch(err)
{
console.log(err);	
}
}
		
		

getData();
