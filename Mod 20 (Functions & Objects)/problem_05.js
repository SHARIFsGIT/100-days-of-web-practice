const signal = 'red';

function trafficSignalAction(signalColor) {
    if (signalColor === 'red') {
        console.log('Traffic signal is red. STOP!');
    } else if (signalColor === 'yellow') {
        console.log('Traffic signal is yellow. Prepare to STOP!');
    } else if (signalColor === 'green') {
        console.log('Traffic signal is green. You can CROSS the road.');
    } else {
        console.log('Invalid signal color. Please provide a valid signal color.');
    }
}
trafficSignalAction(signal);



const newSignal = 'green';

function trafficSignalAction(signalColor) {
    switch (signalColor) {
        case 'red':
            console.log('Traffic signal is red. STOP!');
            break;
        case 'yellow':
            console.log('Traffic signal is yellow. Prepare to STOP!');
            break;
        case 'green':
            console.log('Traffic signal is green. You can CROSS the road.');
            break;
        default:
            console.log('Invalid signal color. Please provide a valid signal color.');
    }
}
trafficSignalAction(newSignal);
