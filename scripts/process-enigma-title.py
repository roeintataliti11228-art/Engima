from PIL import Image

src = r"C:\Users\Kamtel 03-09\.cursor\projects\c-Users-Kamtel-03-09-Desktop-project-Engima-website\assets\c__Users_Kamtel_03-09_AppData_Roaming_Cursor_User_workspaceStorage_ea9cfeb4dd62a9cf5755a00b970430f5_images_ChatGPT_Image_Jul_8__2026__06_03_44_PM-5164e034-d80e-4498-b446-b7419fea67ec.png"
dst = r"c:\Users\Kamtel 03-09\Desktop\project\Engima website\assets\enigma-title.png"

img = Image.open(src).convert("RGBA")
pixels = img.load()
w, h = img.size

for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        brightness = max(r, g, b)
        if brightness < 18:
            pixels[x, y] = (r, g, b, 0)
        elif brightness < 55:
            alpha = int(((brightness - 18) / 37) * 255)
            pixels[x, y] = (r, g, b, min(a, alpha))

bbox = img.getbbox()
if bbox:
    img = img.crop(bbox)

img.save(dst, optimize=True)
print(f"Saved {dst} size={img.size}")
