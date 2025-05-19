# PHP + React User Management App

This project is a full-stack user management application with a PHP backend and a React frontend. It allows you to list, add, update, and delete users stored in a MySQL database.

This project is a tutorial demonstrating how to use PHP and React.js together in a single project.

## Project Structure

```
backend/
  index.php
  api/
    addUser.php
    deleteUser.php
    getUserData.php
    listUsers.php
    updateUser.php
  config/
    db.php
frontend/
  index.html
  package.json
  vite.config.js
  src/
    App.jsx
    main.jsx
    components/
      AddUser.jsx
      DeleteUser.jsx
      ListUser.jsx
      UpdateUser.jsx
```

## Getting Started

### Backend

1. Make sure you have PHP and MySQL installed.
2. Create a MySQL database named `users` and a table:

   ```sql
   CREATE TABLE users (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     email VARCHAR(255) NOT NULL UNIQUE
   );
   ```

3. Update database credentials in [`backend/config/db.php`](backend/config/db.php) if needed.
4. Start the PHP server:

   ```sh
   php -S localhost:8000 -t backend
   ```

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## API Endpoints

- `GET /api/listUsers.php` — List all users
- `GET /api/getUserData.php?id={id}` — Get user by ID
- `POST /api/addUser.php` — Add a new user (JSON: `{ name, email }`)
- `POST /api/updateUser.php` — Update user (JSON: `{ id, name, email }`)
- `DELETE /api/deleteUser.php?id={id}` — Delete user by ID

## Error Handling

- Returns HTTP status code `400` for missing or invalid `id` parameters.
- Returns HTTP status code `404` if the user is not found.
- Returns HTTP status code `500` for database connection or query errors.

## Security Considerations

- Uses input sanitization to prevent SQL injection.
- Only exposes non-sensitive user fields in the response.

## Related Files

- [`backend/config/db.php`](backend/config/db.php): Handles database connection.
- `users` table: Stores user information.

## See Also

- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes with clear messages.
4. Open a pull request describing your changes.

Please ensure your code follows the existing style and includes relevant tests if applicable.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contact

For questions or support, please open an issue on the repository or contact the maintainer:

- **Name:** jon Doe
- **Email:** your.email@example.com

---

Thank you for using the PHP + React User Management App!