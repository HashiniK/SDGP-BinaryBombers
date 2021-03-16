from flask import Flask, request
app = Flask(__name__)
from flask import jsonify
import pandas as pd

@app.route('/binary-bomber-service/sampleData/id', methods = ['GET', 'POST'])
def pGender():
    if request.method == 'GET':
        df = readCSV()
        return (df['id'].unique())

def readCSV():
    return pd.read_csv('SampleData-Mobitel.csv')

if __name__ == '__main__':
    app.run(host="localhost", port= 9000) #Enter your server IP here