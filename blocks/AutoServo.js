/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  linearOpMode.waitForStart();
  servoTest.setPosition(0);
  telemetry.update();
  linearOpMode.sleep(2000);
  servoTest.setPosition(0.5);
  telemetry.update();
  linearOpMode.sleep(2000);
  servoTest.setPosition(1);
  linearOpMode.sleep(500);
}
