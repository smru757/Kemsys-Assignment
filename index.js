let userArray = [];

function edit(id) {
    const inputs = document.querySelectorAll('.input1')
   

    for (let i = 0; i < inputs.length;i++){
        inputs[i].disabled = !inputs[i].disabled
    }
    

    if(document.querySelector('#edit'+id).classList.contains('fa-pen')){
       document.querySelector('#edit'+id).classList.remove('fa-pen')
       document.querySelector('#edit'+id).classList.add('fa-plus')


    }else if(document.querySelector('#edit'+id).classList.contains('fa-plus')){
        document.querySelector('#edit'+id).classList.remove('fa-plus')
        document.querySelector('#edit'+id).classList.add('fa-pen')
   
}
}


function deleteContent(){
    let deletePost = confirm("do you really want to delete this post?");
  console.log(deletePost)
   if(deletePost){
       console.log("your post has been deleted successfully")     
     }
     else{
        console.log("your post has been deleted successfully")
     }
  }

 

function addRow(){
  var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var nameCell = row.insertCell(0);
    var departmentCell = row.insertCell(1);
    var numberCell = row.insertCell(2);
    var actionsCell = row.insertCell(3);
    nameCell.innerHTML = "<input type='text' class='input1' placeholder='Ex:- Smruti'>";
    departmentCell.innerHTML = "<input type='text' class='input1' placeholder='Ex:- CSE'>";
    numberCell.innerHTML = "<input type='number' class='input1' placeholder='Ex:- 90901 (10 Digits)'>";
    actionsCell.innerHTML = "  <button class='pen' ><i class='fa fa-plus' id='edit2' onclick='edit(2)'></i> </button><button><i class='fa fa-trash' id='trash' onclick='deleteContent()'></i></button>";
}