import './build/tailwind.css';
import * as React from "react";
import { Routes, Route} from "react-router-dom";

import { TaskHome } from './component/TaskHome';
import { TaskLogin } from './component/TaskLogin';
import { TaskForm } from './component/TaskForm';
import { TaskView } from './component/TaskView';
import { TaskRegister } from './component/TaskRegister';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TaskHome />} />
      <Route path="/login" element={<TaskLogin />} />
      <Route path="/register" element={<TaskRegister />} />
      <Route path="/form" element={<TaskForm />} />
      <Route path="/view" element={<TaskView />} />

    </Routes>
  )
}

export default App;