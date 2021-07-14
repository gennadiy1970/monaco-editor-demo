import React, { useEffect, useRef } from 'react';
import Editor, { useMonaco } from '@monaco-editor/react';
import { Container } from './MonacoEditor.styles';

// eslint-disable-next-line
import enableEmmet from 'monaco-emmet';

const MonacoEditor = ({ theme, mode, code, options, className="" }) => {
  const monaco = useMonaco();
  const monacoRef = useRef(null);
  useEffect(() => {
    // do conditional chaining
    monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true);
    // or make sure that it exists by other ways
    if (monaco) {
      console.log('here is the monaco instance:', monaco);
    }
  }, [monaco]);
  function handleEditorWillMount(monaco) {
    // here is the monaco instance
    // do something before editor is mounted
    monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
  }

  function handleEditorDidMount(editor, monaco) {
    // here is another way to get monaco instance
    // you can also store it in `useRef` for further usage
    monacoRef.current = editor;

    enableEmmet(editor);

    editor.focus();
    // editor.revealPositionInCenter({ lineNumber: 2, column: 3 });
    editor.setPosition({lineNumber:3, column:4});
    editor.deltaDecorations(
      [],
      [
        {
          range: new monaco.Range(3, 1, 5, 1),
          options: {
            isWholeLine: true,
            linesDecorationsClassName: 'myLineDecoration',
          },
        },
        {
          range: new monaco.Range(2, 20, 2, 25),
          options: { inlineClassName: 'myInlineDecoration' },
        },
        {
            range: new monaco.Range(6, 20, 6, 25),
            options: { inlineClassName: 'myInlineDecoration' },
          },
      ]
    );
  }
  return (
    <Container>
      <Editor
        height="100%"
        options={options}
        defaultValue={code}
        defaultLanguage={mode}
        theme={theme}
        className={className}
        beforeMount={handleEditorWillMount}
        onMount={handleEditorDidMount}
      />
    </Container>
  );
};

export default MonacoEditor;
