'use client'
interface CardWrapperProps {
children:  React.ReactNode,
headerLabel: string,
backButtonLabel: string,
backButtonHref: string,
showSoical?: boolean

}
export  function CardWrapper({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSoical,
} : CardWrapperProps) {
  return (
    <div>card-wrapper</div>
  )
}
