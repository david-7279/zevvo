import Link from "next/link"

const menuItems = [
  { label: "Funcionalidades", link: "#" },
  { label: "Preços", link: "#" },
  { label: "FAQ", link: "#" },
]

const Menu = () => {
  return (
    <div className="hidden lg:flex flex-row gap-5 size-fit">
      {menuItems.map((item, index) => (
        <Link key={index} href={item.link} className="group">
          <p className="relative text-sm text-muted-foreground transition-all duration-500
            after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all after:duration-500
            group-hover:after:w-full"
          >
            {item.label}
          </p>
        </Link>
      ))}
    </div>
  )
}

export default Menu