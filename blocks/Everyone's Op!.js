var tgtPower_;

/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  motorTest.setDirection("REVERSE");
  servoTest.setPosition(0.5);
  linearOpMode.waitForStart();
  if (linearOpMode.opModeIsActive()) {
    while (linearOpMode.opModeIsActive()) {
      tgtPower_ = -gamepad1.getLeftStickY();
      motorTest.setDualPower(tgtPower_, Motor1, tgtPower_);
      telemetry.addNumericData('Target Power', tgtPower_);
      telemetry.addNumericData('Motor Power', motorTest.getPower());
      telemetry.update();
    }
  }
}
