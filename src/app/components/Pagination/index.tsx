import { ProductContext } from "../../../app/services/hooks/useProducts/useProducts"
import { useContext } from "react"

export function Pagination() {
  const { products, setPage, filter } = useContext(ProductContext);
  
  const currentPage = filter?.current_page || products?.current_page;
  const lastPage = filter?.last_page || products?.last_page;

    function renderPageButtons() {
        if (!lastPage || lastPage === 1) {
          return null;
        }
      
        const buttons = [];
      
        for (let i = 1; i <= lastPage; i++) {
          // Adicione os números das páginas vizinhas à página atual
          if (
            i === currentPage ||
            i === currentPage - 1 ||
            i === currentPage + 1 ||
            i === 1 || // Adicione a primeira página
            i === lastPage // Adicione a última página
          ) {
            buttons.push(
              <button
                key={i}
                className={`p-3 rounded-lg w-10 h-10 border border-gray-700 flex justify-center items-center hover:text-white hover:bg-red-500 hover:border-transparent transition-colors ${
                  i === currentPage ? "bg-red-500 border-transparent text-white" : ""
                }`}
                onClick={() => setPage(i)}
              >
                {i}
              </button>
            );
          }
          else if (
            (i === currentPage - 2 && currentPage > 3) || // Adicione elipses antes de páginas distantes da página atual
            (i === currentPage + 2 && currentPage < lastPage - 2) // Adicione elipses após páginas distantes da página atual
          ) {
            buttons.push(
              <span key={`ellipsis-${i}`}>...</span>
            );
          }
        }
      
        return buttons;
      }      

    return (
        <div className='flex justify-end items-end gap-5 py-10 mb-20'>
            {renderPageButtons()}
        </div>
    )
}