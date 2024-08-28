const { Client } = require("@elastic/elasticsearch");
const client = new Client({
  node: "https://localhost:9200",
  auth: {
    // TODO: Use .env file to store sensitive information
    username: "elastic", // This is the default username for Elasticsearch (NOT RECOMMENDED TO CHANGE)
    password: "nr6ihcnb4pRq2+ePugDL", // Replace with your actual password  DONE
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Sample data to index
const users = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    age: 29,
    address: "123 Maple St, Springfield, USA",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    age: 35,
    address: "456 Oak St, Metropolis, USA",
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    age: 42,
    address: "789 Pine St, Gotham, USA",
  },
];

// Index documents function
async function indexDocuments() {
  // SOLVE HERE
}

indexDocuments();
