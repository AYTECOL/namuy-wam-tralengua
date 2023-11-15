
import gradio as gr
from gradio_keyboardtextboxcomponent import KeyboardTextBoxComponent
import json
import requests

API_URL_LIST = "https://jsonplaceholder.typicode.com/todos"

# Una aplicación con un listado de traducciones pendientes
# presionar sobre una 
def translation_chat_fn(translation_index, modification):
    # transform index to id
    # submit to api
    
    response = requests.get(API_URL_LIST) # TODO: Post
    response.json()
    print(response.json())

    api_response = True
    return "Traducción corregida" if api_response else "Error del servicio"

selected_translation_index = 0

# translations_response = [
#                 {"id": 0, "text_spa": "The quick brown fox jumps over the lazy dog", "text_gum": "El rápido zorro café salta sobre los perezosos perros"},
#                 {"id": 1, "text_spa": "Build & share delightful machine learning apps", "text_gum": "Construye y comparte encantadoras aplicaciones de aprendizaje de máquina"},
# ]
translations_response = requests.get(API_URL_LIST).json() # TODO: Post
translations = list(map(lambda x: [x["title"]], translations_response))

# Interface Components
with gr.Blocks() as demo:
    translations_dataset_input = gr.Dataset(components=[gr.Textbox(visible=False)],# gr.Textbox(visible=False)],

                label="Traducciones",
                samples=translations,
                type="index",
                samples_per_page=10
            )
    gum_keyboard_textbox_input = KeyboardTextBoxComponent(#value=translations[selected_translation_index][0], 
                label="Traducciones", 
                #info="Elige las traducciones que desees revisar"
            )

    # Interactions
    def assign_trasnlation_id(evt: gr.SelectData):
        # selected_translation_index = evt.index
        # print(evt)
        return translations[evt.index][0]
    translations_dataset_input.select(fn=assign_trasnlation_id, outputs=[gum_keyboard_textbox_input])

# Interface
    gr.Interface(
        translation_chat_fn,
        [
            translations_dataset_input,
            gum_keyboard_textbox_input, 
        ],
        "text",  
        title="Tralengua",
        description="Elige las traducciones del Namuy Wam (Namtrik/Guambiano) que deseas corregir del Español.",
        theme=gr.themes.Default(primary_hue="blue")
        #examples=[[example]],  # uncomment this line to view the "example version" of your component
    )

demo.launch()
