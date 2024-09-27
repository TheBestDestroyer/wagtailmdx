import React from 'react';
import ReactDOM from 'react-dom';
import {
    MDXEditor, headingsPlugin,
    listsPlugin,
    quotePlugin,
    thematicBreakPlugin,
    markdownShortcutPlugin,
    DiffSourceToggleWrapper,
    toolbarPlugin,
    UndoRedo,
    diffSourcePlugin,
    jsxPlugin,
} from '@mdxeditor/editor'; // Import the MDXEditor component
import { Controller } from '@hotwired/stimulus';
import '@mdxeditor/editor/style.css'; // Import styles for the MDXEditor component

// Include your definitions for your MDX components here.
// See https://mdxeditor.dev/editor/docs/jsx
// EXAMPLE:
//{
//    name: 'ImageBlock',
//    kind: 'flow',
//    props: [{ name: 'imageIds', type: 'expression' }],
//    hasChildren: false,
//    Editor: GenericJsxEditor
//
//}
// For a component defined like this.
// export default async function ImageBlock({ imageIds }: {imageIds: number[],}) {...};
const jsxComponentDescriptors = [
   {}
]

class MDXEditorController extends Controller {
    connect() {
        var initMarkdown = this.element.value;

        this.editorWrapper = document.createElement("div");
        this.element.insertAdjacentElement(
            'afterend', this.editorWrapper)

        const root = ReactDOM.createRoot(this.editorWrapper);
        // Render the MDXEditor component directly into the root
        // You can also adjust the look of the editor here
        // See here https://mdxeditor.dev/editor/docs/customizing-toolbar
        root.render(
            <MDXEditor className="dark-theme" markdown={initMarkdown || ''}
                onChange={(markdown) => { this.element.value = markdown; }}
                plugins={[
                    headingsPlugin(),
                    listsPlugin(),
                    quotePlugin(),
                    thematicBreakPlugin(),
                    markdownShortcutPlugin(),
                    toolbarPlugin({
                        toolbarContents: () => (
                            <DiffSourceToggleWrapper>
                                <UndoRedo />
                            </DiffSourceToggleWrapper>
                        )
                    }),
                    jsxPlugin({jsxComponentDescriptors}),
                    diffSourcePlugin({ diffMarkdown: initMarkdown || '', viewMode: 'rich-text' })
                ]}
            />
        );
    }

    disconnect() {
        this.editorWrapper.remove();
    }
}

window.wagtail.app.register('mdx', MDXEditorController);