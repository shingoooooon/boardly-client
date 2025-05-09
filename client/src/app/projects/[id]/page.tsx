"use client"
import React, { use, useState } from 'react'
import ProjectHeader from '@/app/projects/projectHeader'
import Board from '../boardView'
import List from '../ ListView'

type Props = {
    params: { id: string }
}

const Project = ({ params }: Props) => {
    const { id } = params
    const [activeTab, setActiveTab] = useState("Board")
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false)

    return (
        <div>
            {/* MODAL NEW TASK */}
            <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === "Board" && (
                <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
            {activeTab === "List" && (
                <List id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
        </div>
    )
}

export default Project;
