import { Link } from "react-router-dom"

const products = [
    {
      id: 1,
      name: 'Cabernet Sauvignoc Azul',
      href: '#',
      imageSrc: "../img/wines/cabernet-sauvignoc-azul.jpg",
      imageAlt: "",
      price: '$1350',
    },
    {
        id: 2,
        name: 'Chardonnay Dulce Natural Patridge',
        href: '#',
        imageSrc: '../img/wines/chardonnay-dulce-natural-patridge.jpg',
        imageAlt: "",
        price: '$1100',
      },
      {
        id: 3,
        name: 'Chardonnay Tomero',
        href: '#',
        imageSrc: '../img/wines/chardonnay-tomero.jpg',
        imageAlt: "",
        price: '$2100',
      },
      {
        id: 4,
        name: 'Malbec 375 Las Perdices',
        href: '#',
        imageSrc: '../img/wines/malbec-375-las-perdices.jpg',
        imageAlt: "",
        price: '$1175',
      },
      {
        id: 5,
        name: 'Tomero Rose',
        href: '#',
        imageSrc: '../img/wines/tomero-rose.jpg',
        imageAlt: "",
        price: '$1800',
      },
    // More products...
  ]
  
  export default function ProductLists({id, name, stock, price, imageSrc}) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nuestros productos</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Link to={`/products/${id}`} key={product.id} className="group relative ">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    // src={require(product.imageSrc)}
                    
                    src={process.env.PUBLIC_URL + product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
  