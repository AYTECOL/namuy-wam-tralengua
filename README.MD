## TRALENGUA
Tralengua es una herramienta de supervisión de traducciones, diseñada para la creación de un dataset de textos en Español (spa) y Namtrik (gum), destinado a la traducción de contenidos entre ambos idiomas.

# Entrada de usuarios
La herramienta permite
* Ingresar frases en Español y Namtrik
* Proponer y calificar traducciones automáticas
* Corregir traducciones defectuosos

# Uso en consola ()
1. Instalar Python (3.8+), NVM (NodeJS v16.14+ y NPM). Actualiza PIP (Python pip) a una versión superior a 22.
2. Instalar venv: `pip install virtualenv`
3. Crear un entorno virtual para python: `python -m venv tralengua`
4. Activa el entorno (en Windows: `tralengua\Scripts\activate`, en Linux: `source tralengua\Scripts\activate`)
5. Instala los paquetes: `pip install -r requirements.txt`

# Ejecución
6. `cd keyboardtextboxcomponent`
7. Instalamos los paquetes a nivel de prototipo `gradio cc install`
8. Construimos `gradio cc build`
9. Ejecutamos servidores de desarrollo `gradio cc dev`
10. Se abre el sitio __http://127.0.0.1:7860/__. Los cambios a demo/app.py se reflejan inmediatamente. Los cambios (hotreload) en frontend (para componentes personalizados) no están funcionado bien (bug OP?), debe reejecutarse todo. Para desarrollo normal, el servidor de back y app.py deben funcionar bien.

# Publish
11. In keyboardtexboxcomponent folder: `gradio cc publish`
12. (not working) `gradio deploy` to namuy-wam-tralengua 

# Realizado
Se realiza el tutorial: https://www.gradio.app/guides/five-minute-guide para crear el componente KeyboardTextBoxComponent

# TODO
* dictado por voz (usando LLM spa y gum de Meta)
-- grabar conversacione en Namtrik y pasarlas a texto con el ASR de Meta, serviría como fuente de datos unilenguaje
brainstorm
namuy wam: nuestra lengua
herramienta para retroalimentar un sistema de llm para mejorar parejas de traducción spa-gum
la herramienta puede servir para educación, apoyar el aprendizaje supervisado del guambiano y el español
tralengua