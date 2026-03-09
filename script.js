document.addEventListener('DOMContentLoaded', () => {
    const locationGrid = document.getElementById('locationGrid');
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('locationModal');
    const modalContent = document.getElementById('modalContent');
    const closeBtn = document.querySelector('.close');

    let currentFilter = 'all';
    let searchTerm = '';

    function getLocationEmoji(type) {
        const emojiMap = {
            district: '🏛️',
            historical: '🏰',
            religious: '🕉️',
            natural: '🌿',
            cultural: '🎭'
        };
        return emojiMap[type] || '🌟';
    }

    function getGoogleMapsUrl(locationName) {
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationName + ', Andhra Pradesh, India')}`;
    }

    function getWikipediaUrl(locationName) {
        return `https://en.wikipedia.org/wiki/${encodeURIComponent(locationName)}`;
    }

    function getMakeMyTripUrl(locationName) {
        return `https://www.makemytrip.com/hotels/hotels-near-${encodeURIComponent(locationName)}-hotels.html`;
    }

    function filterLocations() {
        return locations.filter(location => {
            const matchesSearch = location.name.toLowerCase().includes(searchTerm) ||
                                location.description.toLowerCase().includes(searchTerm);
            const matchesFilter = currentFilter === 'all' || location.type === currentFilter;
            return matchesSearch && matchesFilter;
        });
    }

    function showDistrictDetails(district) {
        const places = famousPlaces[district] || [];
        const foods = famousFoods[district] || [];

        modalContent.innerHTML = `
            <h2 class="modal-title">🏛️ ${district}</h2>
            
            <section class="famous-places">
                <h3>🌟 Famous Places</h3>
                <div class="places-grid">
                    ${places.map(place => `
                        <div class="place-card">
                            <img src="${place.imageUrl}" alt="${place.name}" loading="lazy">
                            <h4>${place.name}</h4>
                            <p>${place.description}</p>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="famous-foods">
                <h3>🍽️ Famous Foods</h3>
                <div class="foods-grid">
                    ${foods.map(food => `
                        <div class="food-card">
                            <img src="${food.imageUrl}" alt="${food.name}" loading="lazy">
                            <h4>${food.name}</h4>
                            <p>${food.description}</p>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
        modal.style.display = 'block';
    }

    function createLocationCard(location) {
        const card = document.createElement('div');
        card.className = 'location-card';
        card.setAttribute('role', 'listitem');
        
        card.innerHTML = `
            <img src="${location.imageUrl}" alt="${location.name}" class="card-image" loading="lazy">
            <div class="card-content">
                <h3 class="card-title">${getLocationEmoji(location.type)} ${location.name}</h3>
                <span class="card-type">${getLocationEmoji(location.type)} ${location.type.charAt(0).toUpperCase() + location.type.slice(1)}</span>
                ${location.district ? `<span class="card-type">🏛️ ${location.district}</span>` : ''}
                <p class="card-description">${location.description}</p>
                <div class="card-actions">
                    <a href="${getWikipediaUrl(location.name)}" target="_blank" rel="noopener noreferrer" class="action-btn learn-more">
                        📚 Learn More
                    </a>
                    <a href="${getGoogleMapsUrl(location.name)}" target="_blank" rel="noopener noreferrer" class="action-btn location">
                        📍 Location
                    </a>
                    <a href="${getMakeMyTripUrl(location.name)}" target="_blank" rel="noopener noreferrer" class="action-btn book-now">
                        🏨 Book Now
                    </a>
                </div>
            </div>
        `;
        
        // Add click event only for the card content, not the buttons
        const cardContent = card.querySelector('.card-content');
        cardContent.addEventListener('click', (e) => {
            // Only show modal if not clicking on action buttons
            if (!e.target.closest('.card-actions')) {
                if (location.type === 'district') {
                    showDistrictDetails(location.name);
                } else {
                    showModal(location);
                }
            }
        });

        // Add hover effect to show preview of famous places and foods
        if (location.type === 'district') {
            const preview = document.createElement('div');
            preview.className = 'district-preview';
            preview.innerHTML = `
                <div class="preview-content">
                    <h4>🌟 Famous Places</h4>
                    <ul>
                        ${(famousPlaces[location.name] || []).map(place => 
                            `<li>${place.name}</li>`
                        ).join('')}
                    </ul>
                    <h4>🍽️ Famous Foods</h4>
                    <ul>
                        ${(famousFoods[location.name] || []).map(food => 
                            `<li>${food.name}</li>`
                        ).join('')}
                    </ul>
                </div>
            `;
            card.appendChild(preview);
        }
        
        return card;
    }

    function showModal(location) {
        modalContent.innerHTML = `
            <img src="${location.imageUrl}" alt="${location.name}" class="modal-image" loading="lazy">
            <h2 class="modal-title">${getLocationEmoji(location.type)} ${location.name}</h2>
            <span class="card-type">${getLocationEmoji(location.type)} ${location.type.charAt(0).toUpperCase() + location.type.slice(1)}</span>
            ${location.district ? `<span class="card-type">🏛️ ${location.district}</span>` : ''}
            <p class="modal-description">${location.description}</p>
            <div class="modal-actions">
                <a href="${getWikipediaUrl(location.name)}" target="_blank" rel="noopener noreferrer" class="action-btn learn-more">
                    📚 Learn More
                </a>
                <a href="${getGoogleMapsUrl(location.name)}" target="_blank" rel="noopener noreferrer" class="action-btn location">
                    📍 Location
                </a>
                <a href="${getMakeMyTripUrl(location.name)}" target="_blank" rel="noopener noreferrer" class="action-btn book-now">
                    🏨 Book Now
                </a>
            </div>
        `;
        modal.style.display = 'block';
    }

    function renderLocations() {
        locationGrid.innerHTML = '';
        const filteredLocations = filterLocations();
        
        if (filteredLocations.length === 0) {
            locationGrid.innerHTML = '<p class="no-results">❌ No locations found matching your criteria.</p>';
            return;
        }

        filteredLocations.forEach(location => {
            locationGrid.appendChild(createLocationCard(location));
        });
    }

    // Event Listeners
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        renderLocations();
    });

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderLocations();
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Keyboard accessibility
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });

    // Initialize the grid
    renderLocations();
});
