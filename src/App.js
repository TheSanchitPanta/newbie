import React from 'react';
import './index.css'; 

function App() {
  return (
    <body>
      <div id="navbar">
        <div id="top">
          <h1>SahaYatri.com</h1>
          <div>
            <a className="liner" href="">List your property</a>
            <button id="Register">Register</button>
            <button id="signin">Sign in</button>
          </div>
        </div>
        <div id="stay">
          <a>
            <img src="https://th.bing.com/th/id/OIP.ymDpf62hm6huwQAhvIQ8rQHaHa?pid=ImgDet&w=221&h=221&c=7&dpr=1.25" alt="" />
            <p>Hotels</p>
          </a>
          <a>
            <img src="https://th.bing.com/th/id/OIP.U_m-OU2SDVmx2YWndf5zNwHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="" />
            <p>Flight Tickets</p>
          </a>
          <a>
            <img src="https://image.similarpng.com/very-thumbnail/2021/07/Flat-design-restaurant-logo-on-transparent-background-PNG.png" alt="" />
            <p>Restaurant</p>
          </a>
          <a>
            <img src="https://image.shutterstock.com/image-vector/car-silhouette-260nw-408492268.jpg" alt="" />
            <p>Car/Bus Rentals</p>
          </a>
        
          
        </div>
        <div id="findtxt">
          <h1>Discover Your Ideal Accommodation</h1>
          <h4>Hunt for Great Deals on Hotels, Tickets, and More...</h4>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              <td><input className="Place" type="text" placeholder="Where are you going?" /></td>
              <td>
              <input type="date" className="date" placeholder="Check-in" />
                <input type="date" className="date" placeholder="Check-out" />
</td>
              <td>
                <input className="available" type="number" placeholder="Adult" />
                <input className="available" type="number" placeholder="Children" />
                <input className="available" type="number" placeholder="Room" />
              </td>
              <td>
                <button className="search">Search</button>
              </td>
            </th>
          </tr>
        </thead>
      </table>
      <div id="trwork">
        <input type="checkbox" />
        <p>I'm traveling for work</p>
      </div>
      
      <div id="discount">
        <img src="https://i.natgeofe.com/n/506bcd08-37e0-4506-b4cc-328b028cdd8c/NationalGeographic_2683370_square.jpg" alt="" />
        <div>
          <h3>Get Free Flight Ticket on Booking</h3>
          <p>The Best Hotel deals at the best price with free flight bookings</p>
          <button>Explore Deals</button>
        </div>
      </div>
  
      <div id="explorenepal">
  <h2>Explore Nepal</h2>
  <p>These popular destinations have a lot to offer</p>
  <div>
    <div>
      <img src="NEW_IMAGE_URL_1" alt="" />
      <h3>Chitwan NP</h3>
      <p>7 properties</p>
    </div>
    <div>
      <img src="NEW_IMAGE_URL_2" alt="" />
      <h3>Kathmandu</h3>
      <p>544 properties</p>
    </div>
    <div>
      <img src="NEW_IMAGE_URL_3" alt="" />
      <h3>Ilam</h3>
      <p>27 properties</p>
    </div>
    <div>
      <img src="NEW_IMAGE_URL_4" alt="" />
      <h3>Rara</h3>
      <p>18 properties</p>
    </div>
    <div>
      <img src="NEW_IMAGE_URL_5" alt="" />
      <h3>Nagarkot</h3>
      <p>2 properties</p>
    </div>
    <div>
      <img src="NEW_IMAGE_URL_6" alt="" />
      <h3>Bhaktapur</h3>
      <p>19 properties</p>
    </div>
  </div>
</div>
<div id="largeimg">
  <div>
    <h1>Ilam<img src="NEW_FLAG_IMAGE_URL" alt="" /></h1>
    <p>2 properties</p>
  </div>
  <div>
    <h1>Nagarkot <img src="NEW_FLAG_IMAGE_URL" alt="" /></h1>
    <p>2 properties</p>
    <div></div>
  </div>
</div>
<div id="largeimg2">
  <div>
    <h1>Rara <img src="NEW_FLAG_IMAGE_URL" alt="" /></h1>
    <p>1 properties</p>
  </div>
  <div>
    <h1>Butwal<img src="NEW_FLAG_IMAGE_URL" alt="" /></h1>
    <p>12 properties</p>
  </div>
  <div>
    <h1>Gorkha <img src="NEW_FLAG_IMAGE_URL" alt="" /></h1>
    <p>82 properties</p>
  </div>
</div>
<div id="browsepro">
  <h1>Browse by property type</h1>
  <div>
    <div>
      <img src="NEW_IMAGE_URL_7" alt="" />
      <h3>Hotels</h3>
      <p>876 hotels</p>
    </div>
    <div>
      <img src="NEW_IMAGE_URL_8" alt="" />
      <h3>Apartments</h3>
      <p>89 Apartments</p>
    </div>
    <div>
      <img src="NEW_IMAGE_URL_9" alt="" />
      <h3>Resort</h3>
      <p>11 Resort</p>
    </div>
    <div>
      <img src="NEW_IMAGE_URL_10" alt="" />
      <h3>Pack</h3>
      <p>46 Packs</p>
    </div>
  </div>
</div>


<div id="inspiration">
  <h1>Get inspiration for your next trip</h1>
  <div>
    <div id="cont">
      <h2>Hello World</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod efficitur </p>
    </div>
    <div id="cont">
      <h2>Hello World</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod efficitur </p>
    </div>
    <div id="cont">
      <h2>Hello World</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod efficitur </p>
    </div>
  </div>
</div>

<div id="largeimg3">
  <div>
    <h2>The best city and Trek</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod efficitur </p>
  </div>
  <div>
    <h2>Amazing Cultural Destinations</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod efficitur </p>
  </div>
</div>

<div id="connectpepl">
  <h1>Connect with other travelers</h1>
  <div>
    <div>
      <img src="" alt="" />
      <h3>Nepal</h3>
      <p>Travel community</p>
      <p>155,073 travelers</p>
    </div>
    <div>
      <img src="" alt="" />
      <h3>Travel Talk</h3>
      <p>General discussion</p>
      <p>559,436 travelers</p>
    </div>
    <div>
      <img src="" alt="" />
      <h3>More communities</h3>
      <p>View all</p>
      <p>9,894,940 travelers</p>
    </div>
  </div>
</div>


    </body>
  );
}

export default App;
