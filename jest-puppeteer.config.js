module.exports = {
  launch: { 
    headless: "new", 
    slowMo: 30, 
  },
  server:{
    command: 'http-server -p 3000',
    port: 3000,
    launchTimeout: 10000,
    debug: true,
  }
}
