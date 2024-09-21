import React from "react"
import Image from "next/image"

export default function Sidebar() {
  return (
    <aside className="text-white w-16 flex flex-col items-center py-4 h-screen">
      <div className="space-y-6">
        <SidebarIcon icon="/firefox.svg" alt="Firefox" />
        <SidebarIcon icon="/folder.svg" alt="My Favorites" />
        <SidebarIcon icon="/home.svg" alt="Home" />
        <SidebarIcon icon="/folder-generic.svg" alt="Generic Folder" />
        <SidebarIcon icon="/target.svg" alt="Target" />
        <SidebarIcon icon="/document.svg" alt="Document" />
        <SidebarIcon icon="/help.svg" alt="Help" />
        <SidebarIcon icon="/terminal.svg" alt="Terminal" />
        <SidebarIcon icon="/recycle.svg" alt="Recycle Bin" />
      </div>
    </aside>
  )
}

const SidebarIcon: React.FC<{ icon: string; alt: string }> = ({
  icon,
  alt,
}) => {
  return (
    <button className="p-2 rounded-md hover:bg-purple-800 transition-colors">
      <Image src={icon} width={24} height={24} alt={alt} />
    </button>
  )
}
