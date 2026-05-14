import BasicProps from "./components/BasicProps"
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import RefProps from "./components/RefProps";
import ThemeToggler, { Themeprovider, useTheme } from "./components/ThemeToggler";

function Navigation() {

  const Sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "ref Props", icon: "🔗" },
    { id: "children", label: "children Props", icon: "👶" },
    { id: "complex", label: "complex Props", icon: "🧩" },
    { id: "theme", label: "theme Props", icon: "🎨" },
  ];
  return (
    <nav>
      <div>
        <div className={`flex text-white justify-center gap-3 mt-2 `}>
          {Sections.map((Section) => (
            <button className={`bg-amber-500 px-5 py-1 rounded-xl`} key={Section.id}><span>{Section.icon}</span>{Section.label}</button>
          ))}
        </div>
      </div>
    </nav>
  )
}

function AppContent() {
  const { isDark } = useTheme()
  return (
    <div className={`${isDark ? "bg-black" : "bg-white"}`}>
      <Navigation />
      <div className={`container mx-auto px-5 py-2 `}>
        <BasicProps />
        <ChildrenProps />
        <ComplexProps />
        <RefProps />
        <ThemeToggler />
      </div></div>
  )
}


export default function App() {
  return (
    <><Themeprovider><AppContent /></Themeprovider>

      <h1 className="text-white">hello world</h1>
    </>
  )
}