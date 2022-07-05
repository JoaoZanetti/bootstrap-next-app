import '../styles/globals.css'
import * as Sentry from "@sentry/react";
import ErrorDisplay from '../components/ErrorDisplay';

function MyApp({ Component, pageProps }) {
	return (
		<Sentry.ErrorBoundary fallback={ErrorDisplay}>
			<Component {...pageProps} />
		</Sentry.ErrorBoundary>
	)
}

export default MyApp
