Feature: Toy Robot Navigation

  Scenario Outline: Place the robot on the table
    Given an instance of the robot in position <Position> is waiting for commands
    When I type: PLACE <X>,<Y>,<F>
    Then the robot new position should be <Response>

    Examples:
      | X | Y | F     | Position  | Response  |
      | 1 | 4 | SOUTH | OFF       | 1,4,SOUTH |
      | 0 | 3 | EAST  | 4,2,NORTH | 0,3,EAST  |
      | 2 | 5 | NORTH | OFF       | 2,5,NORTH |
      | 0 | 2 | WEST  | OFF       | 0,2,WEST  |
      # IGNORE IF POSITION IS OUTSIDE THE TABLE
      | 6 | 0 | NORTH | OFF       | OFF       |
      | 8 | 4 | SOUTH | 3,1,WEST  | 3,1,WEST  |

  Scenario Outline: Move the robot through the table
    Given an instance of the robot in position <Position> is waiting for commands
    When I type MOVE
    Then the robot new position should be <Response>

    Examples:
      | Position  | Response  |
      | 4,2,NORTH | 4,3,NORTH |
      | 2,2,SOUTH | 2,1,SOUTH |
      | 2,3,EAST  | 3,3,EAST  |
      | 4,4,WEST  | 3,4,WEST  |
      # IGNORE IF NEW POSITION IS OUTSIDE THE TABLE
      | 4,5,NORTH | 4,5,NORTH |
      | 0,0,SOUTH | 0,0,SOUTH |
      | 5,2,EAST  | 5,2,EAST  |
      | 0,3,WEST  | 0,3,WEST  |
      # IGNORE IF PLACE COMMAND HAS NOT BEEN USED
      | OFF       | OFF       | 

  Scenario Outline: Rotate the robot position
    Given an instance of the robot in position <Position> is waiting for commands
    When I type <Command>
    Then the robot new position should be <Response>

    Examples:
      | Position  | Command | Response  |
      | 4,2,NORTH | LEFT    | 4,2,WEST  |
      | 2,2,SOUTH | RIGHT   | 2,2,WEST  |
      | 2,3,EAST  | LEFT    | 2,3,NORTH |
      | 4,4,WEST  | LEFT    | 4,4,SOUTH |
      | 4,5,NORTH | RIGHT   | 4,5,EAST  |
      | 0,0,SOUTH | LEFT    | 0,0,EAST  |
      | 5,2,EAST  | RIGHT   | 5,2,SOUTH |
      | 0,3,WEST  | RIGHT   | 0,3,NORTH |  
      # IGNORE IF PLACE COMMAND HAS NOT BEEN USED
      | OFF       | LEFT    | OFF       |
      | OFF       | RIGHT   | OFF       |
