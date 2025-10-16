fetch("header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header-placeholder").innerHTML = data;

        const userString = localStorage.getItem("user");
        if (userString) {
            // alert('User found in localStorage');
            const raw = JSON.parse(userString);

            const user = {
                ...raw,
                dateOfBirth: new Date(raw.dateOfBirth)  // convert string to Date object
            };

            const headerSalutation = document.getElementById('header-logout-user');
            const headerLoginLink = document.getElementById('header-login-link');
            const headerScoresLink = document.getElementById('header-user-scores');
            const adminSiteLink = document.getElementById('header-admin-site');
            headerSalutation.innerHTML = `Logout: ${user.firstName}`;
            headerSalutation.style.display = 'inline';
            headerScoresLink.style.display = 'inline';
            headerLoginLink.style.display = 'none';
            if (user.isAdmin) {
                adminSiteLink.style.display = 'inline';
            } else {
                adminSiteLink.style.display = 'none';
            }
        } else {
            // alert('User NOT found in localStorage');
            const headerSalutation = document.getElementById('header-logout-user');
            const headerLoginLink = document.getElementById('header-login-link');
            const headerScoresLink = document.getElementById('header-user-scores');
            const adminSiteLink = document.getElementById('header-admin-site');
            headerSalutation.style.display = 'none';
            headerScoresLink.style.display = 'none';
            headerLoginLink.style.display = 'inline';
            adminSiteLink.style.display = 'none';
        }

        document.getElementById('header-logout-user').addEventListener('click', () => {
            // alert('Logout clicked');
            localStorage.removeItem('user');
            localStorage.removeItem('scores');
            window.location.href = 'index.html';
        });
});
