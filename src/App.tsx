import logo from './logo.svg';
import {
	Authenticator,
	Button,
	Heading,
	Image,
	View,
	Card,
} from '@aws-amplify/ui-react';

import './App.css';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

export default function App() {
	return (
		<Authenticator>
			{({ signOut }) => (
				<View className='App'>
					<Card>
						<Image src={logo} className='App-logo' alt='logo' />
						<Heading level={1}>We now have Auth!</Heading>
					</Card>
					<Button onClick={signOut}>Sign Out</Button>
				</View>
			)}
		</Authenticator>
	);
}
