
import gradio as gr
from gradio_keyboardtextboxcomponent import KeyboardTextBoxComponent
import boto3
import json

__TableName__ = "innovation-gradio-claude-example"
Primary_Column_Name = "id"
Primary_Key = "1"
columns = ["message_gum", "message_spa"]

client = boto3.client('dynamodb', region_name='us-east-1')
DB = boto3.resource('dynamodb', region_name='us-east-1')
table = DB.Table(__TableName__)

# Get data
def get_data():
    response = table.get_item(
                Key={
                    Primary_Column_Name:Primary_Key
                }
            )
    return json.loads(str(response["Item"]).replace("'", '"').encode('utf-8'))

# print(get_data()["message_gum"])
example = KeyboardTextBoxComponent().example_inputs()

demo = gr.Interface(
    lambda x:x,
    KeyboardTextBoxComponent(value=get_data()["message_gum"]),  # interactive version of your component
    KeyboardTextBoxComponent(),  # static version of your component
    examples=[[example]],  # uncomment this line to view the "example version" of your component
)

demo.launch()
