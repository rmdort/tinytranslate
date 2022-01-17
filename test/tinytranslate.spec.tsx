import { render, screen } from "@testing-library/react";
import React from "react";
import {
  TranslationContext,
  TranslationProvider,
  useTranslation,
} from "../src/tinytranslate";

const mockTranslations = {
  en: {
    locale: "en-US",
    messages: {
      hello: "hello en",
      hello_name: "hello en {name}",
    },
  },
  zh: {
    locale: "CN",
    messages: {
      hello: "hello cn",
      hello_name: "hello cn {name}",
    },
  },
};

describe("tinytranslate", () => {
  it("translate provider will mount its children", () => {
    render(
      <TranslationProvider translations={mockTranslations} locale="en">
        <div>hello world</div>
      </TranslationProvider>
    );

    expect(screen.getByText(/hello world/)).toBeTruthy();
  });

  it("will render translation based on locale", () => {
    const Child = () => {
      const { translate } = useTranslation();
      return (
        <>
          {translate("hello")}
          <div>{translate("hello_name", { name: "foobar" })}</div>
        </>
      );
    };
    render(
      <TranslationProvider translations={mockTranslations} locale="en">
        <Child />
      </TranslationProvider>
    );

    expect(screen.getByText("hello en")).toBeTruthy();
    expect(screen.getByText("hello en foobar")).toBeTruthy();
  });

  it("will throw error if context value is null", () => {
    const Child = () => {
      useTranslation();
      return <></>;
    };
    const renderProvider = () =>
      render(
        <TranslationContext.Provider value={null}>
          <Child />
        </TranslationContext.Provider>
      );

    expect(renderProvider).toThrowError("Missing TranslationProvider");
  });
});
