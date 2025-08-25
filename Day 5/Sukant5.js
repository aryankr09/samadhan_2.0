from flask import Flask, jsonify

app = Flask(__name__)

# Sample student data
students = [
    {"id": 1, "name": "Sukant kumar", "course": "B.Tech CSE"},
    {"id": 2, "name": "Aryan kumar", "course": "B.Tech CSE"},
    {"id": 3, "name": "Bhanu pratap lodhi", "course": "B.Tech CSE"}
]

@app.route("/students", methods=["GET"])
def get_students():
    return jsonify(students)

if __name__ == "__main__":
    app.run(debug=True, port=3000)
