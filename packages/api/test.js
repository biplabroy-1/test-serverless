export function main() {
    return {
      headers: {
        'Set-Cookie': 'UserID=Sammy; Max-Age=3600; Version=',
        'Content-Type': 'text/html'
      },
      statusCode: 200,
      body: '<html><body><h3>hello</h3></body></html>'
    }
  }