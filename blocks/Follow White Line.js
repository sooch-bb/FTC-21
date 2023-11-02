var StartTime;

/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  motor1.setDirection("REVERSE");
  linearOpMode.waitForStart();
  motor1.setDualPower(0.1, motor2, 0.1);
  StartTime = linearOpMode.getRuntime();
  while (linearOpMode.opModeIsActive() && linearOpMode.getRuntime() - StartTime < 3) {
    telemetry.addNumericData('Light Detected', sensor_color_distanceasLynxI2cColorRangeSensor.getLightDetected());
    if (sensor_color_distanceasLynxI2cColorRangeSensor.getLightDetected() < 0.85) {
      motor1.setDualPower(0.05, motor2, 0.15);
      telemetryAddTextData('Decision', 'Turn left');
    } else {
      motor1.setDualPower(0.15, motor2, 0.05);
      telemetryAddTextData('Decision', 'Turn right');
    }
    telemetry.update();
  }
  motor1.setDualPower(0, motor2, 0);
}
