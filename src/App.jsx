import { BrowserRouter } from 'react-router-dom';

import React from 'react';
import Login from './components/LoginPage/Login.jsx';

// import these when needed 
import Dashboard from './components/DashboardPage/Dashboard.jsx';
import Kanban from 'src/components/KanbanPage/Kanban.jsx';
import Inventory from 'src/components/KanbanPage/Kanban.jsx';
*/ 

/* this might need to be removed, find out how to use the basic layout on 
all the other css files connected to each component. So that I dont have 
a million css files to change on each time i need a basic layout change */
import BasicLayout from './components/BasicLayout/BasicLayout.jsx';

export default function App() {
    return (
        <>
            <BasicLayout />
        </>
    )
}

/* add this router to the app when needed */
/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/inventory" element={<Inventory />} />
    </Routes> 
*/