"use client"

import type { ReactNode } from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Provider } from "react-redux";
import {store} from "../app/store/store";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body style={{margin: 0, overflow: 'hidden'}}>
            {children}
        </body>
      </html>
    </Provider>
  );
}
