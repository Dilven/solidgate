import { ReactNode } from "react"

interface Props {
    readonly children: ReactNode;
    readonly label: string
    readonly className?: string
  }
  
export const Section = ({ label, children, className }: Props) => {
    return (
        <section aria-label={label} className={className}>{children}</section>
    )
}