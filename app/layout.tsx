import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body style={{margin: 0, overflow: 'hidden'}}>
            {children}
        </body>
      </html>
    </StoreProvider>
  );
}
