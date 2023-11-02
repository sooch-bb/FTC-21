var Power_Back_Left, Power_Back_Right, Power_Front_left, Power_Front_Right, gamepadA, gamepadB, gamepadX, gamepadY, LeftTrigger, RightTrigger, Left_Joy_Stick_X, Left_Joy_Stick_Y, Right_Joy_Stick_X;

/**
 * This function is executed when this Op Mode is selected from the Driver Station.
 */
function runOpMode() {
  linearOpMode.waitForStart();
  frontLeftWheelAsDcMotor.setDirection("REVERSE");
  backLeftWheelAsDcMotor.setDirection("REVERSE");
  Power_Back_Left = 0;
  Power_Back_Right = 0;
  Power_Front_left = 0;
  Power_Front_Right = 0;
  if (linearOpMode.opModeIsActive()) {
    servo1AsServo.setPosition(0);
    servo2AsServo.setPosition(1);
    while (linearOpMode.opModeIsActive()) {
      if (gamepad2.getA()) {
        gamepadA = 1;
        servo1AsServo.setPosition(0);
        servo2AsServo.setPosition(1);
      } else if (gamepad2.getB()) {
        gamepadB = 1;
        servo1AsServo.setPosition(1);
        servo2AsServo.setPosition(0);
      } else {
        gamepadA = 0;
        gamepadB = 0;
      }
      if (gamepad2.getX()) {
        gamepadX = 1;
        servoGripper1AsServo.setPosition(1);
      } else if (gamepad2.getY()) {
        gamepadY = 1;
        servoGripper1AsServo.setPosition(0.5);
      } else {
        gamepadY = 0;
        gamepadX = 0;
      }
      LeftTrigger = gamepad2.getLeftTrigger();
      RightTrigger = gamepad2.getRightTrigger();
      armMotorAsDcMotor.setPower(LeftTrigger);
      armMotorAsDcMotor.setPower(-Math.min(Math.max(RightTrigger, 0), 0.75));
      Left_Joy_Stick_X = gamepad1.getLeftStickX();
      Left_Joy_Stick_Y = -gamepad1.getLeftStickY();
      Right_Joy_Stick_X = gamepad1.getRightStickX();
      Power_Back_Left = (Left_Joy_Stick_Y - Left_Joy_Stick_X) + Right_Joy_Stick_X;
      Power_Back_Left = Math.min(Math.max(Power_Back_Left, -1), 1);
      Power_Back_Right = (Left_Joy_Stick_Y + Left_Joy_Stick_X) - Right_Joy_Stick_X;
      Power_Back_Right = Math.min(Math.max(Power_Back_Right, -1), 1);
      Power_Front_left = Left_Joy_Stick_Y + Left_Joy_Stick_X + Right_Joy_Stick_X;
      Power_Front_left = Math.min(Math.max(Power_Front_left, -1), 1);
      Power_Front_Right = (Left_Joy_Stick_Y - Left_Joy_Stick_X) - Right_Joy_Stick_X;
      Power_Front_Right = Math.min(Math.max(Power_Front_Right, -1), 1);
      frontRightWheelAsDcMotor.setDualPower(Power_Front_Right, frontLeftWheelAsDcMotor, Power_Front_left);
      backRightWheelAsDcMotor.setDualPower(Power_Back_Right, backLeftWheelAsDcMotor, Power_Back_Left);
      telemetry.addNumericData('Left Joy Stick X', Left_Joy_Stick_X);
      telemetry.addNumericData('Left Joy Stick Y', Left_Joy_Stick_Y);
      telemetry.addNumericData('Right Joy Stick X', Right_Joy_Stick_X);
      telemetry.addNumericData('Power Back Left', Power_Back_Left);
      telemetry.addNumericData('Power Back Right', Power_Back_Right);
      telemetry.addNumericData('Power Front Left', Power_Front_left);
      telemetry.addNumericData('Power Front Right', Power_Front_Right);
      telemetry.addNumericData('Arm Motor Power', armMotorAsDcMotor.getPower());
      telemetry.addNumericData('Left Trigger', LeftTrigger);
      telemetry.addNumericData('Right Trigger', RightTrigger);
      telemetry.addNumericData('servo1', servo1AsServo.getPosition());
      telemetry.addNumericData('servo2', servo2AsServo.getPosition());
      telemetry.addNumericData('buttonA', gamepadA);
      telemetry.addNumericData('buttonY', gamepadY);
      telemetry.addNumericData('buttonX', gamepadX);
      telemetry.update();
    }
  }
}
