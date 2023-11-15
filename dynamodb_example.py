# Using DynamoDb: https://us-east-1.console.aws.amazon.com/dynamodbv2/home?region=us-east-1#item-explorer?operation=SCAN&table=innovation-gradio-claude-example
# TODO: see link for environmemnto on region, apply for credentials: https://stackoverflow.com/questions/40377662/boto3-client-noregionerror-you-must-specify-a-region-error-only-sometimes
# Get the data
import boto3

__TableName__ = "innovation-gradio-claude-example"
Primary_Column_Name = "id"
Primary_Key = "1"
columns = ["message_gum", "message_spa"]

client = boto3.client('dynamodb', region_name='us-east-1')
DB = boto3.resource('dynamodb', region_name='us-east-1')
table = DB.Table(__TableName__)

# Get data
response = table.get_item(
            Key={
                Primary_Column_Name:Primary_Key
            }
        )
print(response["Item"])
