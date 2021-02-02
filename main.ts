while (true) {
    if (input.acceleration(Dimension.Z) > 10 || input.acceleration(Dimension.Z) < 10) {
        music.siren.playUntilDone()
    }
    
}
