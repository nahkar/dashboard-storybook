/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_BASE_URL: string;
	readonly VITE_SERVER_URL: string;
	readonly VITE_AUTH_PASSWORD: string;
	readonly VITE_AUTH_USERNAME: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
