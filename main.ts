let haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
haloDisplay.clear()
haloDisplay.setBrightness(113)
haloDisplay.showRainbow(1, 360)
while (true) {
    haloDisplay.rotate(1)
    haloDisplay.show()
    basic.pause(1000)
}
