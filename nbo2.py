
from flask import Flask, request

app = Flask(__name__)
import json
import pandas as pd


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
    output = ""
   

    def __init__(self, package):
        self.output = package

    def toJSON(self):
        jsonValue = {
            "id": self.id,
            "output": self.output,
         
        }
        return json.loads(json.dumps(jsonValue))


@app.route('/binary-bomber-service/nbo2', methods=['GET', 'POST'])
def handleCustomer():
    if request.method == 'GET':
        package = request.args.get('package')
        df = readCSV()
        index = findCustomerByPackages(df, package)
        print(index)
        customer = Customer(package)
        response = ESResponse(0, None, "")
        if (index != -1):
            customer.id = str(df["id"].get(index))

            customer.output = str(df["output"].get(index))
           
            response = ESResponse(1, customer.toJSON(), "Customer Found")
        else:
            response = ESResponse(-1, None, "Customer not Found")
        return response.toJSON()


def readCSV():
    return pd.read_csv('datast.csv')


def findCustomerByPackages(df, package):
    index = -1
    outputList = list(df["output"].tolist())
    for i in range(len(outputList)):
        if (str(outputList[i]).strip() == package):
            index = i
            break
    return index


if __name__ == '__main__':
    app.run(host="localhost", port=9901)  



















