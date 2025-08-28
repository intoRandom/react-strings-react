import { useStrings } from '@/data/stringsConfig';

import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

const Navigation = () => {
	const { Str, language, setLanguage } = useStrings();

	const SetLang = () => {
		if (language === 'es') {
			setLanguage('en');
		} else {
			setLanguage('es');
		}
	};

	return (
		<nav className='sticky top-0 flex flex-row items-center justify-between w-full max-w-4xl p-5 mx-auto backdrop-blur-sm bg-background/50'>
			<div className='text-3xl font-bold text-red-500'>{Str.home.title()}</div>
			<div>
				<Button variant={'outline'} onClick={SetLang}>
					{language.toUpperCase()}
					<Languages />
				</Button>
			</div>
		</nav>
	);
};

export default Navigation;
