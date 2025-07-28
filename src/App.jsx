import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';

import Login from './components/LoginPage/Login.jsx';
import Dashboard from './components/DashboardPage/Dashboard.jsx';
import Kanban from './components/KanbanPage/Kanban.jsx';
import Inventory from './components/InventoryPage/Inventory.jsx';
import BasicLayout from './components/BasicLayout/BasicLayout.jsx';

// import for the InventoryIdleChart component
import IdleScreen from './components/InventoryIdleChart/IdleScreen.jsx';

// import for coming soon pages that havent yet been implemented
import ComingSoon from './components/ComingSoon/ComingSoon.jsx';


/* add this router to the app when needed */
function App () {
    return (
        <BrowserRouter> 
            <Routes>
                {/* This route has its own layout */}
                <Route path="/" element={<Login />} />
                <Route path="idleScreen" element={<IdleScreen />} />

                {/* These route share the same Basic Layout */}
                <Route element={<BasicLayout />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="kanban" element={<Kanban />} />
                    <Route path="inventory" element={<Inventory />} />
                    <Route path="comingSoon" element={<ComingSoon />} />
                </Route>
            </Routes>
        </BrowserRouter>        
    );
}

export default App;