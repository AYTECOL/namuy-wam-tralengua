
import gradio as gr
from gradio_keyboardtextboxcomponent import KeyboardTextBoxComponent
import json
import requests
import os
from environs import Env

env = Env()
env.read_env()

API_URL_LIST = env.str('API_URL_LIST')
API_URL_UPDATE = env.str('API_URL_UPDATE')
API_TOKEN = env.str('API_TOKEN')

# Una aplicación con un listado de traducciones pendientes
# presionar sobre una 

selected_translation_index = 0

# translations_response = [
#                 {"id": 0, "text_spa": "The quick brown fox jumps over the lazy dog", "text_gum": "El rápido zorro café salta sobre los perezosos perros"},
#                 {"id": 1, "text_spa": "Build & share delightful machine learning apps", "text_gum": "Construye y comparte encantadoras aplicaciones de aprendizaje de máquina"},
# ]
request = {
    "data": {
        "per_page": 10
    }
}
translations_response = requests.post(API_URL_LIST, json=request, headers={"x-api-key":API_TOKEN})
#json.loads(str(response["Item"]).replace("'", '"').encode('utf-8'))
translations_response=json.loads(json.dumps(translations_response.json()).replace("'", '"').encode('utf-8'))["records"]
translations = list(map(lambda x: [f'{x["gum"]} : {x["es"]}', x["gum"], x["es"], x["translation_timestamp"]], translations_response))

# print(translations)

def translation_chat_fn(translation_index, mod_gum, mod_spa):
    # transform index to id
    # submit to api
    translation = translations[translation_index]
    request = {
        "data": {
            "key": {
                "translation_timestamp": translation[3],
                "is_checked": "False"
            }, 
            "new_values": {
                "is_checked": "True",
                "gum": mod_gum,
                "es": translation[2], #TODO: next version
            }
        }
    }
    response = requests.post(API_URL_UPDATE, json=request, headers={"x-api-key":API_TOKEN})
    response.json()

    return "Traducción corregida" if response.status_code == 200 else "Error del servicio"

# Interface Components
with gr.Blocks() as demo:
    translations_dataset_input = gr.Dataset(components=[gr.Textbox(visible=False)],#, gr.Textbox(visible=False)],

                label="Traducciones",
                samples=translations,
                type="index",
                samples_per_page=10
            )
    gum_keyboard_textbox_input = KeyboardTextBoxComponent(#value=translations[selected_translation_index][0], 
                label="Al Namuy Wam (Namtrik)", 
                #info="Elige las traducciones que desees revisar"
            )
    spa_textbox_input = gr.Textbox(label="Del Español", interactive=False)
    # Interactions
    def assign_trasnlation_id(evt: gr.SelectData):
        # selected_translation_index = evt.index
        return translations[evt.index][1], translations[evt.index][2]
    translations_dataset_input.select(fn=assign_trasnlation_id, outputs=[gum_keyboard_textbox_input,spa_textbox_input])

# Interface
    gr.Interface(
        translation_chat_fn,
        [
            translations_dataset_input,
            spa_textbox_input,
            gum_keyboard_textbox_input, 
        ],
        "text",  
        title="Tralengua",
        description="Elige las traducciones del Namuy Wam (Namtrik/Guambiano) que deseas corregir del Español.",
        theme=gr.themes.Default(primary_hue="blue")
        #examples=[[example]],  # uncomment this line to view the "example version" of your component
    )

demo.launch()
