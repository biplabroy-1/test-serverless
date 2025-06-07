# Mongoose CRUD API for DigitalOcean Functions

A simple CRUD API built with Node.js, Express, and Mongoose, designed to be deployed as a DigitalOcean Function.

## Setup

1. Clone this repository
2. Install dependencies: `npm install`
3. Create a `.env` file with your MongoDB connection string (see `.env.example`)
4. Run locally: `npm start`

## API Endpoints

- `GET /api/items` - Get all items
- `GET /api/items/:id` - Get a specific item
- `POST /api/items` - Create a new item
- `PUT /api/items/:id` - Update an item
- `DELETE /api/items/:id` - Delete an item

## Deployment to DigitalOcean Functions

1. Install the DigitalOcean CLI: `doctl`
2. Authenticate with your DigitalOcean account: `doctl auth init`
3. Connect to your App Platform project: `doctl apps list`
4. Deploy the function: `doctl serverless deploy .`

## Environment Variables

- `MONGODB_URI` - Your MongoDB connection string
- `PORT` - Port for local development (default: 8080)

## Project Structure

- `models/` - Mongoose models
- `api/` - API routes and controllers
- `config/` - Configuration files
- `index.js` - Main entry point for local development
