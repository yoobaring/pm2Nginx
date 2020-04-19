module.exports = {
  apps : [{
    name: 'hello',
    script: 'index.js',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      PORT:3000,
      NODE_ENV: 'development'
    }
  }],
};
