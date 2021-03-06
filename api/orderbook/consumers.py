from channels.generic.websocket import WebsocketConsumer
import json

class ChatConsumer(WebsocketConsumer):
    def connect(self):
        print("Hello world")
        return self.accept()

    def disconnect(self, code):
        pass

    def receive(self, text_data=None, bytes_data=None):
        test_data_json = json.loads(text_data)

        print(text_data)
        message = '运维咖啡吧： ' + test_data_json['message']

        self.send(text_data=json.dumps({
            'message': message
        }))
