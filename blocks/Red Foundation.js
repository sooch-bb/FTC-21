var findBlueBuild, AttempedToGrip, Gripped, Dropped, maxSpeedForward, maxSpeedBackward, leftColor, Back_Color;

/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  frontLeftWheelAsDcMotor.setDirection("REVERSE");
  backLeftWheelAsDcMotor.setDirection("REVERSE");
  servoGripper1AsServo.setDirection("REVERSE");
  findBlueBuild = 1;
  AttempedToGrip = 0;
  Gripped = 0;
  Dropped = 0;
  maxSpeedForward = 0.5;
  maxSpeedBackward = -0.5;
  linearOpMode.waitForStart();
  if (linearOpMode.opModeIsActive()) {
    servoGripper1AsServo.setPosition(0);
    while (linearOpMode.opModeIsActive()) {
      while (linearOpMode.opModeIsActive() && findBlueBuild) {
        frontLeftWheelAsDcMotor.setDualPower(maxSpeedBackward, backLeftWheelAsDcMotor, maxSpeedForward);
        frontRightWheelAsDcMotor.setDualPower(maxSpeedForward, backRightWheelAsDcMotor, maxSpeedBackward);
        leftColor = colorAccess.rgbToColor(colorLeftAsREVColorRangeSensor.getRed(), colorLeftAsREVColorRangeSensor.getGreen(), colorLeftAsREVColorRangeSensor.getBlue());
        if ((colorAccess.getHue(leftColor) > 350 || colorAccess.getHue(leftColor) < 20) && colorAccess.getSaturation(leftColor) > 0.3) {
          telemetryAddTextData('found', 'build site');
          frontLeftWheelAsDcMotor.setDualPower(0, backLeftWheelAsDcMotor, 0);
          frontRightWheelAsDcMotor.setDualPower(0, backRightWheelAsDcMotor, 0);
          findBlueBuild = 0;
          AttempedToGrip = 1;
          telemetry.addNumericData('front wheel power', frontLeftWheelAsDcMotor.getPower());
        }
        telemetry.update();
      }
      while (linearOpMode.opModeIsActive() && AttempedToGrip) {
        frontLeftWheelAsDcMotor.setDualPower(maxSpeedBackward, backLeftWheelAsDcMotor, maxSpeedBackward);
        frontRightWheelAsDcMotor.setDualPower(maxSpeedBackward, backRightWheelAsDcMotor, maxSpeedBackward);
        Back_Color = colorAccess.rgbToColor(colorBackAsColorSensor.getRed() / 3, colorBackAsColorSensor.getGreen() / 3, colorBackAsColorSensor.getBlue() / 3);
        if (colorAccess.getHue(Back_Color) > 25 && colorAccess.getHue(Back_Color) < 45 && colorAccess.getSaturation(Back_Color) > 0.3) {
          telemetryAddTextData('Found Color', 'Foundation');
          frontLeftWheelAsDcMotor.setDualPower(0, frontRightWheelAsDcMotor, 0);
          backLeftWheelAsDcMotor.setDualPower(0, backRightWheelAsDcMotor, 0);
          servoGripper1AsServo.setPosition(0.5);
          AttempedToGrip = 0;
          Gripped = 1;
          telemetry.addNumericData('front wheel power', frontLeftWheelAsDcMotor.getPower());
        }
        telemetry.update();
      }
      while (linearOpMode.opModeIsActive() && Gripped) {
        telemetryAddTextData('gripped', 'Foundation');
        telemetry.addNumericData('distance to front', frontDistanceAsDistanceSensor.getDistance("CM"));
        frontLeftWheelAsDcMotor.setDualPower(maxSpeedForward, frontRightWheelAsDcMotor, maxSpeedForward);
        backLeftWheelAsDcMotor.setDualPower(maxSpeedForward, backRightWheelAsDcMotor, maxSpeedForward);
        leftColor = colorAccess.rgbToColor(colorLeftAsREVColorRangeSensor.getRed(), colorLeftAsREVColorRangeSensor.getGreen(), colorLeftAsREVColorRangeSensor.getBlue());
        if ((colorAccess.getHue(leftColor) > 350 || colorAccess.getHue(leftColor) < 20) && colorAccess.getSaturation(leftColor) > 0.3) {
          frontLeftWheelAsDcMotor.setDualPower(0.4, frontRightWheelAsDcMotor, -0.4);
          backLeftWheelAsDcMotor.setDualPower(0.4, backRightWheelAsDcMotor, -0.4);
          linearOpMode.sleep(2000);
          servoGripper1AsServo.setPosition(0);
          frontLeftWheelAsDcMotor.setDualPower(0, frontRightWheelAsDcMotor, 0);
          backLeftWheelAsDcMotor.setDualPower(0, backRightWheelAsDcMotor, 0);
          linearOpMode.sleep(250);
          frontLeftWheelAsDcMotor.setDualPower(-0.4, frontRightWheelAsDcMotor, 0.4);
          backLeftWheelAsDcMotor.setDualPower(-0.4, backRightWheelAsDcMotor, 0.4);
          linearOpMode.sleep(1000);
          frontLeftWheelAsDcMotor.setDualPower(0, frontRightWheelAsDcMotor, 0);
          backLeftWheelAsDcMotor.setDualPower(0, backRightWheelAsDcMotor, 0);
          Gripped = 0;
          Dropped = 1;
          telemetry.addNumericData('front wheel power', frontLeftWheelAsDcMotor.getPower());
          telemetry.update();
        }
      }
      while (linearOpMode.opModeIsActive() && Dropped) {
        frontLeftWheelAsDcMotor.setDualPower(maxSpeedForward, frontRightWheelAsDcMotor, maxSpeedBackward);
        backLeftWheelAsDcMotor.setDualPower(maxSpeedBackward, backRightWheelAsDcMotor, maxSpeedForward);
        leftColor = colorAccess.rgbToColor(colorLeftAsREVColorRangeSensor.getRed(), colorLeftAsREVColorRangeSensor.getGreen(), colorLeftAsREVColorRangeSensor.getBlue());
        telemetry.addNumericData('right color', colorAccess.getHue(leftColor));
        if ((colorAccess.getHue(leftColor) > 350 || colorAccess.getHue(leftColor) < 20) && colorAccess.getSaturation(leftColor) > 0.3) {
          frontLeftWheelAsDcMotor.setDualPower(0, frontRightWheelAsDcMotor, 0);
          backLeftWheelAsDcMotor.setDualPower(0, backRightWheelAsDcMotor, 0);
          Dropped = 0;
          telemetry.addNumericData('front wheel power', frontLeftWheelAsDcMotor.getPower());
        }
        telemetry.update();
      }
    }
  }
}
