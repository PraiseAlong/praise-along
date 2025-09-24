-- Create a test table for the praisealong application
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insert some test data
INSERT INTO users (username, email) VALUES
    ('testuser1', 'test1@example.com'),
    ('testuser2', 'test2@example.com'),
    ('testuser3', 'test3@example.com')
ON CONFLICT (username) DO NOTHING;

-- Create an index for faster lookups
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Display table info
\d+ users;
SELECT COUNT(*) as user_count FROM users;