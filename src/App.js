import React, { useState } from 'react';
import './App.css';
import MonacoEditor from './MonacoEditor';
import { Container, Button } from './App.styles';
import { code } from './code';
import { options } from './options';

const theme = {
  dark: 'vs-dark',
  light: 'light',
};
const mode = {
  js: 'javascript',
  ts: 'typescript',
  html: 'html',
  css: 'css',
  less: 'less',
  java: 'java',
  python: 'python',
};

function App() {
  const [stateTheme, setStateTheme] = useState(theme.dark);
  const [stateMode, setStateMode] = useState(mode.js);

  return (
    <>
      <Container>
        <Button onClick={() => setStateTheme(theme.dark)}>
          The Dark theme
        </Button>
        <Button onClick={() => setStateTheme(theme.light)}>
          The Light theme
        </Button>
      </Container>
      <Container>
        <Button onClick={() => setStateMode(mode.js)}>javascript</Button>
        <Button onClick={() => setStateMode(mode.ts)}>typescript</Button>
        <Button onClick={() => setStateMode(mode.html)}>html (+emmet)</Button>
        <Button onClick={() => setStateMode(mode.css)}>css</Button>
        <Button onClick={() => setStateMode(mode.less)}>
          less (blocked editor)
        </Button>
        <Button onClick={() => setStateMode(mode.java)}>java</Button>
        <Button onClick={() => setStateMode(mode.python)}>python</Button>
      </Container>
      {stateMode === mode.js && (
        <MonacoEditor
          theme={stateTheme}
          mode={mode.js}
          code={code.js}
          options={options}
        />
      )}
      {stateMode === mode.ts && (
        <MonacoEditor
          theme={stateTheme}
          mode={mode.ts}
          code={code.ts}
          options={options}
        />
      )}
      {stateMode === mode.html && (
        <MonacoEditor
          theme={stateTheme}
          mode={mode.html}
          code={code.html}
          options={options}
        />
      )}
      {stateMode === mode.css && (
        <MonacoEditor
          theme={stateTheme}
          mode={mode.css}
          code={code.css}
          options={options}
        />
      )}
      {stateMode === mode.less && (
        <MonacoEditor
          theme={stateTheme}
          mode={mode.less}
          code={code.less}
          options={{ ...options, readOnly: true }}
          className="disable"
        />
      )}
      {stateMode === mode.java && (
        <MonacoEditor
          theme={stateTheme}
          mode={mode.java}
          code={code.java}
          options={options}
        />
      )}
      {stateMode === mode.python && (
        <MonacoEditor
          theme={stateTheme}
          mode={mode.python}
          code={code.python}
          options={options}
        />
      )}
    </>
  );
}

export default App;
