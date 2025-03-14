// import { Fragment, useState } from 'react'
// import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
// import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import CartWidget from './CartWidget'
// import { Link } from 'react-router-dom'

// const navigation = {
//   categories: [
//   ],
//   pages: [
//     { name: 'Museo del Vino', href: '#' },
//     // { name: 'Stores', href: '#' },
//   ],
// }

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function NavBar() {
//   const [open, setOpen] = useState(false)

//   return (
//     <div className="background">
//       {/* Mobile menu */}
//       <Transition.Root show={open} as={Fragment}>
//         <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
//           <Transition.Child
//             as={Fragment}
//             enter="transition-opacity ease-linear duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="transition-opacity ease-linear duration-300"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0  bg-opacity-25" />
//           </Transition.Child>

//           <div className="fixed inset-0 z-40 flex">
//             <Transition.Child
//               as={Fragment}
//               enter="transition ease-in-out duration-300 transform"
//               enterFrom="-translate-x-full"
//               enterTo="translate-x-0"
//               leave="transition ease-in-out duration-300 transform"
//               leaveFrom="translate-x-0"
//               leaveTo="-translate-x-full"
//             >
//               <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto  back  pb-12 shadow-xl">
//                 <div className="flex px-4 pt-5 pb-2">
//                   <button
//                     type="button"
//                     className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
//                     onClick={() => setOpen(false)}
//                   >
//                     <span className="sr-only">Close menu</span>
//                     <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                   </button>
//                 </div>

//                 {/* Links */}
//                 <Tab.Group as="div" className="mt-2">
//                   <div className="border-b border-gray-200">
//                     <Tab.List className="-mb-px flex space-x-8 px-4">
//                       {navigation.categories.map((category) => (
//                         <Tab
//                           key={category.name}
//                           className={({ selected }) =>
//                             classNames(
//                               selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
//                               'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
//                             )
//                           }
//                         >
//                           {category.name}
//                         </Tab>
//                       ))}
//                     </Tab.List>
//                   </div>
//                   <Tab.Panels as={Fragment}>
//                     {navigation.categories.map((category) => (
//                       <Tab.Panel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
//                         <div className="grid grid-cols-2 gap-x-4">
//                           {category.featured.map((item) => (
//                             <div key={item.name} className="group relative text-sm">
//                               <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
//                                 <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
//                               </div>
//                               <a href={item.href} className="mt-6 block font-medium text-gray-900">
//                                 <span className="absolute inset-0 z-10" aria-hidden="true" />
//                                 {item.name}
//                               </a>
//                             </div>
//                           ))}
//                         </div>
//                         {category.sections.map((section) => (
//                           <div key={section.name}>
//                             <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
//                               {section.name}
//                             </p>
//                             <ul
//                               role="list"
//                               aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
//                               className="mt-6 flex flex-col space-y-6"
//                             >
//                               {section.items.map((item) => (
//                                 <li key={item.name} className="flow-root">
//                                   <a href={item.href} className="-m-2 block p-2 text-gray-500 ">
//                                     {item.name}
//                                   </a>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         ))}
//                       </Tab.Panel>
//                     ))}
//                   </Tab.Panels>
//                 </Tab.Group>
                
//                 {/* navbar responsivue */}
//                 <div className="space-y-6 border-t border-gray-200 py-6 px-4">
//                   {navigation.pages.map((page) => (
//                     <div key={page.name} className="flow-root ">
//                       <a href={page.href} className="block p-2 font-medium text-white no-underline">
//                         {page.name}
//                       </a>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="space-y-6 border-t border-gray-200 py-6 px-4">

//                   {/* navbar responsive */}
//                   <div className="flow-root">
//                   <Link to="/" className="-m-2 block p-2 font-medium text-white no-underline">
//                     Inicio
//                   </Link>
//                   </div>

//                   <div className="flow-root">
//                     <Link to="/suscripciones" className="-m-2 block p-2 font-medium text-white no-underline">
//                       Suscripciones
//                     </Link>
//                   </div>

//                   <div className="flow-root">
//                     <Link to="/degustaciones" className="-m-2 block p-2 font-medium text-white no-underline">
//                       Degustaciones
//                     </Link>
//                   </div>

//                   <div className="flow-root">
//                     <Link to="/contacto" className="-m-2 block p-2 font-medium text-white no-underline">
//                       Contacto
//                     </Link>
//                   </div>
//                 </div>

//                 <div className="border-t border-gray-200 py-6 px-4">
//                   <a href="#" className="-m-2 flex items-center p-2 no-underline">
//                     <img
//                       src="https://cdn-icons-png.flaticon.com/512/197/197573.png"
//                       alt=""
//                       className="block h-auto w-5 flex-shrink-0"
//                     />
//                     <span className="ml-3 block text-base font-medium text-white ">Mendoza, Argentina</span>
//                     <span className="sr-only">, change currency</span>
//                   </a>
//                 </div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition.Root>

//       <header className="relative back text-white border-b border-gray-600 min-h-[140px] flex items-center">

//         <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="">
//             <div className="flex items-center nav-container">
//               <button
//                 type="button"
//                 className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
//                 onClick={() => setOpen(true)}
//               >
//                 <span className="sr-only">Open menu</span>
//                 <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//               </button>

//               {/* Logo */}
//               <div className="ml-4 flex lg:ml-0">
//                 <Link to="/">
//                 <a href="#">
//                   <span className="sr-only">Your Company</span>
//                   <img
//                     className="h-8 w-auto logo"
//                     src="https://dcdn-us.mitiendanube.com/stores/002/090/323/themes/common/logo-1946241728-1725973095-7af00787e672145dd792791735c70a481725973095-320-0.webp"
//                     alt=""
//                   />
//                 </a>
//                 </Link>
//               </div>

//               {/* Flyout menus */}
//               <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
//                 <div className="flex h-full space-x-8">
//                   {navigation.categories.map((category) => (
//                     <Popover key={category.name} className="flex">
//                       {({ open }) => (
//                         <>
//                           <div className="relative flex">
//                             <Popover.Button
//                               className={classNames(
//                                 open
//                                   ? 'border-indigo-600 text-indigo-600'
//                                   : 'border-transparent text-gray-700 hover:text-gray-800',
//                                 'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
//                               )}
//                             >
//                               {category.name}
//                             </Popover.Button>
//                           </div>

//                           <Transition
//                             as={Fragment}
//                             enter="transition ease-out duration-200"
//                             enterFrom="opacity-0"
//                             enterTo="opacity-100"
//                             leave="transition ease-in duration-150"
//                             leaveFrom="opacity-100"
//                             leaveTo="opacity-0"
//                           >
//                             <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
//                               {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
//                               <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

//                               <div className="relative bg-white">
//                                 <div className="mx-auto max-w-7xl px-8">
//                                   <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
//                                     <div className="col-start-2 grid grid-cols-2 gap-x-8">
//                                       {category.featured.map((item) => (
//                                         <div key={item.name} className="group relative text-base sm:text-sm">
//                                           <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
//                                             <img
//                                               src={item.imageSrc}
//                                               alt={item.imageAlt}
//                                               className="object-cover object-center"
//                                             />
//                                           </div>
//                                           <a href={item.href} className="mt-6 block font-medium text-gray-900">
//                                             <span className="absolute inset-0 z-10" aria-hidden="true" />
//                                             {item.name}
//                                           </a>
//                                           <p aria-hidden="true" className="mt-1">
//                                             Shop now
//                                           </p>
//                                         </div>
//                                       ))}
//                                     </div>
//                                     <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
//                                       {category.sections.map((section) => (
//                                         <div key={section.name}>
//                                           <p id={`${section.name}-heading`} className="font-medium text-gray-900">
//                                             {section.name}
//                                           </p>
//                                           <ul
//                                             role="list"
//                                             aria-labelledby={`${section.name}-heading`}
//                                             className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
//                                           >
//                                             {section.items.map((item) => (
//                                               <li key={item.name} className="flex">
//                                                 <a href={item.href} className="hover:text-gray-800">
//                                                   {item.name}
//                                                 </a>
//                                               </li>
//                                             ))}
//                                           </ul>
//                                         </div>
//                                       ))}
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </Popover.Panel>
//                           </Transition>
//                         </>
//                       )}
//                     </Popover>
//                   ))}

//                   {/* {navigation.pages.map((page) => (
//                     <a
//                       key={page.name}
//                       href={"/"}
//                       className="flex items-center text-sm font-medium text-white hover:text-gray-800 titulo font no-underline"
//                     >
//                       {page.name.toUpperCase()}
//                     </a>
//                   ))} */}
//                 </div>
//               </Popover.Group>

//               <div className="ml-auto flex items-center item-cart">
//                 <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
//                   <Link to="/" className="text-m font-medium text-white hover:text-gray-900 no-underline">
//                     Inicio
//                   </Link>
//                   <span className="" aria-hidden="true" />
//                   <Link to="/suscripciones" className="text-m font-medium text-white hover:text-gray-900 no-underline">
//                     Suscripciones
//                   </Link>
//                   <span className="" aria-hidden="true" />
//                   <Link to="/degustaciones" className="text-m font-medium text-white hover:text-gray-900 no-underline">
//                     Degustaciones
//                   </Link>
//                   <span className="" aria-hidden="true" />
//                   <Link to="/contacto" className="text-m font-medium text-white hover:text-gray-900 no-underline">
//                     Contacto
//                   </Link>
//                   <span className="" aria-hidden="true" />
//                 </div>

//                 {/* Cart */}
//                 {/* <CartWidget /> */}
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </div>
//   )
// }

import { Fragment, useState } from 'react'
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
