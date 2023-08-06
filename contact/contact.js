document.getElementById('hamburguer-anchor').addEventListener('click', function() {
    let navHeader = document.getElementById('nav-header');
    if (navHeader.style.display === 'flex') {
        navHeader.style.display = 'none';
    } else {
        navHeader.style.display = 'flex';
    }
    }
);