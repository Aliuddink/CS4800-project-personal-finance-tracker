from flask import Flask, request, jsonify
from flask_cors import CORS
from db_connector import test_db_connection
import db_connector
import send_email

app = Flask(__name__)
CORS(app)

# Configure email service
send_email.configure_mail(app)

# User registration
@app.route('/register', methods=['POST'])
def register_user():
    data = request.json
    username = data['username']
    email = data['email']
    password = data['password']
    confirm_password = data['confirm_password']

    if password != confirm_password:
        return jsonify({'message': 'Passwords do not match'}), 400

    db_connector.register_user(username, password, email)
    return jsonify({'message': 'User registered successfully'}), 201

# User login
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

# Request password reset
@app.route('/request-reset', methods=['POST'])
def request_reset():
    data = request.json
    email = data['email']

    user = db_connector.get_user_by_email(email)
    if user:
        send_email.send_reset_email(app, email)
        return jsonify({'message': 'Password reset email sent'}), 200
    else:
        return jsonify({'message': 'Email not found'}), 404

# Reset password
@app.route('/reset-password', methods=['POST'])
def reset_password():
    data = request.json
    email = data['email']
    new_password = data['new_password']

    db_connector.reset_user_password(email, new_password)
    return jsonify({'message': 'Password updated successfully'}), 200

# Fetch all expenses for a user
@app.route('/api/expenses/<int:user_id>', methods=['GET'])
def get_expenses(user_id):
    conn = db_connector.get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM expenses WHERE user_id = %s", (user_id,))
    expenses = cursor.fetchall()
    conn.close()
    
    if not expenses:
        return jsonify({'message': 'No expenses found for this user'}), 404

    return jsonify([
        {
            "id": row[0],
            "user_id": row[1],
            "category_id": row[2],
            "amount": row[3],
            "description": row[4],
            "date": row[5]
        } for row in expenses
    ])

# Fetch all savings for a user
@app.route('/api/savings/<int:user_id>', methods=['GET'])
def get_savings(user_id):
    conn = db_connector.get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM savings WHERE user_id = %s", (user_id,))
    savings = cursor.fetchall()
    conn.close()

    if not savings:
        return jsonify({'message': 'No savings found for this user'}), 404

    return jsonify([
        {
            "id": row[0],
            "user_id": row[1],
            "goal_id": row[2],
            "amount": row[3],
            "date": row[4]
        } for row in savings
    ])

# Add new expense
@app.route('/api/expenses', methods=['POST'])
def add_expense():
    data = request.json
    user_id = data['user_id']
    category_id = data['category_id']
    amount = data['amount']
    description = data['description']

    conn = db_connector.get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO expenses (user_id, category_id, amount, description) VALUES (%s, %s, %s, %s) RETURNING id",
        (user_id, category_id, amount, description)
    )
    expense_id = cursor.fetchone()[0]
    conn.commit()
    conn.close()

    return jsonify({"message": "Expense added successfully", "expense_id": expense_id}), 201

# Update an expense
@app.route('/api/expenses/<int:expense_id>', methods=['PUT'])
def update_expense(expense_id):
    data = request.json
    category_id = data.get('category_id')
    amount = data.get('amount')
    description = data.get('description')

    conn = db_connector.get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "UPDATE expenses SET category_id = %s, amount = %s, description = %s WHERE id = %s",
        (category_id, amount, description, expense_id)
    )
    conn.commit()
    conn.close()

    return jsonify({"message": "Expense updated successfully"}), 200

# Delete an expense
@app.route('/api/expenses/<int:expense_id>', methods=['DELETE'])
def delete_expense(expense_id):
    conn = db_connector.get_db_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM expenses WHERE id = %s", (expense_id,))
    conn.commit()
    conn.close()

    return jsonify({"message": "Expense deleted successfully"}), 200

# Fetch all categories
@app.route('/api/categories', methods=['GET'])
def get_categories():
    conn = db_connector.get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM categories")
    categories = cursor.fetchall()
    conn.close()

    return jsonify([{"id": row[0], "name": row[1]} for row in categories])

# Add a new category
@app.route('/api/categories', methods=['POST'])
def add_category():
    data = request.json
    category_name = data.get('name')

    conn = db_connector.get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO categories (name) VALUES (%s) RETURNING id", (category_name,))
    category_id = cursor.fetchone()[0]
    conn.commit()
    conn.close()

    return jsonify({"message": "Category added successfully", "category_id": category_id}), 201

if __name__ == '__main__':
    test_db_connection()
    app.run(debug=True)
