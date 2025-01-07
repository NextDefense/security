import nltk

from nltk.chat.util import Chat, reflections

# Define a list of patterns and responses
pairs = [
    [
        r"how do i request a test|test|request",
        ["Go to https://therman5.github.io/NextDefense/products.html then fill out the form,\n a team member will be with you shortly."]
    ],
    [
        r"hi|hello|hey",
        ["Welcome to NextDefense, let me know if I can be of assistance."]
    ],
    [
        r"how much does it cost|what are the different prices|cost|prices",
        ["Our prices start at $3,000 for the basic test and go up to $4,000 for the Premium test."
            "To see a full table of prices visit the pricing page: https://therman5.github.io/NextDefense/products.html"
        ]
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

# Create a chatbot instance
chatbot = Chat(pairs, reflections)

# Start the chatbot
print("Welcome to NextDefense, let me know if I can be of assistance.")
chatbot.converse()
