// Función de logout
function logout() {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('token');
    window.location.href = '../index.html'; // Redirige a la página de inicio de sesión
}

// Función para establecer el correo del usuario
function setUserEmail(email) {
    const userEmailElement = document.getElementById('userEmail');
    if (userEmailElement) {
        // Obtener la parte del correo antes del '@'
        const username = email.split('@')[0];
        userEmailElement.textContent = username;
    }
}

// Recupera el correo del usuario del almacenamiento local
document.addEventListener('DOMContentLoaded', (event) => {
    const userEmail = localStorage.getItem('userEmail');
    $("#navbar-container").load("../assets/partials/navbar.html", function() {
        if (userEmail) {
            setUserEmail(userEmail);
        } else {
            // Si no hay un correo guardado, redirige a la página de inicio de sesión
            window.location.href = '../index.html';
        }
    });
});
