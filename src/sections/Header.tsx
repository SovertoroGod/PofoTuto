export const Header = () => {
  return <div className="flex justify-center items-center fixed top-3 w-full z-10">
    <nav className="flex gap-1 p-0.5 border border-white/20 rounded-full bg-white/10 backdrop-blur">
      <a href="" className="nav-item">Home</a>
      <a href="" className="nav-item">Project</a>
      <a href="" className="nav-item">About</a>
      <a href="" className="nav-item bg-white text-gray-900 hover:text-white/80 hover:bg-white/30">Contact</a>

    </nav>
  </div>;
};
