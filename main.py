while True:
    if input.acceleration(Dimension.Z) > 10 or input.acceleration(Dimension.Z) < 10:
        music.siren.play_until_done()
