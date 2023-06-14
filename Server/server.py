from flask import Flask, jsonify, request,json, Response
import io
from flask_cors import CORS
from flask_cors import cross_origin
from PIL import Image
import numpy as np
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.models import load_model
import base64
import imghdr
import cv2
import os
import sys
import imghdr
import requests


app = Flask(__name__)
CORS(app,supports_credentials=True)


interpreter1 = tf.lite.Interpreter(model_path="E:/FINAL Prototype/Models/Anthracnose_Q.tflite")
interpreter2 = tf.lite.Interpreter(model_path="E:/FINAL Prototype/Models/StylerEndRot_Q.tflite")

           
@app.route('/')
def index():
    return 'Hello, World!'           
           

@app.route('/predictBoth', methods=['GET','POST'])
def prediction():
    if request.method == 'POST':

        file1 = request.form['file']
        print(file1)
        print("inside check image: 4")
        # image = file.split("base64,")
        image_bytes = base64.b64decode(file1)
        print(image_bytes)

        image_stream = io.BytesIO(image_bytes)
        pil_image = Image.open(image_stream)

        image_np = pil_image.resize((224, 224))
        image_np = np.array(image_np)
        image_np = image_np.astype(np.float32) / 255.0
        img = np.expand_dims(image_np, axis=0)

        prediction1 = Anthracnose(img)
        prediction2 = Styler(img)
        print(prediction1)
        print(prediction2)

        # return json.dumps(prediction1 +" "+ prediction2 )
        if prediction1 == "Anthracnose":

            pred1 =  json.dumps(prediction1 + " Solution: Apply fungicide (Daconil 3:1) twice a week | Apply cinnamon oil (5:1/oil(ml)): 1litre of water | Application time after 4 pm " 
                        )
        else:
            pred1 =  json.dumps(prediction1)

        if prediction2 == "Styler End Rot":

            pred2 = json.dumps(prediction2 + " Solution: Apply fungicide (Daconil 3:1) twice a week | Apply cinnamon oil (5:1/oil(ml)): 1litre of water | Application time after 4 pm " 
                        )
        else:
            pred2 = json.dumps(prediction2)

        return json.dumps(pred1 + "\n" + "\n" + pred2)          
                        

@app.route('/predictAnth', methods=['GET','POST'])
def predictionA():
    if request.method == 'POST':

        file1 = request.form['file']
        print(file1)
        print("inside check image: 4")
        # image = file.split("base64,")
        image_bytes = base64.b64decode(file1)
        print(image_bytes)

        image_stream = io.BytesIO(image_bytes)
        pil_image = Image.open(image_stream)

        image_np = pil_image.resize((224, 224))
        image_np = np.array(image_np)
        image_np = image_np.astype(np.float32) / 255.0
        img = np.expand_dims(image_np, axis=0)

        prediction1 = Anthracnose(img)

        if prediction1 == "Anthracnose":

            return json.dumps(prediction1 +
                          "\n"+ "\n" + " Solution: Apply fungicide (Daconil 3:1) twice a week | Apply cinnamon oil (5:1/oil(ml)): 1litre of water | Application time after 4 pm " 
                        )
        else:
            return json.dumps(prediction1) 


@app.route('/predictSty', methods=['GET','POST'])
def predictionS():
    if request.method == 'POST':

        file1 = request.form['file']
        print(file1)
        print("inside check image: 4")
        # image = file.split("base64,")
        image_bytes = base64.b64decode(file1)
        print(image_bytes)

        image_stream = io.BytesIO(image_bytes)
        pil_image = Image.open(image_stream)

        image_np = pil_image.resize((224, 224))
        image_np = np.array(image_np)
        image_np = image_np.astype(np.float32) / 255.0
        img = np.expand_dims(image_np, axis=0)

        
        prediction2 = Styler(img)

        if prediction2 == "Styler End Rot":

            return json.dumps(prediction2 +
                          "\n"+ "\n" + " Solution: Apply fungicide (Daconil 3:1) twice a week | Apply cinnamon oil (5:1/oil(ml)): 1litre of water | Application time after 4 pm " 
                        )
        else:
             return json.dumps(prediction2)

def Anthracnose(img):
        
        interpreter1.allocate_tensors()

        # Get input and output tensors
        input_details = interpreter1.get_input_details()
        output_details = interpreter1.get_output_details()

        interpreter1.set_tensor(input_details[0]['index'], img)

        # Run model
        interpreter1.invoke()

        # Get the output tensor and convert to probabilities
        output_data = interpreter1.get_tensor(output_details[0]['index'])

        decimals = -int(np.floor(np.log10(np.abs(output_data))))
        arr_rounded = np.around(output_data, decimals=decimals)
        print(arr_rounded)

        str_out_data= np.array2string(output_data, precision=0)
        print(str_out_data[0][0])
        arr_str = str_out_data.strip('[]')
        print(arr_str)
        if arr_str == "1.":
            return "Healthy"
        else:
            return "Anthracnose"
        
        
def Styler(img):
        
        interpreter2.allocate_tensors()

        # Get input and output tensors
        input_details = interpreter2.get_input_details()
        output_details = interpreter2.get_output_details()

        interpreter2.set_tensor(input_details[0]['index'], img)

        # Run model
        interpreter2.invoke()

        # Get the output tensor and convert to probabilities
        output_data = interpreter2.get_tensor(output_details[0]['index'])
        decimals = -int(np.floor(np.log10(np.abs(output_data))))
        arr_rounded = np.around(output_data, decimals=decimals)
        print(arr_rounded)

        str_out_data= np.array2string(output_data, precision=0)
        print(str_out_data[0][0])
        arr_str = str_out_data.strip('[]')
        print(arr_str)
        if arr_str == "1.":
            return "Healthy"
        else:
            return "Styler End Rot"        

    
if __name__ == '__main__':
    app.run(host='172.27.25.165',port=5000)
    # CORS(app,supports_credentials=True)
    # app.run(debug=True)