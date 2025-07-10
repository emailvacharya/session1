#### 1. Set Up the Database
1. Open PostgreSQL and create a database named `permalist`.
2. Run the SQL commands in the `queries.sql` file to create the `items` table and insert sample data:
```sql
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL
);

INSERT INTO items (title) VALUES ('Buy milk'), ('Finish homework');
```

#### 2. Configure Database Connection
Ensure the database connection details in `index.js` match your PostgreSQL setup:
```js
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "your_password",
  port: 5432,
});
```

#### 3. Start the Application
Run the following command to start the server:
```bash
npm start
```

The application will be accessible at [http://localhost:3002](http://localhost:3002).

---

## Usage
1. Open the application in your browser.
2. Add, edit, or delete items from your shopping list using the intuitive interface.

---

