var CurrentColor;

/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  frontLeftWheelAsDcMotor.setDirection("REVERSE");
  backLeftWheelAsDcMotor.setDirection("REVERSE");
  linearOpMode.sleep(500);
  linearOpMode.waitForStart();
  frontLeftWheelAsDcMotor.setDualPower(0.3, backLeftWheelAsDcMotor, 0.3);
  frontRightWheelAsDcMotor.setDualPower(0.3, backRightWheelAsDcMotor, 0.3);
  while (linearOpMode.opModeIsActive()) {
    CurrentColor = colorAccess.rgbToColor(colorLeftAsREVColorRangeSensor.getRed(), colorLeftAsREVColorRangeSensor.getGreen(), colorLeftAsREVColorRangeSensor.getBlue());
    if (colorAccess.getHue(CurrentColor) > 100 && colorAccess.getHue(CurrentColor) < 125 && colorAccess.getValue(CurrentColor) > 0.35) {
      frontLeftWheelAsDcMotor.setDualPower(0, backLeftWheelAsDcMotor, 0);
      frontRightWheelAsDcMotor.setDualPower(0, backRightWheelAsDcMotor, 0);
    }
    telemetry.addNumericData('Red', colorLeftAsREVColorRangeSensor.getRed());
    telemetry.addNumericData('Blue', colorLeftAsREVColorRangeSensor.getBlue());
    telemetry.addNumericData('Green', colorLeftAsREVColorRangeSensor.getGreen());
    telemetry.addNumericData('Hue', colorAccess.getHue(CurrentColor));
    telemetry.addNumericData('Saturation', colorAccess.getSaturation(CurrentColor));
    telemetry.addNumericData('Value', colorAccess.getValue(CurrentColor));
    telemetry.update();
  }
}
