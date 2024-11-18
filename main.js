window.onload = function () {
    setTimeout(function () {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.display = 'none'; // Loading ekranını gizle
    }, 4000); // 5000 milisaniye = 3 saniye
};

        function filterProducts(category) {
            const products = document.querySelectorAll('.product');
            products.forEach(product => {
                if (category === 'hepsi' || product.classList.contains(category)) {
                    product.classList.add('show');
                } else {
                    product.classList.remove('show');
                }
            });
        }

        function filterByName(query) {
            const products = document.querySelectorAll('.product');
            products.forEach(product => {
                const name = product.getAttribute('data-name').toLowerCase();
                if (name.includes(query.toLowerCase())) {
                    product.classList.add('show');
                } else {
                    product.classList.remove('show');
                }
            });
        }

        function showMap() {
            window.open("https://maps.app.goo.gl/CXGAwCyHihTQcFZN6", "_blank");
        }