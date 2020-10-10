haloDisplay = kitronik_halo_hd.create_zip_halo_display(60)
haloDisplay.clear()
haloDisplay.set_brightness(113)
haloDisplay.show_rainbow(1, 360)
while True:
    haloDisplay.rotate(1)
    haloDisplay.show()
    basic.pause(1000)