import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import Navigation from '@/components/navigation';

import { StringsProvider } from '@/data/stringsConfig';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<StringsProvider>
			<Navigation />
			<App />
		</StringsProvider>
	</StrictMode>
);
