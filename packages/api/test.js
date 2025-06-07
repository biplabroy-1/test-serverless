import { sukaa } from "../config/utils"

export function main() {
    const name = "Test Item";
    const slug = sukaa(name);
    console.log(`Slug for "${name}": ${slug}`);
    return {
      headers: {
        'Set-Cookie': 'UserID=Sammy; Max-Age=3600; Version=',
        'Content-Type': 'text/html'
      },
      statusCode: 200,
      body: `<h1>Hello, ${name}!</h1>
      <p>Your UserID is ${slug}.</p>
      `
    }
  }