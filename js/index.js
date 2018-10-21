const apiUrl = 'http://www.raydelto.org/itla/agenda/';
let form = document.getElementById('form').addEventListener('submit', sendContact);
getContacts(apiUrl);
function sendContact(e){
    e.preventDefault();
    
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastname').value;
    let telephone = document.getElementById('telephone').value;

    if(name != '' && lastName != '' && telephone != ''){
        let data = {
            nombre: name,
            apellido: lastName,
            telefono: telephone
        };
        Data(data, apiUrl);
    } else {
        alert('Campos Vacios');
    }
}
function getContacts(url){
   
    fetch(url)
    .then((contact)=>{
        return contact.json();
    })
    .then((data)=>{
        let table = document.getElementById('table');
        data.forEach(e => {
            let tr = document.createElement('tr');
            let name = document.createElement('td');
            let lastName = document.createElement('td');
            let telephone = document.createElement('td');
            name.textContent = e.nombre;
            lastName.textContent = e.apellido;
            telephone.textContent = e.telefono;
            tr.appendChild(name);
            tr.appendChild(lastName);
            tr.appendChild(telephone);
            table.appendChild(tr);
        })

    }).catch((e)=>{
        alert("Error al cargar contactos")
    });
}
function Data(data, url) {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    }).then((r) => {
        location.reload();
    }).catch((e) => {
        console.log(`Error: ${e}`);
    });
}