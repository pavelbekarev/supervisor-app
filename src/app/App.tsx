import { Outlet } from 'react-router-dom';
import "./styles/index.scss"
import Modal from '#shared/ui/Modal';

function App() {
  return (
    <>
      <Outlet />
      <Modal />
    </>
  )
}

export default App
