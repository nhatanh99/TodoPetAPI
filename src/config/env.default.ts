export default () => ({
  port: process.env.PORT || '',
  apiPrefix: process.env.API_PREFIX || '',
  DATABASE_URL: 'postgresql://postgres:root@localhost:5432/task',
});
// postgresql://postgres:root@localhost:5432/
