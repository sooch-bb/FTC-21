/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  servoTest.setPosition(0);
  linearOpMode.waitForStart();
  if (linearOpMode.opModeIsActive()) {
    while (linearOpMode.opModeIsActive()) {
      servoTest.setPosition(gamepad1.getRightTrigger());
      telemetry.update();
    }
  }
}
