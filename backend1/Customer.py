import json

class Customer:
    customerId = ""
    name = ""
    age = ""
    gender = ""

    def __init__(self, customerId, name, age, gender):
        self.customerId = customerId
        self.name = name
        self.age = age
        self.gender = gender

    def toJSON(self):
        jsonValue = {
            "customerId": self.customerId,
            "name": self.name,
            "age": self.age,
            "gender": self.gender
        }
        return json.loads(json.dumps(jsonValue))