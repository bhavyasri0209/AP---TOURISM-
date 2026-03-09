# FEATURES-DOCUMENTATION.md

## 1) Search & Filter  
### Description  
Allows users to search for specific tourist attractions or activities based on various criteria, such as location, type, and ratings.  
### Usage Instructions  
1. Navigate to the search bar on the homepage.  
2. Enter the desired criteria (location, type).  
3. Click the search button to view results.  
### API Endpoints  
- `GET /api/search?q={query}`  
### Configuration Details  
- Search enabled by default.  
### Code Example  
```javascript
fetch('/api/search?q=beach')
  .then(response => response.json())
  .then(data => console.log(data));
```  
### Troubleshooting Guide  
- **No results found:** Check search criteria and try again.  

---  

## 2) Reviews & Ratings  
### Description  
Users can leave reviews and ratings for attractions, which helps others make informed decisions.  
### Usage Instructions  
1. Visit an attraction’s page.  
2. Fill in the review form and select a star rating.  
3. Submit the review.  
### API Endpoints  
- `POST /api/reviews`  
### Configuration Details  
- Rating scale from 1 to 5.  
### Code Example  
```javascript
fetch('/api/reviews', {
  method: 'POST',
  body: JSON.stringify({ rating: 5, comment: 'Great place!' })
});
```  
### Troubleshooting Guide  
- **Unable to submit review:** Ensure all fields are filled.  

---  

## 3) Weather Integration  
### Description  
Provides real-time weather updates for selected locations.  
### Usage Instructions  
1. Select a location from the map or search.  
2. View the weather widget displaying current conditions.  
### API Endpoints  
- `GET /api/weather?location={location}`  
### Configuration Details  
- API key required for access.  
### Code Example  
```javascript
fetch('/api/weather?location=Mumbai')
  .then(response => response.json())
  .then(data => console.log(data));
```  
### Troubleshooting Guide  
- **Weather data not showing**: Check network connection.  

---  

## 4) Itinerary Planner  
### Description  
Helps users create and manage personalized travel itineraries.  
### Usage Instructions  
1. Click on ‘Create Itinerary’.  
2. Add planned activities and locations.  
3. Save and share your itinerary.  
### API Endpoints  
- `POST /api/itinerary`  
### Configuration Details  
- User accounts required to save itineraries.  
### Code Example  
```javascript
fetch('/api/itinerary', {
  method: 'POST',
  body: JSON.stringify({ activities: ['Visit Museum', 'Dinner at Restaurant'] })
});
```  
### Troubleshooting Guide  
- **Did not save correctly**: Ensure you are logged in.  

---  

## 5) Booking System  
### Description  
Users can book tickets or reservations for various attractions.  
### Usage Instructions  
1. Select an attraction.  
2. Choose the date and number of tickets.  
3. Complete payment to finalize the booking.  
### API Endpoints  
- `POST /api/bookings`  
### Configuration Details  
- Secure payment gateway integration is required.  
### Code Example  
```javascript
fetch('/api/bookings', {
  method: 'POST',
  body: JSON.stringify({ attractionId: 1, date: '2026-03-10', tickets: 2 })
});
```  
### Troubleshooting Guide  
- **Payment failed**: Check card details and try again.  

---  

## 6) Tourist Tips & Safety Info  
### Description  
Offers essential tips and safety information for tourists.  
### Usage Instructions  
1. Go to the ‘Tips’ section.  
2. Read through various articles and guidelines.  
### API Endpoints  
- `GET /api/tips`  
### Configuration Details  
- Tips curated by tourism experts.  
### Code Example  
```javascript
fetch('/api/tips')
  .then(response => response.json())
  .then(data => console.log(data));
```  
### Troubleshooting Guide  
- **Tips not loading**: Refresh the page.  

---  

## 7) Photo Gallery  
### Description  
Showcases photos from various tourist attractions.  
### Usage Instructions  
1. Navigate to an attraction’s page.  
2. Click on the photo gallery section.  
### API Endpoints  
- `GET /api/photos?attractionId={id}`  
### Configuration Details  
- Images can be uploaded by users.  
### Code Example  
```javascript
fetch('/api/photos?attractionId=1')
  .then(response => response.json())
  .then(data => console.log(data));
```  
### Troubleshooting Guide  
- **Gallery images missing**: Check internet connection.  

---  

## 8) Distance Calculator  
### Description  
Calculates distances between locations.  
### Usage Instructions  
1. Enter the start and end locations.  
2. Click calculate to get the distance.  
### API Endpoints  
- `GET /api/distance?from={start}&to={end}`  
### Configuration Details  
- Uses Google Maps API for calculations.  
### Code Example  
```javascript
fetch('/api/distance?from=New+York&to=Los+Angeles')
  .then(response => response.json())
  .then(data => console.log(data));
```  
### Troubleshooting Guide  
- **Distance not calculating**: Verify location inputs.  

---  

## 9) Favorites/Wishlist  
### Description  
Allows users to save favorite attractions to a wishlist.  
### Usage Instructions  
1. Browse attractions and click the ‘Add to Wishlist’ button.  
2. View your wishlist in your profile.  
### API Endpoints  
- `POST /api/wishlist`  
### Configuration Details  
- Users must be logged in to save items.  
### Code Example  
```javascript
fetch('/api/wishlist', {
  method: 'POST',
  body: JSON.stringify({ attractionId: 1 })
});
```  
### Troubleshooting Guide  
- **Item not saved**: Check for login status.  

---  

## 10) Map Integration  
### Description  
Integrates interactive maps for better navigation.  
### Usage Instructions  
1. Go to the map section in the application.  
2. Pan and zoom to explore different areas.  
### API Endpoints  
- `GET /api/map`  
### Configuration Details  
- Requires Google Maps API key.  
### Code Example  
```javascript
fetch('/api/map')
  .then(response => response.json())
  .then(data => console.log(data));
```  
### Troubleshooting Guide  
- **Map not displaying**: Ensure API key is correctly set.  

---