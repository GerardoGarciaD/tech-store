import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context/context";

export default function ProductFilter() {
  return (
    <ProductConsumer>
      {value => {
        // se hace destructuring de la informacion que se quiere obtener del context
        const {
          search,
          min,
          max,
          company,
          price,
          shipping,
          handleChange,
          storeProducts
        } = value;

        return (
          <div className="row my-5">
            <div className="col-10 mx-auto">
              <FilterWrapper>
                {/* Text search */}
                <div>
                  <label htmlFor="search"> search products</label>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={handleChange}
                    value={search}
                    className="filter-item"
                  />
                </div>
                {/* end of text search */}

                {/* Company search */}
                <div>
                  <label htmlFor="company">Company</label>
                  <select
                    name="company"
                    id="company"
                    className="filter-item"
                    value={company}
                    onChange={handleChange}
                  >
                    <option value="all">all</option>
                    <option value="fuji">fuji</option>
                  </select>
                </div>
                {/* end of Company search */}

                {/* price range */}
                <div>
                  <label htmlFor="price">
                    <p className="mb-4">
                      producr price: <span>$ {price}</span>
                    </p>
                  </label>
                  <input
                    type="range"
                    name="price"
                    id="price"
                    min={min}
                    max={max}
                    className="filter-price"
                    onChange={handleChange}
                  />
                </div>
                {/*end of price range */}
                <div>
                  <label htmlFor="shipping mx-2">free shipping</label>
                  <input
                    type="checkbox"
                    name="shipping"
                    id="shipping"
                    onChange={handleChange}
                    checked={shipping && true}
                  />
                </div>
              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;

  label {
    font-weight: bold;
    text-transform: capitalize;
  }

  .filter-item,
  .filter-price {
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 0.5rem;
    border: 2px solid var(--darkGray);
  }
`;
