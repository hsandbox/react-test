// Context API
// https://ja.reactjs.org/docs/context.html

import * as React from "react";

/**
 * Context を使用しないパターン
 */
export class UnContextApp extends React.Component {
  render() {
    return <Toolbar1 theme="dark" />;
  }
}

function Toolbar1(props) {
  // Toolbar コンポーネントは外部から "theme" プロパティを受け取り、
  // プロパティを ThemedButton へ渡します。
  // アプリ内の各ボタンがテーマを知る必要がある場合、
  // プロパティは全てのコンポーネントを通して渡される為、面倒になります。
  return (
    <div>
      <ThemeButton1 theme={props.theme} />
    </div>
  );
}

class ThemeButton1 extends React.Component {
  render() {
    return <button theme={this.props.theme}>{this.props.theme}</button>;
  }
}

/**
 * Context を使用したパターン
 */
// コンテクストを使用すると、全てのコンポーネントを明示的に通すことなしに
// コンポーネントツリーの深くまで値を渡すことができます。
// 現在のテーマ（デフォルトは "light"）の為のコンテクストを作成します。
const ThemeContext = React.createContext("light");

export class ContextApp extends React.Component {
  render() {
    // 以下のツリーへ現在のテーマを渡すためにプロバイダを使用します。
    // どんな深さでも、どのようなコンポーネントでも読み取ることができます。
    // このサンプルでは、"dark" を現在の値として渡しています。
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// 間のコンポーネントはもう明示的にテーマを
// 下に渡す必要はありません。
function Toolbar() {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}

class ThemeButton extends React.Component {
  // 現在のテーマのコンテクストを読むために、contextType に指定します。
  // React は上位の最も近いテーマプロバイダを見つけ、その値を使用します。
  // この例では、現在のテーマは "dark" です。
  render() {
    return <button theme={this.context}>{this.context}</button>;
  }
}
ThemeButton.contextType = ThemeContext;

/**
 * useContext を使用したパターン
 *
 * https://ja.reactjs.org/docs/hooks-reference.html#usecontext
 */
const ThemeContext2 = React.createContext("light");

export class ContextAppHooks extends React.Component {
  render() {
    return (
      <ThemeContext2.Provider value="dark">
        <Toolbar2 />
      </ThemeContext2.Provider>
    );
  }
}

function Toolbar2() {
  return (
    <div>
      <ThemeButton2 />
    </div>
  );
}

const ThemeButton2 = () => {
  const value = React.useContext(ThemeContext2);

  return <button theme={value}>{value}</button>;
};
