// Patient Registration Handler
document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('patientRegistrationForm');

    if (registrationForm) {
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Capture Data
            const patientData = {
                id: Date.now(),
                name: document.getElementById('patientName').value,
                email: document.getElementById('patientEmail').value,
                phone: document.getElementById('patientPhone').value,
                gender: document.getElementById('patientGender').value,
                history: document.getElementById('medicalHistory').value,
                regDate: new Date().toLocaleDateString()
            };

            // Save to LocalStorage (Simulating a Database)
            let patients = JSON.parse(localStorage.getItem('patients')) || [];
            patients.push(patientData);
            localStorage.setItem('patients', JSON.stringify(patients));

            alert('Registration Successful! Redirecting to Dashboard...');
            window.location.href = 'dashboard.html';
        });
    }
});

// Function to check login status (Shared across pages)
function checkAuth() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user && !window.location.href.includes('login.html')) {
        // Redirect to login if not logged in
        // window.location.href = 'login.html'; 
    }
}