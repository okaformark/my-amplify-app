import {
	Authenticator,
	Button,
	Heading,
	View,
	Card,
} from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import './App.css';

Amplify.configure(config);

export default function App() {
	return (
		<Authenticator>
			{({ signOut }) => (
				<View>
					<Card>
						<Heading level={1}>We now have Auth!</Heading>
					</Card>
					<Button onClick={signOut}>Sign Out</Button>
				</View>
			)}
		</Authenticator>
	);
}
