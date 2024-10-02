import os
import pyodbc
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Get DB connection information from .env
db_driver = os.getenv('DB_DRIVER')
db_server = os.getenv('DB_SERVER')
db_database = os.getenv('DB_DATABASE')
db_user = os.getenv('DB_USER')
db_password = os.getenv('DB_PASSWORD')

# Function to get a database connection using pyodbc
def get_db_connection():
    connection_string = f"DRIVER={{{db_driver}}};SERVER={db_server};DATABASE={db_database};UID={db_user};PWD={db_password}"
    return pyodbc.connect(connection_string)

# Register a new user
def register_user(username, password, email):
    query = "INSERT INTO users (username, password, email) VALUES (?, ?, ?)"
    execute_query(query, (username, password, email))

# Check login credentials
def login_user(username, password):
    query = "SELECT * FROM users WHERE username = ? AND password = ?"
    return fetch_one(query, (username, password))

# Fetch user by email
def get_user_by_email(email):
    query = "SELECT * FROM users WHERE email = ?"
    return fetch_one(query, (email,))

# Reset user password
def reset_user_password(email, new_password):
    query = "UPDATE users SET password = ? WHERE email = ?"
    execute_query(query, (new_password, email))

# Helper function to execute a query
def execute_query(query, params=None):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(query, params)
    conn.commit()
    cursor.close()
    conn.close()

# Helper function to fetch a single record
def fetch_one(query, params=None):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(query, params)
    result = cursor.fetchone()
    cursor.close()
    conn.close()
    return result