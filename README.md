# Code Sync - A Realtime Code Editor

![screenshot](./screenshots/preview.png)

Code Sync is a collaborative, real-time code editor where users can seamlessly code together. It provides a platform for multiple users to enter a room, share a unique room ID, and collaborate on code simultaneously.

![GitHub contributors](https://img.shields.io/github/contributors/ankitrajrules/Code-Sync?style=for-the-badge&color=48bf21)
![GitHub License](https://img.shields.io/github/license/sahilatahar/Code-Sync?style=for-the-badge&color=e67234)


## 🔮 Features
-  💻 Seamless real-time collaboration on code editing across various files
-  🚀 Innovative room generation featuring unique room IDs to facilitate collaboration
-  🌈 Dynamic syntax highlighting for a diverse range of file types, coupled with automatic language detection
-  💡 Intelligent auto-suggestion based on the programming language in use
-  ⏱️ Swift and instantaneous updates ensuring synchronization of code changes across all files
-  📣 Noteworthy notifications alerting users about join and leave events
-  🎨 A plethora of themes available for a personalized and visually appealing coding experience
-  🌍 Extensive language support catering to a wide spectrum of programming languages
-  🔠 Flexibility to customize font size and font family to suit individual preferences
-  👥 User presence list providing real-time information on participants in the collaboration session, complete with online/offline status indicators
-  📁 Effortless management with open, edit, save, and delete file functionalities
-  💾 Convenient option to download files edited during the collaboration session
-  💬 Engage in group chatting for effective real-time communication while actively collaborating on code.

## 🚀 Live Preview
Live Project [here](https://code-sync-ankitrajrules.netlify.app/).

## 💻 Tech Stack

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Socket io](https://img.shields.io/badge/Socket.io-ffffff?style=for-the-badge)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## 📂 Folder Structure

```
backend/
├── utils/
│   └── actions.js
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── server.js

frontend/
├── public/
│   ├── favicon/
│   │   └── ...
│   └── style.css    # Tailwind output
├── src/
│   ├── assets/
│   │   └── ...
│   ├── components/
│   │   ├── chats/
│   │   │   ├── ChatInput.jsx
│   │   │   └── ChatList.jsx
│   │   ├── common/
│   │   │   ├── Clients.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Select.jsx
│   │   ├── editor/
│   │   │   ├── Editor.jsx
│   │   │   └── EditorComponent.jsx
│   │   ├── files/
│   │   │   ├── FileEditor.jsx
│   │   │   └── FileSystem.jsx
│   │   ├── forms/
│   │   │   └── FormComponent.jsx
│   │   ├── loading/
│   │   │   └── Loading.jsx
│   │   ├── sidebar/
│   │   │   └── Sidebar.jsx
│   │   ├── tabs/
│   │   │   ├── ChatsTab.jsx
│   │   │   ├── ClientsTab.jsx
│   │   │   ├── FileTab.jsx
│   │   │   ├── SettingsTab.jsx
│   │   │   └── TabButton.jsx
│   │   ├── toast/
│   │   │   └── Toast.jsx
│   │   ├── GitHubCorner.jsx
│   │   └── SplitterComponent.jsx
│   ├── context/
│   │   ├── AppContext.jsx
│   │   ├── AppProvider.jsx
│   │   ├── ChatContext.jsx
│   │   ├── FileContext.jsx
│   │   └── TabContext.jsx
│   ├── hooks/
│   │   ├── useChatRoom.jsx
│   │   ├── useFileSystem.jsx
│   │   ├── useLocalStorage.jsx
│   │   ├── usePageEvents.jsx
│   │   ├── useClientActivity.jsx
│   │   └── useWindowDimensions.jsx
│   ├── layouts/
│   │   └── EditorLayout.jsx
│   ├── pages/
│   │   ├── EditorPage.jsx
│   │   └── HomePage.jsx
│   ├── resources/
│   │   ├── Font.js
│   │   ├── Languages.js
│   │   └── Themes.js
│   ├── socket/
│   │   ├── useSocket.jsx
│   │   └── socket.js
│   ├── utils/
│   │   ├── actions.js
│   │   ├── editorPlaceholder.js
│   │   ├── formateDate.js
│   │   ├── initialFile.js
│   │   ├── socketStatus.js
│   │   └── tabs.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vercel.json
└── vite.config.js

screenshots/
CONTRIBUTING.md
LICENSE
README.md
```

## ⚙️ Installation

1. **Fork this repository:** Click the Fork button located in the top-right corner of this page to fork the repository.
2. **Clone the repository:**
    ```bash
    git clone https://github.com/<your-username>/Code-Sync.git
    ```
3. **Set .env file:**
   Inside the client and server directory, create or edit the .env file and add the following line:  
   Frontend:

    ```bash
    VITE_BACKEND_URL=<your_server_url>
    ```

    Backend:

    ```bash
    PORT=3000
    MONGO_URI=<your_mongodb_connection_string>
    ```

4. **Install dependencies:**
   Navigate to the frontend and backend directories separately and run:
    ```bash
     npm install
    ```
5. **Start the frontend and backend servers:**  
   Frontend:
    ```bash
    cd client
    npm run dev
    ```
    Backend:
    ```bash
    cd server
    npm run dev
    ```
6. **Access the application:**
   Open a browser and enter the following URL:
    ```bash
    http://localhost:5173/
    ```

## 🔮 Features for next release

-   **Admin Permission:** Implement an admin permission system to manage user access levels and control over certain platform features.
-   **Search and Replace:** Implement a search and replace functionality for efficient code navigation.

## 🤝 Contribute

We welcome contributions to make Code Sync even better! Whether you're reporting a bug, suggesting a new feature, or fixing a typo, your input is valuable to us. Follow the [contribution guidelines](CONTRIBUTING.md) to get started.

## 🌟 Support Us

If you find this helpful or valuable, please consider 🌟 starring the repository. It helps us gain visibility and encourages further development. We appreciate your support!

## 🧾 License

This project is licensed under the [MIT License](LICENSE).
