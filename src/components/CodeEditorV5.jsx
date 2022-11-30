import React from 'react';
import sdk from '@stackblitz/sdk';

const CodeEditorV5 = () => {

function embedProject() {
    sdk.embedProjectId('embed', 'my-project', {
      openFile: 'index.ts',
    });
  }
  console.log(document.querySelector('button'))
    return (
        <div>
            <button onClick={() => embedProject()}>Embed project</button>
            <div id="embed"></div>
        </div>
    )
}

export default CodeEditorV5;