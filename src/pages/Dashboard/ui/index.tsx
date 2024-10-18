import { Card } from '@/widgets/Card';

export const Dashboard = () => {
	return (
		<>
			<ul className="list">
				<li style={{ width: '100%', height: '331px', marginBottom: '50px' }}>
					<Card />
				</li>
				<li style={{ width: '100%', height: '331px', marginBottom: '50px' }}>
					<Card isIncomplete />
				</li>
			</ul>
		</>
	);
};
