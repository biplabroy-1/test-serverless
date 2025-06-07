# Deploying to DigitalOcean Functions

This guide will walk you through deploying your Mongoose CRUD API to DigitalOcean Functions.

## Prerequisites

1. A DigitalOcean account
2. The `doctl` CLI installed on your machine
3. A MongoDB database (e.g., MongoDB Atlas)

## Steps

### 1. Install the DigitalOcean CLI

Follow the instructions at https://docs.digitalocean.com/reference/doctl/how-to/install/ to install the `doctl` CLI.

### 2. Authenticate with DigitalOcean

```bash
doctl auth init
```

Follow the prompts to authenticate with your DigitalOcean account.

### 3. Create a DigitalOcean App

You can create an app using the DigitalOcean App Platform UI or using the `doctl` CLI:

```bash
doctl apps create --spec project.json
```

Alternatively, you can use the DigitalOcean App Platform UI to create a new app and connect it to your GitHub repository.

### 4. Set Environment Variables

In the DigitalOcean App Platform UI, set the following environment variables:

- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: A secret key for JWT token generation
- `NODE_ENV`: Set to `production`

### 5. Deploy Your App

If you're using the `doctl` CLI, you can deploy your app with:

```bash
doctl apps update YOUR_APP_ID --spec project.json
```

If you've connected your GitHub repository, you can deploy by pushing to your repository.

### 6. Test Your API

Once deployed, you can test your API using the provided URL:

```
https://your-app-name.ondigitalocean.app/api/items
```

## Using the MCP Server for DigitalOcean

You can also use the MCP server to manage your DigitalOcean apps:

```javascript
// List all apps
run_mcp({
  server_name: "mcp.config.usrlocalmcp.digitalocean",
  tool_name: "list_apps",
  args: {
    query: {}
  }
});

// Create a new app
run_mcp({
  server_name: "mcp.config.usrlocalmcp.digitalocean",
  tool_name: "create_app",
  args: {
    header: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: {
      spec: {
        name: "mongoose-crud-api",
        region: "nyc",
        services: [...],
        // Other app spec properties
      }
    }
  }
});
```

## Troubleshooting

### Connection Issues

If you're having trouble connecting to your MongoDB database, make sure:

1. Your MongoDB Atlas cluster allows connections from all IP addresses (0.0.0.0/0)
2. Your connection string is correct
3. The user has the correct permissions

### Deployment Issues

If your deployment fails, check the logs in the DigitalOcean App Platform UI for more information.
