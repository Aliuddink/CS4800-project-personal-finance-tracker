from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from db_connector import test_db_connection 
import db_connector
import send_email

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Configure email service
send_email.configure_mail(app)

# Route to register a new user
@app.route('/register', methods=['POST'])
def register_user():
    data = request.json
    username = data['username']
    email = data['email']
    password = data['password']
    confirm_password = data['confirm_password']

    # Check if password and confirm_password match
    if password != confirm_password:
        return jsonify({'message': 'Passwords do not match'}), 400

    # Register the user if passwords match
    db_connector.register_user(username, password, email)
    return jsonify({'message': 'User registered successfully'}), 201

# Route to check login
@app.route('/login', methods=['POST'])
def login_user():
    data = request.json
    username = data['username']
    password = data['password']

    user = db_connector.login_user(username, password)

    if user:
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'message': 'Invalid credentials'}), 401

# Route to request password reset
@app.route('/request-reset', methods=['POST'])
def request_reset():
    data = request.json
    email = data['email']

    user = db_connector.get_user_by_email(email)

    if user:
        # Send reset email using the send_email module
        send_email.send_reset_email(app, email)
        return jsonify({'message': 'Password reset email sent'}), 200
    else:
        return jsonify({'message': 'Email not found'}), 404

# Route to reset password
@app.route('/reset-password', methods=['POST'])
def reset_password():
    data = request.json
    email = data['email']
    new_password = data['new_password']

    db_connector.reset_user_password(email, new_password)
    return jsonify({'message': 'Password updated successfully'}), 200

if __name__ == '__main__':
    test_db_connection()
    app.run(debug=True)
