import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CustomEditor() {
    const [editorHtml, setEditorHtml] = useState('');
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    let synth = null;

    if ('speechSynthesis' in window) {
        synth = window.speechSynthesis;
    }

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setEditorHtml(editorHtml + transcript);
    };

    const handleVoiceButtonClick = () => {
        recognition.start();
    };

    const handleReadAloud = () => {
        if (synth) {
            const utterance = new SpeechSynthesisUtterance(editorHtml);
            synth.speak(utterance);
        } else {
            console.log('Speech synthesis is not available in this browser.');
        }
    };

    const handleInsertFile = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*'; // Adjust accepted file types as needed

        input.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const imageUrl = URL.createObjectURL(file);
                const imageElement = `<img src="${imageUrl}" alt="Inserted File" />`;
                setEditorHtml(editorHtml + imageElement);
            }
        });

        input.click();
    };

    const handleChange = (html) => {
        setEditorHtml(html);
    };

    const quillModules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image', 'video'],
            ['file'], // Add the custom file button
        ],
        // ... Add more modules here if needed
    };

    const quillFormats = [
        'bold', 'italic', 'underline', 'strike',
        'list', 'bullet', 'link', 'image', 'video'
        // ... Add more formats here if needed
    ];

    return (
        <div>
            <button onClick={handleVoiceButtonClick}>Start Voice</button>
            <button onClick={handleReadAloud}>Read Aloud</button>
            <button onClick={handleInsertFile}>File</button>

            <ReactQuill
                value={editorHtml}
                onChange={handleChange}
                modules={quillModules}
                formats={quillFormats}
            />
        </div>
    );
}

export default CustomEditor;
