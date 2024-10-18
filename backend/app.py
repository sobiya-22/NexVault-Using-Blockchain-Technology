from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS
from bson import ObjectId
from werkzeug.security import generate_password_hash

app = Flask(__name__)

# Enable CORS
CORS(app)

# MongoDB local connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/Nexvault"  # Local MongoDB connection

mongo = PyMongo(app)

# Sign Up Route
@app.route('/signup', methods=['POST'])
def signup():
    try:
        data = request.get_json()

        # Check if all required fields are present
        if not all(field in data for field in ['firstName', 'surname', 'email', 'password']):
            return jsonify({"msg": "Missing fields: firstName, surname, email, or password"}), 400

        first_name = data['firstName']
        surname = data['surname']
        email = data['email']
        password = generate_password_hash(data['password'])  # Hash the password

        # Check if the user already exists
        user = mongo.db.users.find_one({'email': email})
        if user:
            return jsonify({"msg": "User already exists"}), 400

        # Create a new user document
        new_user = {
            'firstName': first_name,
            'surname': surname,
            'email': email,
            'password': password,
            'role': None  # No role selected yet
        }

        # Insert the new user into the database
        result = mongo.db.users.insert_one(new_user)
        user_id = str(result.inserted_id)  # Get the inserted user's ID

        return jsonify({"msg": "User registered successfully", "userId": user_id}), 201

    except Exception as e:
        return jsonify({"msg": f"Error: {str(e)}"}), 500

# Set Role Route
@app.route('/set-role/<user_id>', methods=['POST'])
def set_role(user_id):
    try:
        data = request.get_json()

        # Check if 'role' is provided
        if 'role' not in data:
            return jsonify({"msg": "Role is required"}), 400

        role = data['role']

        # Update the user's role in the database
        result = mongo.db.users.update_one(
            {'_id': ObjectId(user_id)},  # Find user by ID
            {'$set': {'role': role}}  # Set the role
        )

        if result.modified_count == 1:
            return jsonify({"msg": "Role set successfully"}), 200
        else:
            return jsonify({"msg": "Failed to set role. User not found or role already set."}), 400

    except Exception as e:
        return jsonify({"msg": f"Error: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)
