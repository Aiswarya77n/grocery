function ajax(){
var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            
            if(this.readyState==4 && this.status==200){
                var response = JSON.parse(this.responseText);
                // console.log(response);
                var arr= response.people;
                // console.log(arr);
                
                document.getElementById('demo').style.display = 'none';
                // var output2="";
                var output1="";
                output1 += `<thead>
                                <tr>
                                <th scope="col">Item Number</th>
                                <th scope="col">Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Unit</th>
                                <th scope="col">Department</th>
                                <th scope="col">Notes</th>
                                <th scope="col">Price</th>
                                <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                        <tr>
                                        <td>${arr[0].itemno}</td>
                                        <td>${arr[0].name}</td>
                                        <td>${arr[0].quantity}</td>
                                        <td>${arr[0].unit}</td>
                                        <td>${arr[0].department}</td>
                                        <td>${arr[0].notes}</td>
                                        <td>${arr[0].price}</td>
                                        <td><input type='checkbox' ></td>
                                        </tr>
                                        <tr>
                                        <td>${arr[1].itemno}</td>
                                        <td>${arr[1].name}</td>
                                        <td>${arr[1].quantity}</td>
                                        <td>${arr[1].unit}</td>
                                        <td>${arr[1].department}</td>
                                        <td>${arr[1].notes}</td>
                                        <td>${arr[1].price}</td>
                                        <td><input type='checkbox' ></td>
                                        </tr>
                                        <tr>
                                        <td>${arr[2].itemno}</td>
                                        <td>${arr[2].name}</td>
                                        <td>${arr[2].quantity}</td>
                                        <td>${arr[2].unit}</td>
                                        <td>${arr[2].department}</td>
                                        <td>${arr[2].notes}</td>
                                        <td>${arr[2].quantity}</td>
                                        <td><input type='checkbox' ></td>
                                        </tr>
                                        <tr>
                                        <td>${arr[3].itemno}</td>
                                        <td>${arr[3].name}</td>
                                        <td>${arr[3].quantity}</td>
                                        <td>${arr[3].unit}</td>
                                        <td>${arr[3].department}</td>
                                        <td>${arr[3].notes}</td>
                                        <td>${arr[3].quantity}</td>
                                        <td><input type='checkbox' ></td>
                                        </tr>
                                        <tr>
                                        <td>${arr[4].itemno}</td>
                                        <td>${arr[4].name}</td>
                                        <td>${arr[4].quantity}</td>
                                        <td>${arr[4].unit}</td>
                                        <td>${arr[4].department}</td>
                                        <td>${arr[4].notes}</td>
                                        <td>${arr[4].quantity}</td>
                                        <td><input type='checkbox' ></td>
                                        </tr>
                                        <tr>
                                        <td>${arr[5].itemno}</td>
                                        <td>${arr[5].name}</td>
                                        <td>${arr[5].quantity}</td>
                                        <td>${arr[5].unit}</td>
                                        <td>${arr[5].department}</td>
                                        <td>${arr[5].notes}</td>
                                        <td>${arr[5].price}</td>
                                        <td><input type='checkbox' ></td>
                                        </tr>
                                        <tr>
                                        <td>${arr[6].itemno}</td>
                                        <td>${arr[6].name}</td>
                                        <td>${arr[6].quantity}</td>
                                        <td>${arr[6].unit}</td>
                                        <td>${arr[6].department}</td>
                                        <td>${arr[6].notes}</td>
                                        <td>${arr[6].price}</td>
                                        <td><input type='checkbox' ></td>
                                        </tr>
                                        <tr>
                                        <td>${arr[7].itemno}</td>
                                        <td>${arr[7].name}</td>
                                        <td>${arr[7].quantity}</td>
                                        <td>${arr[7].unit}</td>
                                        <td>${arr[7].department}</td>
                                        <td>${arr[7].notes}</td>
                                        <td>${arr[7].price}</td>
                                        <td><input type='checkbox'></td>
                                        </tr>
                                        <tr>
                                        <td>${arr[8].itemno}</td>
                                        <td>${arr[8].name}</td>
                                        <td>${arr[8].quantity}</td>
                                        <td>${arr[8].unit}</td>
                                        <td>${arr[8].department}</td>
                                        <td>${arr[8].notes}</td>
                                        <td>${arr[8].price}</td>
                                        <td><input type='checkbox' ></td>
                                        </tr>
                                        <tr>
                                        <td>${arr[9].itemno}</td>
                                        <td>${arr[9].name}</td>
                                        <td>${arr[9].quantity}</td>
                                        <td>${arr[9].unit}</td>
                                        <td>${arr[9].department}</td>
                                        <td>${arr[9].notes}</td>
                                        <td>${arr[9].price}</td>
                                        <td><input type='checkbox' ></td>
                                        </tr>        
                                </tbody>`
                document.getElementById('table2').innerHTML = output1;
                
    
    
    
            }
        }
    xhttp.open("GET","people.json",true);
    xhttp.send();
    }