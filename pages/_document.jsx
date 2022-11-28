import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
					rel="stylesheet"
				/>
				<script
					src="https://code.jquery.com/jquery-3.6.1.min.js"
					integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ="
					crossOrigin="anonymous"
				></script>
				<script
					src="https://cdnjs.cloudflare.com/ajax/libs/jquery-browser/0.1.0/jquery.browser.min.js"
					integrity="sha512-7IUk8ZcM82NUtcQv8gBFQTbz0Z+yXiGQyOj+YvSOTv3ZQbxEBYrs4zmY4rrm4/opSN1Xv/oGONv5uCSqiYZy4g=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				></script>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
