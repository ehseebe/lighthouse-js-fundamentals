//calculate the position of the parade based on an [array] of directional moves



const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] 

function finalPosition(moves) {
	let position = [0,0]
		for (const direction of moves) {
			switch(direction) {
				case 'north':
					position[1] += 1;
					break;
				case 'south':
					position[1] -= 1;
					break;
				case 'east':
					position[0] += 1;
					break;
				case 'west':
					position[0] -= 1;
					break;
		}
	}
	return position;
}

finalPosition(moves);
