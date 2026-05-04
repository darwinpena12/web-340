const http = require('http');
const server = require('../src/server');

// TODO: Implement your tests here

describe('Server', () => {

  afterAll(() => {
    server.close();
  });

  // Test for Post route character creation
  test('responds to /create-character POST with query parameters', done => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/create-character?class=Warrior&gender=Male&fact=strong',
      method: 'POST'
    };

    const req = http.request(options, res => {
      let data = '';

      res.on('data', chunk => {
        data += chunk;
      });

      res.on('end', () => {
        expect(data).toBe('Character have been created.');
        done();
      });
    });
    req.end();
  });

// Test for POST route for confirming the character creation

test('respond to /confirm-character POST request', done => {
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/confirm-character',
    method: 'POST'
  };

  const req = http.request(options, res => {
    let data = '';

    res.on('data', chunk => {
      data += chunk;
    });
    res.on('end', () => {
      expect(data).toBe('Character confirmed');
      done();
    });
  });

  req.end();
});


  // Test for GET route for viewing Character
  test('responds to /character GET request', done => {
    http.get('http://localhost:3000/character', res => {
      let data = '';
      res.on('data', chunk => {
        data += chunk;
      });

      res.on('end', () => {
        const parsed = JSON.parse(data);
        expect(parsed.class).toBe('Warrior');
        expect(parsed.gender).toBe('Male');
        expect(parsed.fact).toBe('strong');

        // Confirmation
        expect(typeof parsed.confirmed).toBe('boolean');
        done();
        
      });
    });
  });
});