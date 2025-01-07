from flask import Flask, render_template, request, jsonify
from nltk.chat.util import Chat, reflections

app = Flask(__name__)

# Define your chatbot pairs and reflections
pairs = [
    [
        r"how do i request a test|test|request",
        ["Go to https://therman5.github.io/NextDefense/products.html then fill out the form,\n"
         "a team member will be with you shortly."]
    ],
    [
        r"hi|hello|hey",
        ["Welcome to NextDefense, let me know if I can be of assistance."]
    ],
    [
        r"how much does it cost|what are the different prices|cost|prices",
        ["Our prices start at $3,000 for the basic test and go up to $4,000 for the Premium test.\n"
         "To see a full table of prices visit the pricing page: https://therman5.github.io/NextDefense/products.html"]
    ],
    [
        r"what services do you offer|services|offer|what services are offered",
        ["All our plans come with penetration testing and network scans,\n"
         "The extent of those depends on the level you choose.\n"
         "You will also get more extensive reports, and fixes with the higher tier options."]
    ],
    [
        r"can i speak to a person|how can i contact someone|contact|person|speak",
        ["You can send us an email at nextdefense24@gmail.com and someone will be in contact with you shortly,\n"
         "or connect with us on instagram @next.defense"]
    ],
    [
        r"",
        ["I'm sorry I don't know how to best answer that.\n"
         "Can you try asking it a different way?"]
    ]
]

chatbot = Chat(pairs, reflections)

@app.route('/')
def home():
    return render_template("https://therman5.github.io/NextDefense/index.html")

@app.route('/get', methods=['POST'])
def get_response():
    user_input = request.json.get('msg')
    response = chatbot.respond(user_input)
    return jsonify(response)

if __name__ == "__main__":
    app.run(debug=True)
