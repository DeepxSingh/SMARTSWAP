// Show Login Form
function showLogin() {
    document.getElementById('login').style.display = 'block';
    document.getElementById('signup').style.display = 'none';
}

// Show Signup Form
function showSignup() {
    document.getElementById('signup').style.display = 'block';
    document.getElementById('login').style.display = 'none';
}

// Validate Login
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'pooja' && password === 'smart1234') {
        alert('Login successful!');
        showRoleSelection();
    } else {
        alert('Invalid credentials, try again.');
    }
}

// Show Role Selection
function showRoleSelection() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('roleSelection').style.display = 'block';
}

// Choose Role
function chooseRole(role) {
    alert('You chose ' + role);
    showBuyOrSell();
}

// Show Buy or Sell Section
function showBuyOrSell() {
    document.getElementById('roleSelection').style.display = 'none';
    document.getElementById('buyOrSell').style.display = 'block';
}

// Choose Buy or Sell
function chooseAction(action) {
    alert('You chose to ' + action);
    document.getElementById('buyOrSell').style.display = 'none';
    
    if (action === 'buy') {
        document.getElementById('categories').style.display = 'block';
    } else if (action === 'sell') {
        document.getElementById('sellSection').style.display = 'block';
    }
}

// Show Items for Sale
function showItems(category) {
    document.getElementById('categories').style.display = 'none';
    document.getElementById('items').style.display = 'block';

    let itemList = document.getElementById('itemList');
    itemList.innerHTML = ''; // Clear previous items

    if (category === 'Books and Notes') {
        itemList.innerHTML += '<div><img src="https://m.media-amazon.com/images/I/31v-zEFljbL._AC_UF1000,1000_QL80_.jpg"><p>Book 1: Rs. 100 <button onclick="buyItem()">Buy</button></p></div>';
        itemList.innerHTML += '<div><img src="https://sp-uploads.s3.amazonaws.com/uploads%2Fservices%2F3381583%2F20220316113355_6231cb2389d09_mba_hand_written_lecture_notes_full_operations_managementpage0.png"><p>Book 2: Rs. 40 <button onclick="buyItem()">Buy</button></p></div>';
        // Add more items similarly
    } else if (category === 'Furnishings') {
        itemList.innerHTML += '<div><img src="https://www.nilkamalfurniture.com/cdn/shop/files/EMPIRE-SAMPLE-RDB-SRB-rattan-dark-brown_600x.jpg?v=1718878469"><p>Plastic Chair: Rs. 120 <button onclick="buyItem()">Buy</button></p></div>';
	itemList.innerHTML += '<div><img src="https://images.woodenstreet.de/image/data/laptop-tables/lance-laptop-table-revised/honey/updated/new-logo/4.jpg"><p>Bed Table: Rs. 150 <button onclick="buyItem()">Buy</button></p></div>';
        // Add more furnishings
    } else if (category === 'Electronics') {
        itemList.innerHTML += '<div><img src="https://m.media-amazon.com/images/I/61NFP0+6C-L._AC_UF1000,1000_QL80_.jpg"><p>Earbuds: Rs. 600 <button onclick="buyItem()">Buy</button></p></div>';
	itemList.innerHTML += '<div><img src="https://m.media-amazon.com/images/I/61nuz9xa38L._AC_UF1000,1000_QL80_.jpg"><p>LAN Wire: Rs. 70 <button onclick="buyItem()">Buy</button></p></div>';
        // Add more Electronics
    } else if (category === 'Apparel') {
        itemList.innerHTML += '<div><img src="https://theformalclub.in/cdn/shop/files/bs1_5.png?v=1711106772&width=2000"><p>Earbuds: Rs. 60 <button onclick="buyItem()">Buy</button></p></div>';
	itemList.innerHTML += '<div><img src="https://i.etsystatic.com/47678969/r/il/c1f85e/5797178025/il_fullxfull.5797178025_ebi7.jpg"><p>LAN Wire: Rs. 700 <button onclick="buyItem()">Buy</button></p></div>';
        // Add more Apparel
    } else if (category === 'Misc') {
        itemList.innerHTML += '<div><img src="https://m.media-amazon.com/images/I/41yCg38-39L.jpg"><p>Pen stand: Rs. 60 <button onclick="buyItem()">Buy</button></p></div>';
	itemList.innerHTML += '<div><img src="https://www.shaktiplasticinds.com/wp-content/uploads/2023/07/Pen.jpg"><p>Pens: Rs. 14 <button onclick="buyItem()">Buy</button></p></div>';
        // Add more Misc
    } 

    // Add logic for other categories...
}

// Buy Item and Chat
function buyItem() {
    alert('Chat was successful! Redirecting to Google Maps...');
    window.open('https://maps.google.com', '_blank');
}

// Post an Item for Sale
function postItem() {
    const category = document.getElementById('sellCategory').value;
    const image = document.getElementById('sellImage').files[0];
    const price = document.getElementById('sellPrice').value;

    if (image && price) {
        alert('Item posted successfully in ' + category + ' for Rs. ' + price);
        document.getElementById('sellSection').style.display = 'none';
    } else {
        alert('Please upload an image and set a price.');
    }
}

// Subscription Purchase
function buySubscription(type) {
    alert('Subscription purchased: ' + type);
    document.getElementById('subscription').style.display = 'none';
}
