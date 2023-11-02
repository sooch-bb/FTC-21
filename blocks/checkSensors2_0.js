/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  linearOpMode.waitForStart();
  if (linearOpMode.opModeIsActive()) {
    while (linearOpMode.opModeIsActive()) {
      telemetry.update();
      telemetry.addNumericData('colorRight', colorAccess.getHue(colorAccess.rgbToColor(255, colorRightAsColorSensor.getGreen() / 3, colorRightAsColorSensor.getBlue() / 3)));
      telemetry.addNumericData('colorRight', colorAccess.getSaturation());
      telemetry.addNumericData('colorLeft', colorAccess.getHue(colorAccess.rgbToColor(colorLeftAsREVColorRangeSensor.getRed(), colorLeftAsREVColorRangeSensor.getGreen(), colorLeftAsREVColorRangeSensor.getBlue())));
    }
  }
}
