from PIL import Image
image = Image.open('splash.png')
image.show()
listOfImgs = [
{"name":"drawable-land-hdpi-screen.png","res":(800,480)},
{"name":"drawable-land-ldpi-screen.png","res":(320,240)},
{"name":"drawable-land-mdpi-screen.png","res":(480,320)},
{"name":"drawable-land-xhdpi-screen.png","res":(1280,720)},
{"name":"drawable-land-xxhdpi-screen.png","res":(1600,960)},
{"name":"drawable-land-xxxhdpi-screen.png","res":(1920,1280)},
{"name":"drawable-port-hdpi-screen.png","res":(480,800)},
{"name":"drawable-port-ldpi-screen.png","res":(240,320)},
{"name":"drawable-port-mdpi-screen.png","res":(320,480)},
{"name":"drawable-port-xhdpi-screen.png","res":(720,1280)},
{"name":"drawable-port-xxhdpi-screen.png","res":(960,1600)},
{"name":"drawable-port-xxxhdpi-screen.png","res":(1280,1920)}]

for i in range(len(listOfImgs)):
    new_image = image.resize(listOfImgs[i]["res"])
    new_image.save(listOfImgs[i]["name"])
    print(listOfImgs[i])