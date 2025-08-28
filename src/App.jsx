import './App.css';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { useStrings } from '@/data/stringsConfig';

function App() {
	const { Arr, Str } = useStrings();

	return (
		<>
			<div className='flex justify-center w-full'>
				<div className='flex flex-col gap-6 w-full max-w-4xl p-5'>
					<div>{Str.home.subtitle()}</div>
					<section className='flex flex-col gap-3'>
						<h3 className='text-end'>
							{Str.home.developer()}
							<a href={Str.home.links.dev()} className='underline'>
								intoRandom
							</a>
						</h3>
					</section>
					<hr />
					<section className='flex flex-col gap-2'>
						<h3 className='text-lg'>{Str.home.sum.title()}</h3>
						<div>
							{Str.home.sum.data()}
							<a href={Str.home.links.repo()} className='underline'>
								{Str.home.sum.repository()}
							</a>
						</div>
						<div className='flex flex-col gap-2'>
							{Str.home.sum.auto()}
							<img alt='files' src={'./auto.png'} width={300} />
						</div>
					</section>
					<section className='flex flex-col gap-2'>
						<h3 className='text-lg'>{Str.home.inst.title()}</h3>
						<div>{Str.home.inst.data()}</div>
						<SyntaxHighlighter language='javascript' style={a11yDark}>
							{Str.home.npm()}
						</SyntaxHighlighter>
					</section>
					<section className='flex flex-col gap-2'>
						<h3 className='text-lg'>{Str.home.config.title()}</h3>
						<div>{Str.home.config.data()}</div>
						<img alt='files' src={'./files.png'} width={300} />
						<ul className='flex flex-col gap-5'>
							{Arr.home.config.files.map((file, index) => (
								<li key={index} className='flex flex-col gap-2'>
									<div>{file.data}</div>
									<SyntaxHighlighter language='javascript' style={a11yDark}>
										{Array.isArray(file.file)
											? file.file.join('\n')
											: file.file}
									</SyntaxHighlighter>
								</li>
							))}
						</ul>
					</section>
					<section className='flex flex-col gap-2 py-5'>
						<div>{Str.home.final()}</div>
						<a href={Str.home.links.coffee()} className='underline'>
							{Str.home.coffee()}
						</a>
						<div>{Str.home.end()}</div>
					</section>
				</div>
			</div>
		</>
	);
}

export default App;
