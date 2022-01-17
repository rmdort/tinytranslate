import { useState } from "react";
import { TranslationProvider, useTranslation } from "./../../src/index";

function App() {
  const [locale, setLocale] = useState("en");
  const translations = {
    en: {
      locale: "en-US",
      messages: {
        welcome: "Hello there {name}",
        profile: {
          heading: "Welcome to the app",
        },
      },
    },
    zh: {
      locale: "zh",
      messages: {
        welcome: "你好！你好吗 {name}",
        profile: {
          heading: "你好！你好吗",
        },
      },
    },
  };
  return (
    <TranslationProvider locale={locale} translations={translations}>
      <button
        onClick={() => {
          setLocale((prev) => (prev === "en" ? "zh" : "en"));
        }}
      >
        Toggle locale
      </button>
      <ProfileHeader />
    </TranslationProvider>
  );
}

const ProfileHeader = () => {
  const { translate } = useTranslation();

  return (
    <div>
      <h1>{translate("profile.heading")}</h1>
      <p>{translate("welcome", { name: "Vinay" })}</p>
    </div>
  );
};

export default App;
