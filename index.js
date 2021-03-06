// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 42.66686, lng: -82.63673 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }