//your JS code here. If required.https://www.svgrepo.com/show/345221/three-dots.svg
let titleInput=document.getElementById("title");
let authorInput=document.getElementById("author");
let isbnTnput=document.getElementById("isbn");
let submitbut=document.getElementById("submit");
let tablebody=document.getElementById("book-list");

submitbut.addEventListener("click",function(){
	const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const isbn = isbnInput.value.trim();

	if(title&&author&&isbn){
		addBookToTable(title,author,isbn)
		titleInput.value="";
		authorInput.value="";
		isbnInput.value="";
	}else{
		alert("Please fill all fields !")
	}
});

function addBookToTable(title,author,isbn) {
	let row=document.createElement("tr");

	let titleCell=document.createElement("td");
	titleCell.textContent=title;

	let authorCell=document.createElement("td");
	authorCell.textContent=author;

	let isbnCell=document.createElement("td");
	isbnCell.textContent=isbn;

	let deleteCell=document.createElement("td");
	let deleteButton=document.createElement("button");
	deleteButton.textContent="x";
	deleteButton.setAttribute("class","delete-btn");
	deleteButton.onclick=()=>{row.remove()};

	deleteCell.appendChild(deleteButton);
	row.appendChild(titleCell);
	row.appendChild(authorCell);
	row.appendChild(isbnCell);
	row.appendChild(deleteCell);
	tablebody.appendChild(row);
}