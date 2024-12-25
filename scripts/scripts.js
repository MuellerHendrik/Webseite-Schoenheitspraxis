// Hamburger-Menü
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("nav-active");
});

// Formularvalidierung (Kontaktformular)
document.getElementById("contact-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Bitte füllen Sie alle Felder aus.");
        return;
    }

    alert("Vielen Dank für Ihre Nachricht!");
    document.getElementById("contact-form").reset();
});

// Newsletter-Anmeldung
document.getElementById("newsletter-form").addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Vielen Dank für Ihre Anmeldung!");
    document.getElementById("newsletter-form").reset();
});

// Lightbox-Funktion für Galerie
const lightboxItems = document.querySelectorAll(".lightbox-item");
lightboxItems.forEach((item) => {
    item.addEventListener("click", () => {
        const lightboxContainer = document.createElement("div");
        lightboxContainer.classList.add("lightbox-container");

        const img = document.createElement("img");
        img.src = item.src;
        img.alt = item.alt;

        lightboxContainer.appendChild(img);

        // Schließen der Lightbox durch Klick
        lightboxContainer.addEventListener("click", () => {
            document.body.removeChild(lightboxContainer);
        });

        document.body.appendChild(lightboxContainer);
    });
});

// Google Maps Integration
function initMap() {
    const praxisLocation = { lat: 51.1657, lng: 10.4515 }; // Beispielkoordinaten
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: praxisLocation,
    });

    const marker = new google.maps.Marker({
        position: praxisLocation,
        map: map,
        title: "Schönheitspraxis",
    });
}

window.onload = () => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDp2_N-f4c8eIv73jHKDFPcM_xxKvUX220&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
};
