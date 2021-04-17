from flask import Flask, request
from flask_cors import CORS

import json
import pandas as pd

app = Flask(__name__)
CORS(app)

class ESResponse:
    status = 0
    data = False
    message = ""

    def __init__(self, status, data, message):
        self.status = status
        self.data = data
        self.message = message

    def toJSON(self):
        jsonValue = {
            "status": self.status,
            "data": self.data,
            "message": self.message
        }
        return json.loads(json.dumps(jsonValue))


class Customer:
    id = ""
    package = ""
    uID = ""

    def __init__(self, customerId):
        self.id = customerId

    def toJSON(self):
        jsonValue = {
            "id": self.id,
            "package": self.package,
            "uID": self.uID,
            
        }
        return json.loads(json.dumps(jsonValue))


@app.route('/binary-bomber-service/nbo1', methods=['GET', 'POST'])
def handleCustomer():
    if request.method == 'GET':
        customerId = request.args.get('customerId')
        df = readCSV()
        index = findCustomerById(df, customerId)
        print(index)
        customer = Customer(customerId)
        response = ESResponse(0, None, "")
        if (index != -1):
            customer.package = str(df["package"].get(index))
            customer.uID = str(df["uID"].get(index))
      
    
            response = ESResponse(1, customer.toJSON(), "Customer Found")
        else:
            response = ESResponse(-1, None, "Customer not Found")
        return response.toJSON()


def readCSV():
    return pd.read_csv('test_1.csv')


def findCustomerById(df, customerId):
    index = -1
    idList = list(df["id"].tolist())
    for i in range(len(idList)):
        if (str(idList[i]).strip() == customerId):
            index = i
            break
    return index

if __name__ == '__main__':
    app.run(host="localhost", port=9900)  # Enter your server IP here