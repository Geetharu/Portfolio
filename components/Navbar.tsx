export default function Navbar() {
    return (
      <nav className="flex justify-between items-center p-4 shadow">
        <h1 className="text-2xl font-bold text-pink-500">Geeth</h1>
        <div className="flex gap-4">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    )
  }
  