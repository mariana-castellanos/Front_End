import Link from "next/link"
import { SVGProps } from "react"

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground p-6 md:p-14">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="grid gap-4">
          <h3 className="text-lg font-semibold">Contacto</h3>
          <div className="grid gap-2 text-sm">
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5" />
              <span>Teléfono: 3105751123</span>
            </div>
            <div className="flex items-center gap-2">
              <InstagramIcon className="h-5 w-5" />
              <Link href="#" prefetch={false}>
                @detalles.omega
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5" />
              <span>Carrera 100 #139, Bogotá, Colombia</span>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <h3 className="text-lg font-semibold">Sobre Nosotros</h3>
          <div className="grid gap-2 text-sm">
            <p>
              Somos una empresa dedicada a brindar soluciones innovadoras a nuestros clientes. Nos esforzamos por la
              excelencia y la sostenibilidad en todo lo que hacemos.
            </p>
            <p>Nuestros valores son la integridad, la innovación y el compromiso con la comunidad.</p>
          </div>
        </div>
        <div className="grid gap-4">
          <h3 className="text-lg font-semibold">Enlaces Útiles</h3>
          <div className="grid gap-2 text-sm">
            <Link href="#" prefetch={false}>
              Inicio
            </Link>
            <Link href="#" prefetch={false}>
              Portafolio
            </Link>
            <Link href="#" prefetch={false}>
              Políticas
            </Link>
            <Link href="#" prefetch={false}>
              Cookies
            </Link>
          </div>
        </div>
        <div className="grid gap-4">
          <h3 className="text-lg font-semibold">Métodos de Pago</h3>
          <div className="grid gap-2 text-sm">
            <div className="flex items-center gap-2">
              <DollarSignIcon className="h-5 w-5" />
              <span>Efectivo</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-7xl mt-8 text-center text-sm">
        <p>&copy; 2024 Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

function CreditCardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}

function DollarSignIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function MapPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function WalletCardsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
      <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" />
    </svg>
  )
}