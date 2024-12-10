"use client";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { JSX, SVGProps } from "react";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

interface User {
  name: string;
  role: string;
}

export function Navbar() {
  const { cart, addToCart, increaseQuantity, decreaseQuantity, checkout } =
    useCart();

  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Guardar el usuario en el estado
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Borrar el usuario de localStorage
    setUser(null); // Opcionalmente, puedes limpiar el estado también
    window.location.href = "/"; // Redirigir al usuario a la página de login
  };

  const handleToPedidos = () => {
    window.location.href = "/pedidos"; // Redirigir al usuario a la página de login
  };

  const total = cart
    .reduce(
      (sum, product) =>
        sum + parseFloat(product.precio_producto) * product.cantidad,
      0
    )
    .toFixed(2);

  const router = useRouter();

  useEffect(() => {
    console.log("Router:", router);
  }, [router]);

  const handleViewCart = () => {
    // Verificar si hay un usuario en el localStorage
    const loggedInUser = localStorage.getItem("user"); // Reemplaza "user" con la clave que estés usando
    if (loggedInUser) {
      // Si hay un usuario logueado, redirigir al carrito
      router.push("/carrito");
    } else {
      // Si no hay usuario logueado, redirigir a la página de login
      Swal.fire({
        title: "Atención",
        text: "Porfavor inicia sesion para ver tu carrito",
        icon: "info",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3085d6",
        position: "center", // Se muestra en el centro
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/login?redirect=/carrito");
        }
      });
      // Redirigir a login
    }
  };

  const handleToPerfil = () => {
    router.push("/perfil");
  };

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="/m" className="flex items-center gap-2" prefetch={false}>
            <img
              src="/Logos.png" // Ruta correcta para la imagen en Next.js
              alt="Acme Inc"
              className="h-6 w-auto"
            />
            <span className="text-lg font-semibold">Acme Inc</span>
          </Link>
          <nav className="grid gap-4 py-6">
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Services
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="w-[150px] hidden lg:flex">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <img
            src="/Logosss.png" // Ruta correcta para la imagen en Next.js
            alt="Acme Inc"
            className="h-20 w-auto"
          />
          <span />
        </Link>
      </div>
      <div className="flex w-full justify-center">
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                href="/main"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Inicio
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="/SobreNosotros"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Sobre nosotros
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <div className="relative">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="overflow-hidden rounded-full flex items-center"
            >
              <img
                src="/usuario.png"
                width={36}
                height={36}
                alt="Avatar"
                className="overflow-hidden rounded-full"
                style={{ aspectRatio: "36/36", objectFit: "cover" }}
              />
              {user && <p className="ml-2 text-sm">{user.name}</p>}
            </Button>
          </DropdownMenuTrigger>
          {user ? (
            <DropdownMenuContent align="end">
              <DropdownMenuItem onSelect={handleLogout}>Salir</DropdownMenuItem>
              <DropdownMenuItem onSelect={handleToPedidos}>
                Pedidos
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={handleToPerfil}>
                Perfil
              </DropdownMenuItem>
            </DropdownMenuContent>
          ) : (
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/login">Iniciar sesion</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/registro">Crear una cuenta</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          )}
        </DropdownMenu>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCartIcon className="h-6 w-6" />
              {cart.length > 0 && (
                <span
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                  }}
                  className="absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-xs font-bold leading-none text-white bg-red-600 rounded-full"
                >
                  {cart.length}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Carrito de compras</h4>
                <p className="text-sm text-muted-foreground"></p>
              </div>
              <div className="grid gap-2">
                {cart.map((product, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 items-center gap-4"
                  >
                    <div className="col-span-2">
                      <p className="font-medium">{product.nombre_producto}</p>
                      <p className="text-sm text-muted-foreground">{`${product.precio_producto} COP`}</p>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => decreaseQuantity(product.id_producto)}
                      >
                        <MinusIcon className="h-4 w-4" />
                        <span className="sr-only">Remove</span>
                      </Button>
                      <span>{product.cantidad}</span>{" "}
                      {/* Mostrar la cantidad actual */}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => increaseQuantity(product.id_producto)}
                      >
                        <PlusIcon className="h-4 w-4" />
                        <span className="sr-only">Add</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between">
                <p className="font-medium">Total</p>
                <p className="font-medium">{`${total} COP`}</p>
              </div>
              <div className="flex flex-col gap-2 lg:flex-row">
                <Button size="lg" onClick={checkout}>
                  Continuar
                </Button>
                <Button variant="outline" size="lg" onClick={handleViewCart}>
                  Ver carrito
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="11" cy="11" r="8" />
      <line x1="21" x2="16.65" y1="21" y2="16.65" />
    </svg>
  );
}

function ShoppingCartIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l1.68 9.39a5 5 0 005 4.61h7.72a5 5 0 005-4.61L23 6H6" />
    </svg>
  );
}

function MinusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="5" x2="19" y1="12" y2="12" />
    </svg>
  );
}

function PlusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="12" x2="12" y1="5" y2="19" />
      <line x1="5" x2="19" y1="12" y2="12" />
    </svg>
  );
}
