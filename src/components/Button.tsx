import classNames from "classnames"

type ButtonProps = {
  children: React.ReactNode
  variant: "primary" | "secondary" | "incognito"
  className?: string
  type?: "button" | "submit" | "reset"
  href?: string
  external?: boolean
  onClick?(): void
}

const VARIANT_STYLES = {
  primary: "bg-secondary",
  secondary: "",
  incognito: "",
}

export const Button = ({
  children,
  variant,
  href,
  className,
  external = false,
  type = "button",
  onClick,
}: ButtonProps) => {
  if (!href && !onClick) return null

  if (href) {
    return (
      <a
        href={href}
        className={classNames(
          "rounded-md px-4 py-2 outline-none",
          VARIANT_STYLES[variant],
          className
        )}
        target={external ? "_blank" : ""}
        rel={external ? "noopener noreferrer" : ""}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={classNames(
        "rounded-md px-4 py-2 outline-none",
        VARIANT_STYLES[variant],
        className
      )}
    >
      {children}
    </button>
  )
}
