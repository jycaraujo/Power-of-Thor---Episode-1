/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs: string[] = readline().split(' ');
const Lx: number = parseInt(inputs[0]); // the X position of the light of power
const Ly: number = parseInt(inputs[1]); // the Y position of the light of power
const Tx: number = parseInt(inputs[2]); // Thor's starting X position
const Ty: number = parseInt(inputs[3]); // Thor's starting Y position
let current = [Tx, Ty]
// game loop
while (true) {
    const remainingTurns: number = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');

    let direction = ''
    
    
    
    if(current[1] < Ly) {
        direction = 'S'
        current[1] += 1
    } else if (current[1] > Ly) { 
        direction = 'N'
        current[1] -= 1
    } 
    if (current[0] < Lx) {
        direction += 'E'
        current[0] += 1
    } else if (current[0] > Lx) {
        direction += 'W'
        current[0] -= 1
    } 
    
    


    // A single line providing the move to be made: N NE E SE S SW W or NW
    console.log(direction);
}
