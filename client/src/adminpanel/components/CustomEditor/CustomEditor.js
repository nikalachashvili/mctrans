import { useEffect, useState } from 'react';
import { convertToRaw, EditorState, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs'; // აუცილებელია HTML-ის კონვერტაციისთვის
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './CustomEditor.module.scss';

const CustomEditor = ({ onChange, name, section, title, value }) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [initialized, setInitialized] = useState(false); // ვიყენებთ ერთჯერად ჩასატვირთად

    useEffect(() => {
        if (value && !initialized) {
            const contentBlock = htmlToDraft(value);
            if (contentBlock) {
                const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
                const newEditorState = EditorState.createWithContent(contentState);
                setEditorState(newEditorState);
                setInitialized(true);
            }
        }
    }, [value, initialized]);

    const handleEditorChange = (state) => {
        setEditorState(state);
        const html = draftToHtml(convertToRaw(state.getCurrentContent()));
        onChange(section, name, html);
    };

    const uploadImageCallBack = async (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                resolve({ data: { link: reader.result } });
            };
            reader.readAsDataURL(file);
        });
    };

    return (
        <div className={styles.customeditor}>
            <p className={styles.customeditor__title}>{title}</p>
            <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
                toolbar={{
                    options: [
                        'inline', 'blockType', 'fontSize', 'list',
                        'textAlign', 'colorPicker', 'link', 'emoji',
                        'remove', 'history', 'image'
                    ],
                    image: {
                        uploadEnabled: true,
                        uploadCallback: uploadImageCallBack,
                        previewImage: true,
                        alt: { present: true, mandatory: false },
                    },
                }}
                wrapperClassName={styles.customeditor__wrap}
                editorClassName={styles.customeditor__input}
            />
        </div>
    );
};

export default CustomEditor;
