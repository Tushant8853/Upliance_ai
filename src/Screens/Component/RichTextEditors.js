import React, { useState, useEffect, useRef } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
} from "draft-js";
import "draft-js/dist/Draft.css";

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(() => {
    const savedContent = localStorage.getItem("editorContent");
    return savedContent
      ? EditorState.createWithContent(convertFromRaw(JSON.parse(savedContent)))
      : EditorState.createEmpty();
  });

  const editorRef = useRef(null);

  useEffect(() => {
    const content = editorState.getCurrentContent();
    localStorage.setItem("editorContent", JSON.stringify(convertToRaw(content)));
  }, [editorState]);

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const toggleInlineStyle = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const toggleBlockType = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const focusEditor = () => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
  };

  return (
    <div style={styles.editorContainer}>
      <div style={styles.buttonContainer}>
        <div style={styles.editorButtons}>
          <button style={styles.button} onClick={() => toggleInlineStyle("BOLD")}>
            Bold
          </button>
          <button style={styles.button} onClick={() => toggleInlineStyle("ITALIC")}>
            Italic
          </button>
          <button style={styles.button} onClick={() => toggleInlineStyle("UNDERLINE")}>
            Underline
          </button>
          <button style={styles.button} onClick={() => toggleBlockType("unordered-list-item")}>
            Bullet List
          </button>
          <button style={styles.button} onClick={() => toggleBlockType("ordered-list-item")}>
            Numbered List
          </button>
        </div>
      </div>
      <div style={styles.editorBox} onClick={focusEditor}>
        <Editor
          ref={editorRef}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={setEditorState}
        />
      </div>
    </div>
  );
};

const styles = {
  editorContainer: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    marginBottom: "10px",
  },
  editorButtons: {
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "8px 15px",
    fontSize: "14px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    background: "linear-gradient(135deg, #6e8efb, #a777e3)",
    color: "#fff",
    transition: "0.3s ease-in-out",
  },
  buttonHover: {
    background: "linear-gradient(135deg, #5a7bf1, #9266db)",
  },
  editorBox: {
    border: "1px solid #ddd",
    marginTop: "10px",
    height:"80%",
    cursor: "text",
    backgroundColor: "#fff",
    borderRadius: "5px",
  },
};

export default RichTextEditor;
