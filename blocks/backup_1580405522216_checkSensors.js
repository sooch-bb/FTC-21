/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  linearOpMode.waitForStart();
  if (linearOpMode.opModeIsActive()) {
    while (linearOpMode.opModeIsActive()) {
      telemetry.update();
      telemetry.addNumericData('ColorBack', colorAccess.getHue(colorAccess.argbToColor(colorBackAsColorSensor.getAlpha(), colorBackAsColorSensor.getRed(), colorBackAsColorSensor.getGreen(), colorBackAsColorSensor.getBlue())));
      telemetry.addNumericData('ColorLeft', colorAccess.getHue(colorAccess.rgbToColor(colorLeftAsREVColorRangeSensor.getRed(), colorLeftAsREVColorRangeSensor.getGreen(), colorLeftAsREVColorRangeSensor.getBlue())));
      telemetry.addNumericData('ColorRight', colorAccess.getBlue(colorAccess.argbToColor(colorRightAsColorSensor.getAlpha(), colorRightAsColorSensor.getRed(), colorRightAsColorSensor.getGreen(), colorRightAsColorSensor.getBlue())));
      telemetry.addNumericData('RightBlue', colorRightAsColorSensor.getBlue());
    }
  }
}
