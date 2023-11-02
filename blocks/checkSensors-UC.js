/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  linearOpMode.waitForStart();
  if (linearOpMode.opModeIsActive()) {
    while (linearOpMode.opModeIsActive()) {
      telemetry.addNumericData('ColorBack', colorAccess.getHue(colorAccess.rgbToColor(colorBackAsColorSensor.getRed() / 3, colorBackAsColorSensor.getGreen() / 3, colorBackAsColorSensor.getBlue() / 3)));
      telemetry.addNumericData('Left Hue', colorAccess.getHue(colorAccess.rgbToColor(colorLeftAsREVColorRangeSensor.getRed(), colorLeftAsREVColorRangeSensor.getGreen(), colorLeftAsREVColorRangeSensor.getBlue())));
      telemetry.addNumericData('Left Saturation', colorAccess.getSaturation(colorAccess.rgbToColor(colorLeftAsREVColorRangeSensor.getRed(), colorLeftAsREVColorRangeSensor.getGreen(), colorLeftAsREVColorRangeSensor.getBlue())));
      telemetry.addNumericData('Left Value', colorAccess.getValue(colorAccess.rgbToColor(colorLeftAsREVColorRangeSensor.getRed(), colorLeftAsREVColorRangeSensor.getGreen(), colorLeftAsREVColorRangeSensor.getBlue())));
      telemetry.addNumericData('ColorRight', colorAccess.getHue(colorAccess.rgbToColor(colorRightAsColorSensor.getRed() / 3, colorRightAsColorSensor.getGreen() / 3, colorRightAsColorSensor.getBlue() / 3)));
      telemetry.addNumericData('leftDistance', leftDistanceAsDistanceSensor.getDistance("CM"));
      telemetry.addNumericData('frontDistance', frontDistanceAsDistanceSensor.getDistance("CM"));
      telemetry.addNumericData('backSaturation', colorAccess.getSaturation(colorAccess.rgbToColor(colorBackAsColorSensor.getRed() / 3, colorBackAsColorSensor.getGreen() / 3, colorBackAsColorSensor.getBlue() / 3)));
      telemetry.update();
    }
  }
}
