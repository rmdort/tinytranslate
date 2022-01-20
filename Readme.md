# TinyTranslate

A tiny hook to manage translations in your React Application

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/) ![node workflow](https://github.com/rmdort/tinytranslate/actions/workflows/node.js.yml/badge.svg)

## Features

1. Support for deeply nested objects. Eg: `translate('profile.top.heading')`
2. 100% Test coverage
3. Fully controlled and stateless

## Install

```sh
yarn add tinytranslate

OR

npm i tinytranslate --save
```

## Usage

1. Define your translations

```javascript
const translations = {
  en: {
    locale: "en-US",
    messages: {
      hello: "Hello {name}",
    },
  },
};
```

2. Add TranslationProvider to your app

```javascript
import { TranslationProvider } from "tinytranslate";

const App = () => {
  return (
    <TranslationProvider translations={translations} locale="en">
      <Header />
    </TranslationProvider>
  );
};
```

3. Use useTranslation hook

```javascript
import { useTranslation } from 'tinytranslate'

const Header = () => {
  const translate = useTranslation()

  return <>{translate('hello'}</>
}
```
