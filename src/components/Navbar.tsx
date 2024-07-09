import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => { navigate('/') }
        },
        {
            label: 'Notas',
            icon: 'pi pi-pen-to-square',
            command: () => { navigate('/notas') }
        },
        {
            label: 'Contacto',
            icon: 'pi pi-envelope',
            command: () => { navigate('/contacto') }
        }
    ];
    
    return (
        <div className=" max-w-[1000px] m-auto card mb-3 sticky top-1 z-5">
            <Menubar model={items} />
        </div>
    )
}
