import sys
from PIL import Image

def remove_white_bg(input_path, output_path):
    # Abrir la imagen
    img = Image.open(input_path)
    img = img.convert("RGBA")
    
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # Si el pixel es blanco (o muy cercano, por la compresión)
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            # Hacerlo completamente transparente
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    
    # También es útil recortar el área transparente sobrante (trim)
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, "PNG")
    print(f"Hecho: {output_path} guardado con fondo transparente.")

if __name__ == "__main__":
    remove_white_bg("C:/Users/angel chisvert/Desktop/retopared/favicon.png", "C:/Users/angel chisvert/Desktop/retopared/favicon.png")
