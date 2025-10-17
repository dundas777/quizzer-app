//alert('Admin check');
const userString = localStorage.getItem("user");
if (userString) {
    const user = JSON.parse(userString);
    if (!user.isAdmin) {
        alert('Only Admin users can access this page');
        window.location.href = 'index.html';
    }
} else {
    alert('Only Admin users can access this page');
    window.location.href = 'index.html';
}