-- Example of a subsequent migration SQL command

ALTER TABLE auth_user ADD COLUMN last_login TIMESTAMP WITH TIME ZONE;

-- Add additional changes here
