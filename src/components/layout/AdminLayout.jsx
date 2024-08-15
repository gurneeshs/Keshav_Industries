import Sidebar from "../common/Sidebar"
const AdminLayout = ({ children }) => {
    return (
        <div className='flex h-screen bg-customBackG text-gray-100 overflow-hidden'>
            {/* BG */}
            <div className='fixed inset-0 z-0'>
                <div className='absolute inset-0 bg-gradient-to-br from-bg-customBackG via-gray-800 to-bg-customBackG opacity-80' />
                <div className='absolute inset-0 backdrop-blur-sm' />
            </div>
            <Sidebar/>
            { children }
        </div>
    )
}

export default AdminLayout
