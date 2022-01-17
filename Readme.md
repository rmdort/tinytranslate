# TinyTranslate

A tiny hook to manage translations in your React Application

## Install

```
yarn add tinytranslate

OR

npm i tinytranslate --save
```

## Usage

1. Define your translations

```
const translations = {
  en: {
    locale: 'en-US',
    messages: {
      hello: 'Hello {name}'
    }
  },
}
```

2. Add TranslationProvider to your app

```
import { TranslationProvider } from 'tinytranslate'

const App = () => {
  return (
    <TranslationProvider translations={translations} locale='en'>
      <Header />
    </TranslationProvider>
  )
}

```

3. Use useTranslation hook

```
const Header = () => {
  const { translate } = useTranslation()

  return <>{translate('hello'}</>
}
```

## Features

1. Support for deeply nested objects. Eg: `translate('profile.top.heading')`
2. 100% Test coverage
