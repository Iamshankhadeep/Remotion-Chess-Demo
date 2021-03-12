import Chess from 'chess.js';
import Chessboard from 'chessboardjsx';
import React, {Component} from 'react';
import {random} from 'remotion';

class RandomVsRandom extends Component {
	state = {fen: 'start'};

	componentDidMount() {
		this.game = new Chess();
		setTimeout(() => this.makeRandomMove(), 1000);
	}

	componentWillUnmount() {
		window.clearTimeout(this.timer());
	}

	timer = () => window.setTimeout(this.makeRandomMove, 1000);

	makeRandomMove = () => {
		const possibleMoves = this.game.moves();

		if (
			this.game.game_over() === true ||
			this.game.in_draw() === true ||
			possibleMoves.length === 0
		)
			return;

		const randomIndex = Math.floor(random(null) * possibleMoves.length);
		this.game.move(possibleMoves[randomIndex]);
		this.setState({fen: this.game.fen()});

		this.timer();
	};

	render() {
		const {fen} = this.state;
		return this.props.children({position: fen});
	}
}
const RandomVsRandomGame = () => {
	return (
		<div>
			<RandomVsRandom>
				{({position}) => (
					<Chessboard
						width={1080}
						id="random"
						position={position}
						transitionDuration={300}
						boardStyle={{
							borderRadius: '5px',
							boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`,
						}}
					/>
				)}
			</RandomVsRandom>
		</div>
	);
};

export const ChessDemo = () => {
	return (
		<>
			<RandomVsRandomGame />
		</>
	);
};
