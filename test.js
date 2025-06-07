// Simple test script to verify API functionality
import fetch from 'node-fetch';

// Replace with your actual API URL
const API_URL = 'http://localhost:8080';

// Test user registration
async function testUserRegistration() {
  try {
    const response = await fetch(`${API_URL}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123',
      }),
    });

    const data = await response.json();
    console.log('User Registration Test:', data);
    return data.success ? data.data.token : null;
  } catch (error) {
    console.error('User Registration Test Error:', error);
    return null;
  }
}

// Test user login
async function testUserLogin() {
  try {
    const response = await fetch(`${API_URL}/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@example.com',
        password: 'password123',
      }),
    });

    const data = await response.json();
    console.log('User Login Test:', data);
    return data.success ? data.data.token : null;
  } catch (error) {
    console.error('User Login Test Error:', error);
    return null;
  }
}

// Test creating an item
async function testCreateItem(token) {
  try {
    const response = await fetch(`${API_URL}/api/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: 'Test Item',
        description: 'This is a test item',
        category: 'electronics',
        price: 99.99,
        quantity: 10,
      }),
    });

    const data = await response.json();
    console.log('Create Item Test:', data);
    return data.success ? data.data._id : null;
  } catch (error) {
    console.error('Create Item Test Error:', error);
    return null;
  }
}

// Test getting all items
async function testGetItems() {
  try {
    const response = await fetch(`${API_URL}/api/items`);
    const data = await response.json();
    console.log('Get Items Test:', data);
    return data;
  } catch (error) {
    console.error('Get Items Test Error:', error);
    return null;
  }
}

// Test getting a single item
async function testGetItem(itemId) {
  try {
    const response = await fetch(`${API_URL}/api/items/${itemId}`);
    const data = await response.json();
    console.log('Get Item Test:', data);
    return data;
  } catch (error) {
    console.error('Get Item Test Error:', error);
    return null;
  }
}

// Test updating an item
async function testUpdateItem(itemId, token) {
  try {
    const response = await fetch(`${API_URL}/api/items/${itemId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: 'Updated Test Item',
        price: 149.99,
      }),
    });

    const data = await response.json();
    console.log('Update Item Test:', data);
    return data;
  } catch (error) {
    console.error('Update Item Test Error:', error);
    return null;
  }
}

// Test deleting an item
async function testDeleteItem(itemId, token) {
  try {
    const response = await fetch(`${API_URL}/api/items/${itemId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();
    console.log('Delete Item Test:', data);
    return data;
  } catch (error) {
    console.error('Delete Item Test Error:', error);
    return null;
  }
}

// Run all tests
async function runTests() {
  console.log('Starting API tests...');
  
  // Register a user
  let token = await testUserRegistration();
  
  // If registration fails, try logging in
  if (!token) {
    token = await testUserLogin();
  }
  
  if (!token) {
    console.error('Authentication failed. Cannot proceed with tests.');
    return;
  }
  
  // Create an item
  const itemId = await testCreateItem(token);
  
  if (!itemId) {
    console.error('Item creation failed. Cannot proceed with tests.');
    return;
  }
  
  // Get all items
  await testGetItems();
  
  // Get a single item
  await testGetItem(itemId);
  
  // Update an item
  await testUpdateItem(itemId, token);
  
  // Delete an item
  await testDeleteItem(itemId, token);
  
  console.log('All tests completed!');
}

runTests();