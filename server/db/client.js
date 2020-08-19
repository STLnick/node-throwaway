import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const client = new MongoClient(
  process.env.MONGODB_URI,
  {
    useUnifiedTopology: true,
  },
);

// Close the connection after the server is shut down
(async () => {
  await client.connect();

  // 'CTRL + C' -> 'SIGINT' means signal interrupt i.e. server shut down
  process.on('SIGINT', () => {
    client.close().then(() => {
      console.info('SIGINT received: DB connection is closing');

      // Avoid plugging up ports - ensures all processes are stopped
      process.exit(0);
    });
  });
})();

export default client;
