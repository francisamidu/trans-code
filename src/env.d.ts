/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_DESCRIPTION: string;
  readonly VITE_APP_SHORT_DESCRIPTION: string;
  readonly VITE_OPENAI_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
