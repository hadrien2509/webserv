from flask import Flask, request

app = Flask(__name__)

# Chemin vers le dossier contenant les images
image_dir = "img"

@app.route('/delete', methods=['POST'])
def delete_image():
    image_to_delete = request.form.get('image')

    if os.path.exists(os.path.join(image_dir, image_to_delete)):
        os.remove(os.path.join(image_dir, image_to_delete))
        return "L'image a été supprimée avec succès."
    else:
        return "L'image n'existe pas."

if __name__ == '__main__':
    app.run()
