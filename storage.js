

document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contactForm");
  const savedContactsDiv = document.getElementById("savedContacts");
  const clearContactsButton = document.getElementById("clearContacts");
  // Cargar contactos guardados desde local storage
  function loadSavedContacts() {
    savedContactsDiv.innerHTML = "";
    const savedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    savedContacts.forEach(contact => {
      const contactDiv = document.createElement("div");
      contactDiv.textContent = `${contact.name} - ${contact.email} - ${contact.message}`;
      savedContactsDiv.appendChild(contactDiv);
    });
  }
  // Guardar contacto en local storage
  function saveContact(contact) {
    const savedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    savedContacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(savedContacts));
  }
  // Manejar el envío del formulario
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const contact = { name, email, message };
    saveContact(contact);
    loadSavedContacts();
    // Reset form fields
    contactForm.reset();
  });  
  // Limpiar todos los contactos del locas storage
  clearContactsButton.addEventListener("click", function() {
    localStorage.removeItem("contacts");
    savedContactsDiv.innerHTML = "";
  });
  // Carga inicial de contactos guardados
  loadSavedContacts();
});