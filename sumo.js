function megfordul() {
    motors.largeAD.tank(50, 50, 1, MoveUnit.Rotations)
    motors.largeAD.tank(-50, 50, 1.58, MoveUnit.Rotations)
}
megfordul()
while (true) {
    brick.showString(sensors.ultrasonic4.distance().toString(), 8)
    if (sensors.color3.isColorDetected(ColorSensorColor.White)) {
        megfordul()
    } else if (sensors.ultrasonic4.distance() <= 100) {
        motors.largeAD.tank(100, 100, 0.1, MoveUnit.Rotations)
    } else {
        motors.largeAD.tank(-50, 50, 1, MoveUnit.Rotations)
        pause(2000)
    }
}
