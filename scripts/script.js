
document.getElementById('bg').style.background = `url(images/wallhaven-j8mqyp.jpg)`;

let myLibrary = [
    { title: "Meditations", author: "Marcus Aurelius", pages: "88", read: "Read" },
    { title: "The Republic", author: "Plato", pages: "700", read: "Read" },
    { title: "Discourses", author: "Epictetus", pages: "383", read: "Read" },
];
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
function addBookToLibrary(title, author, pages, read) {  
    if (!arguments || title == "" || author == "" || pages == "") { 
        return ;
    }
    else {}
    let bookName = title +" by "+ author
    bookName = new Book(title, author, pages, read)
    myLibrary.push(bookName)
    
    document.getElementById('id01').style.display='none'
    form.elements[0].value = ""
    form.elements[1].value = ""
    form.elements[2].value = ""
    return displayLibraryBooks()
}

function displayLibraryBooks() {
    while(document.getElementsByClassName("card").length > 0) {
        document.getElementsByClassName("card")[0].remove();
     }     
    myLibrary.forEach(function(element) {
        if (!document.getElementById(element.title+"card")) {
        addElement("div","box",element.title+"card","","card");
        addElement("div", element.title+"card",element.title+"header", "","header");
        addElement("div", element.title+"header","", element.title, "booktitle");
        addElement("div", element.title+"card",element.title+"contain", "","contain");
        addElement("div", element.title+"contain","", "Author: " + element.author);
        addElement("div", element.title+"contain","", "Pages: "+element.pages);
        addElement("div", element.title+"contain","", "Read: "+element.read);
        addElement("button", element.title+"card",element.title+"read", "Read/unread","read");
        document.getElementById(element.title+"read").addEventListener("click", function() { 
            if (element.read == "Read") { 
                element.read = "Not read yet"
                return displayLibraryBooks()
            }
            else if (element.read == "Not read yet") { 
                element.read = "Read"
                return displayLibraryBooks()
            }
            else {
                return displayLibraryBooks()
            }
        }
        )

        addElement("button", element.title+"card",element.title+"del", "Delete","del");
        document.getElementById(element.title+"del").addEventListener("click", function() { 
            result = myLibrary.findIndex(book => book.title == element.title)
            if (result == -1) {
                return displayLibraryBooks()
            }
            else {
                myLibrary.splice(result,1)
                return displayLibraryBooks()
            }
            }
            )

        }
        else { 
            return
        }
    }
    )
}

function addElement (newElement,par,newid,content,newclass) {
  const newDiv = document.createElement(newElement);
  const newContent = document.createTextNode(content);
  newDiv.appendChild(newContent);
  const currentDiv = document.getElementById("div1");
  document.getElementById(par).insertBefore(newDiv, currentDiv);
  newDiv.setAttribute('id', newid);
  newDiv.classList.add(newclass)
    return;
}
form = document.getElementById("bookadd")
document.getElementById("btnadd").addEventListener('click', addBookToLibrary(
    form.elements[0].value,
    form.elements[1].value,
    form.elements[2].value,
    form.elements[3].value))

displayLibraryBooks()
myLibrary.findIndex(book => book.title == "Meditations")