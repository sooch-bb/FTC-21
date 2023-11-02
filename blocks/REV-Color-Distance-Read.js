/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  linearOpMode.waitForStart();
  while (linearOpMode.opModeIsActive()) {
    telemetry.addNumericData('Light Detected', colordistanceasLynxI2cColorRangeSensor.getLightDetected());
    telemetry.addNumericData('Distance in centimeters', colordistanceasLynxI2cColorRangeSensor.getDistance("CM"));
    telemetry.addNumericData('Red', colordistanceasLynxI2cColorRangeSensor.getRed());
    telemetry.addNumericData('Green', colordistanceasLynxI2cColorRangeSensor.getGreen());
    telemetry.addNumericData('Blue', colordistanceasLynxI2cColorRangeSensor.getBlue());
    telemetry.update();
  }
}
