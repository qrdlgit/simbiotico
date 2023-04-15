# simbiotico
GPT / Human collaboration mindmap tool using OpenAI ChatGPT API.  Brainstorm with ChatGPT to create comprehensive mindmaps.  Not only use ChatGPT to provide suggestions, but also chat with it in depth and extensively about your mindmap.  Ask ChatGPT questions, and have ChatGPT ask you questions about it.

To use, download the RAW [html file]([https://github.com/qrdlgit/simbiotico/blob/main/dist/simbiotico.html](https://raw.githubusercontent.com/qrdlgit/simbiotico/main/dist/simbiotico.html) onto your local machine and run it in your browser as a local file.  This format was chosen to guarantee that your API key never leaves your computer except to communicate with the OpenAI API server.

# Help

Creating a new map and setting the map name:
- Change the URL to `file://<path>/simbiotico.html?map=[map_name]`
- This format was chosen for easy bookmarking in your web browser

Security:
- The security of your OpenAI API key is important. Efforts have been made with this app to ensure its safety.
- This code is open source and not minified, making it easily reviewable.
- Your API key is not stored locally in any persistent storage and must be entered each time you load this page.
- All imports have SRI hashes, and external code has been reviewed for potential issues.
- This app is fairly lightweight in its usage, but make sure you have a spending limit on your OpenAI account. You can see token count usage in the settings page.

Interacting with the mindmap:
- Mouse click to select a node, double-click to edit, press Enter to save
- You can either click and drag your mouse to pan the mindmap, or use mousewheel / two-finger gestures on touchpad to scroll the mindmap vertically or horizontally if it's larger in those dimensions (respectively) to the screen.
- Mouse drag nodes to move to another node
- Mouse click small circle to expand/collapse
- Press Enter to create a sibling node
- Press Ctrl-Enter to create a child node
- Press Delete to delete a node

Note that maps are autosaved via the IndexedDB API, browser-based storage that is only accessible by the same origin. In other words, your maps can only be accessed from where this page is being served from. Be careful when using other browser-based applications you save/serve from the same location, as they can access the IndexDB API storage. Use only code that is openly reviewable, open source, or from a trusted entity.

![image](https://user-images.githubusercontent.com/129564070/232127191-4db0f0e4-cc71-4b58-aa42-ba2651890a6b.png)

![image](https://user-images.githubusercontent.com/129564070/232118343-50c8f300-19d9-4a94-b08f-b2048b292fb6.png)

![image](https://user-images.githubusercontent.com/129564070/232118552-5c3df61f-de38-4213-b6ce-65d9b736e1f7.png)


