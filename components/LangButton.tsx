import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { MdLanguage } from 'react-icons/md';

const LangButton = () => {
	const router = useRouter();

	const { locales, locale: activeLocale } = router;

	const otherLocales = locales?.filter((locale) => locale !== activeLocale);

	return (
		<div>
			<span className="text-muted cursor-pointer">
				{otherLocales?.map((locale) => {
					const { pathname, query, asPath } = router;
					return (
						<span key={'locale-' + locale}>
							<Link href={{ pathname, query }} as={asPath} locale={locale}>
								<a className="flex items-center">
									{locale === 'en' ? (
										<>
											<MdLanguage className="h-6 w-6 text-pink-700 md:h-8 md:w-8" />{' '}
											Eng
										</>
									) : locale === 'es' ? (
										<>
											<MdLanguage className="h-6 w-6 text-pink-700 md:h-8 md:w-8" />{' '}
											Esp
										</>
									) : null}
								</a>
							</Link>
						</span>
					);
				})}
			</span>
		</div>
	);
};

export default LangButton;
