# backend/main.py
from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route('/api/stock/<symbol>')
def get_stock(symbol):
    url = "https://yahoo-finance166.p.rapidapi.com/stock/v2/get-summary"
    querystring = {"symbol": symbol, "region": "US"}
    headers = {
        "x-rapidapi-key": "ec78b91ca5mshcae8d2dd151e616p1fe158jsn7f8475f882c8",
        "x-rapidapi-host": "yahoo-finance166.p.rapidapi.com"
    }

    response = requests.get(url, headers=headers, params=querystring)
    data = response.json()

    return jsonify({
        'symbol': symbol,
        'price': data['price']['regularMarketPrice']['raw'],
        'name': data['price']['longName'],
        'exchange': data['price']['exchangeName']
    })

if __name__ == '__main__':
    app.run(debug=True)
