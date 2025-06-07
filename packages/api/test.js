// import { main } from "shared/utils.js"

export function main() {
    const name = "Test Item";
    // const slug = main(name);
    // console.log(`Slug for "${name}": ${slug}`);
    return {
      headers: {
        'Set-Cookie': 'UserID=Sammy; Max-Age=3600; Version=',
        'Content-Type': 'text/html'
      },
      statusCode: 200,
      body: `<h1>Hello, ${name}!</h1>
      <p>Welcome to my website!</p>
      `
    }
  }