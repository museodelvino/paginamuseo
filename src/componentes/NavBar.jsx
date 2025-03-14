import React, { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const navigation = {
  categories: [],
  pages: [
    { name: 'Museo del Vino', href: '#' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="background">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto back pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  <Link to="/" className="-m-2 block p-2 font-medium text-white no-underline">Inicio</Link>
                  <Link to="/suscripciones" className="-m-2 block p-2 font-medium text-white no-underline">Suscripciones</Link>
                  <Link to="/degustaciones" className="-m-2 block p-2 font-medium text-white no-underline">Degustaciones</Link>
                  <Link to="/contacto" className="-m-2 block p-2 font-medium text-white no-underline">Contacto</Link>
                </div>

                <div className="border-t border-gray-200 py-6 px-4">
                  <a href="#" className="-m-2 flex items-center p-2 no-underline">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/197/197573.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-white">Mendoza, Argentina</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative back text-white border-b border-gray-600 min-h-[140px] flex items-center">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between w-full">
            {/* Menu button for mobile */}
            <button
              type="button"
              className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <Link to="/">
                <img
                  className="logo"
                  src="https://dcdn-us.mitiendanube.com/stores/002/090/323/themes/common/logo-1946241728-1725973095-7af00787e672145dd792791735c70a481725973095-320-0.webp"
                  alt="Logo"
                />
              </Link>
            </div>

            {/* Navbar Links */}
            <div className="hidden lg:flex lg:space-x-8 lg:ml-auto">
              <Link to="/" className="text-m font-medium text-white hover:text-gray-900 no-underline">
                Inicio
              </Link>
              <Link to="/suscripciones" className="text-m font-medium text-white hover:text-gray-900 no-underline">
                Suscripciones
              </Link>
              <Link to="/degustaciones" className="text-m font-medium text-white hover:text-gray-900 no-underline">
                Degustaciones
              </Link>
              <Link to="/contacto" className="text-m font-medium text-white hover:text-gray-900 no-underline">
                Contacto
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
