/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  linearOpMode.waitForStart();
  if (linearOpMode.opModeIsActive()) {
    servo1AsServo.setPosition(0);
    servo2AsServo.setPosition(0);
    while (linearOpMode.opModeIsActive()) {
      if (gamepad1.getA()) {
        servo1AsServo.setPosition(0);
        servo2AsServo.setPosition(0);
      } else if (gamepad1.getB()) {
        servo1AsServo.setPosition(1);
        servo2AsServo.setPosition(1);
      }
      telemetry.update();
    }
  }
}
