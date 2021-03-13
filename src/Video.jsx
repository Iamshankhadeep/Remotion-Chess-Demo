import {Composition} from 'remotion';
import {ChessDemo} from './ChessDemo';

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id="ChessDemo"
				component={ChessDemo}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
