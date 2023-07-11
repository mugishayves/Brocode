import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EditorHome from '../pages/editor/EditorHome'
import EditorSidebar from '../pages/editor/components/EditorSidebar'

export const AppRouter: React.FC = () => {
        return (
                <Routes>
                        <Route path='/' element={<p>Main App Router</p>} />
                </Routes>
        )
}

export const EditorRouter: React.FC = () => {
        return (
                <div className='flex flex-row w-screen h-screen overflow-hidden bg-[#121316] text-white'>
                        <EditorSidebar />
                        <Routes>
                                <Route path="/" element={<EditorHome />} />
                                <Route path="/my-files" element={<p>My files</p>} />
                                <Route path="/shared" element={<p>shared</p>} />
                                <Route path="/community" element={<p>community</p>} />
                                <Route path="/tutorials" element={<p>tutorials</p>} />
                                <Route path="/inbox" element={<p>inbox</p>} />
                                <Route path="/library" element={<p>library</p>} />
                        </Routes>
                </div>

        )
}


export const AdminRouter: React.FC = () => {
        return (
                <Routes>
                        <Route path="/" element={<h1>Admin home</h1>} />
                </Routes>
        )
}